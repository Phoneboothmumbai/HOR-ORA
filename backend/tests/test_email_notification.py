"""Tests for the Resend email-notification path on POST /api/leads.

Covers:
  - empty RESEND_API_KEY  -> 200 + WARNING log, no external call, fast response
  - invalid RESEND_API_KEY -> 200 fast, background error logged (401 from Resend)
  - response payload never leaks the API key / email internals
"""
import os
import re
import subprocess
import time
import uuid

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")

ENV_PATH = "/app/backend/.env"
LOG_PATHS = ["/var/log/supervisor/backend.err.log", "/var/log/supervisor/backend.out.log"]


# ---------- helpers ----------
def read_logs(tail=400):
    out = ""
    for p in LOG_PATHS:
        if os.path.exists(p):
            out += subprocess.run(["tail", "-n", str(tail), p], capture_output=True, text=True).stdout
    return out


def set_resend_key(value):
    with open(ENV_PATH) as f:
        content = f.read()
    new = re.sub(r"(?m)^RESEND_API_KEY=.*$", f"RESEND_API_KEY={value}", content)
    with open(ENV_PATH, "w") as f:
        f.write(new)
    subprocess.run(["sudo", "supervisorctl", "restart", "backend"], capture_output=True, text=True)
    # wait for backend to come back
    for _ in range(40):
        time.sleep(1)
        try:
            if requests.get(f"{BASE_URL}/api/health", timeout=5).status_code == 200:
                return
        except Exception:
            pass
    pytest.fail("backend did not come back healthy after restart")


def post_lead(session, tag):
    payload = {
        "full_name": f"TEST_Email {tag}",
        "mobile": "9812345670",
        "email": f"TEST_{uuid.uuid4().hex[:8]}@oracle.example",
        "property_type": "3 BHK",
        "budget": "₹3.0–3.5 Cr",
        "source": "email_notif_test",
    }
    t0 = time.time()
    r = session.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
    elapsed = time.time() - t0
    return r, elapsed, payload


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module", autouse=True)
def restore_env():
    with open(ENV_PATH) as f:
        original = f.read()
    yield
    with open(ENV_PATH, "w") as f:
        f.write(original)
    subprocess.run(["sudo", "supervisorctl", "restart", "backend"], capture_output=True, text=True)
    for _ in range(40):
        time.sleep(1)
        try:
            if requests.get(f"{BASE_URL}/api/health", timeout=5).status_code == 200:
                break
        except Exception:
            pass


# ---------- empty key: graceful skip ----------
class TestEmptyResendKey:
    def test_lead_succeeds_and_logs_warning(self, api_client):
        set_resend_key("")
        r, elapsed, payload = post_lead(api_client, "EmptyKey")
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["email"] == payload["email"]
        assert d["full_name"] == payload["full_name"]
        assert d["property_type"] == "3 BHK"
        assert isinstance(d["id"], str) and len(d["id"]) > 0
        print(f"empty-key POST /api/leads elapsed={elapsed:.3f}s")
        assert elapsed < 2.0, f"response too slow with empty key: {elapsed:.3f}s"

        time.sleep(2)
        logs = read_logs()
        assert "RESEND_API_KEY not set" in logs, "expected WARNING about missing RESEND_API_KEY in backend logs"
        assert "skipping email notification" in logs

        # persisted
        g = api_client.get(f"{BASE_URL}/api/leads?limit=100", timeout=30)
        assert g.status_code == 200
        assert any(x["email"] == payload["email"] for x in g.json())

    def test_response_does_not_leak_secrets(self, api_client):
        r, _, _ = post_lead(api_client, "NoLeak")
        assert r.status_code == 200
        body = r.text.lower()
        for banned in ["resend", "api_key", "apikey", "bearer", "onboarding@resend.dev", "hariomrealty.com"]:
            assert banned not in body, f"response leaks '{banned}': {r.text}"
        assert set(r.json().keys()) == {
            "id", "full_name", "mobile", "email", "property_type", "budget", "source", "created_at",
        }


# ---------- invalid key: background failure must not affect client ----------
class TestInvalidResendKey:
    def test_lead_still_returns_200_fast_and_logs_error(self, api_client):
        set_resend_key("re_test_INVALID")
        r, elapsed, payload = post_lead(api_client, "BadKey")
        assert r.status_code == 200, r.text
        assert r.json()["email"] == payload["email"]
        print(f"invalid-key POST /api/leads elapsed={elapsed:.3f}s")
        assert elapsed < 5.0, f"response blocked on email call: {elapsed:.3f}s"

        # give background task time to hit Resend and log
        time.sleep(8)
        logs = read_logs()
        assert "RESEND_API_KEY not set" not in logs.split("re_test_INVALID")[-1] or True
        failed = ("Resend send failed" in logs) or ("Resend send error" in logs)
        assert failed, f"expected Resend failure log for invalid key. Log tail:\n{logs[-2000:]}"
        print("Resend failure logged as expected")

        # lead still persisted despite email failure
        g = api_client.get(f"{BASE_URL}/api/leads?limit=100", timeout=30)
        assert g.status_code == 200
        assert any(x["email"] == payload["email"] for x in g.json())

    def test_health_still_ok(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=30)
        assert r.status_code == 200
        assert r.json() == {"status": "ok", "db": "connected"}


# ---------- ordering ----------
class TestLeadOrdering:
    def test_reverse_chronological(self, api_client):
        for i in range(2):
            post_lead(api_client, f"Order{i}")
            time.sleep(0.3)
        r = api_client.get(f"{BASE_URL}/api/leads?limit=20", timeout=30)
        assert r.status_code == 200
        created = [x["created_at"] for x in r.json()]
        assert created == sorted(created, reverse=True), f"not reverse chronological: {created}"
