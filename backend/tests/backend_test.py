"""Backend API tests for Oracle by Hariom Realty (leads, health, root)."""
import os
import uuid

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health / root ----------
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["message"] == "Oracle by Hariom Realty API"
        assert data["status"] == "live"

    def test_health(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["status"] == "ok"
        assert data["db"] == "connected"


# ---------- Leads ----------
class TestLeads:
    def test_create_lead_and_verify_persistence(self, api_client):
        email = f"TEST_{uuid.uuid4().hex[:8]}@oracle.example"
        payload = {
            "full_name": "TEST_Awwwards Tester",
            "mobile": "9876543210",
            "email": email,
            "property_type": "2 BHK",
            "budget": "₹2.2–2.5 Cr",
            "source": "oracle_landing",
        }
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        d = r.json()
        assert isinstance(d.get("id"), str) and len(d["id"]) > 0
        assert d["full_name"] == payload["full_name"]
        assert d["mobile"] == payload["mobile"]
        assert d["email"] == email
        assert d["property_type"] == "2 BHK"
        assert d["budget"] == payload["budget"]
        assert d["source"] == "oracle_landing"
        assert isinstance(d.get("created_at"), str) and "T" in d["created_at"]

        # verify via GET
        g = api_client.get(f"{BASE_URL}/api/leads", timeout=30)
        assert g.status_code == 200, g.text
        leads = g.json()
        assert isinstance(leads, list)
        match = [x for x in leads if x["email"] == email]
        assert len(match) == 1, f"created lead not found in GET /api/leads ({len(leads)} leads)"
        assert match[0]["id"] == d["id"]
        assert "_id" not in match[0]

    def test_default_source(self, api_client):
        payload = {
            "full_name": "TEST_Default Source",
            "mobile": "9000000001",
            "email": f"TEST_{uuid.uuid4().hex[:8]}@oracle.example",
            "property_type": "1 BHK",
            "budget": "₹1.9–2.2 Cr",
        }
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        assert r.json()["source"] == "landing_page"

    @pytest.mark.parametrize(
        "payload,label",
        [
            ({}, "empty body"),
            ({"mobile": "9876543210", "email": "a@b.com", "property_type": "2 BHK", "budget": "X"}, "missing name"),
            ({"full_name": "TEST_A", "mobile": "9876543210", "email": "not-an-email", "property_type": "2 BHK", "budget": "X"}, "bad email"),
            ({"full_name": "TEST_A", "mobile": "98765", "email": "a@b.com", "property_type": "2 BHK", "budget": "X"}, "short mobile"),
            ({"full_name": "T", "mobile": "9876543210", "email": "a@b.com", "property_type": "2 BHK", "budget": "X"}, "1-char name"),
        ],
    )
    def test_invalid_payloads(self, api_client, payload, label):
        r = api_client.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
        assert 400 <= r.status_code < 500, f"{label}: expected 4xx got {r.status_code} {r.text}"

    def test_list_leads_limit(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/leads?limit=1", timeout=30)
        assert r.status_code == 200, r.text
        assert len(r.json()) <= 1
