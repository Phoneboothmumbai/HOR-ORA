from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)
logger = logging.getLogger(__name__)

# ---------- MongoDB ----------
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# ---------- Email (Resend direct) ----------
RESEND_API_URL = "https://api.resend.com/emails"
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
# Verified sender identity on your Resend account, e.g. "Oracle by Hariom Realty <hello@hariomrealty.com>"
RESEND_FROM = os.environ.get("RESEND_FROM", "Oracle by Hariom Realty <onboarding@resend.dev>")
LEAD_NOTIFY_EMAIL = os.environ.get("LEAD_NOTIFY_EMAIL", "contact@hariomrealty.com")

app = FastAPI(title="Oracle by Hariom Realty API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class LeadCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=100)
    mobile: str = Field(..., min_length=10, max_length=15)
    email: EmailStr
    property_type: str = Field(..., description="1 BHK | 2 BHK | 3 BHK")
    budget: str = Field(..., description="Budget bracket")
    source: Optional[str] = Field(default="landing_page")


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    mobile: str
    email: str
    property_type: str
    budget: str
    source: str = "landing_page"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Email helper ----------
def _lead_email_html(lead: Lead) -> str:
    when = lead.created_at.strftime("%d %b %Y, %I:%M %p UTC")
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;background:#F5EBDD;padding:32px 0;">
      <tr><td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#35251F;color:#E9D6C7;padding:0;border:1px solid #A37C3B;">
          <tr><td style="padding:28px 32px;border-bottom:1px solid #A37C3B;">
            <div style="font-family:Georgia,serif;font-size:24px;letter-spacing:2px;">ORACLE</div>
            <div style="font-size:11px;letter-spacing:2px;color:#A37C3B;margin-top:4px;">NEW ENQUIRY · BY HARIOM REALTY</div>
          </td></tr>
          <tr><td style="padding:28px 32px;">
            <div style="font-family:Georgia,serif;font-size:22px;line-height:1.3;color:#E9D6C7;margin-bottom:24px;">
              A new lead just registered interest.
            </div>
            <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;color:#E9D6C7;">
              <tr><td style="color:#A37C3B;width:140px;">Name</td><td>{lead.full_name}</td></tr>
              <tr><td style="color:#A37C3B;">Mobile</td><td><a href="tel:+91{lead.mobile}" style="color:#E9D6C7;">+91 {lead.mobile}</a></td></tr>
              <tr><td style="color:#A37C3B;">Email</td><td><a href="mailto:{lead.email}" style="color:#E9D6C7;">{lead.email}</a></td></tr>
              <tr><td style="color:#A37C3B;">Property</td><td>{lead.property_type}</td></tr>
              <tr><td style="color:#A37C3B;">Budget</td><td>{lead.budget}</td></tr>
              <tr><td style="color:#A37C3B;">Source</td><td>{lead.source}</td></tr>
              <tr><td style="color:#A37C3B;">Received</td><td>{when}</td></tr>
            </table>
            <div style="margin-top:28px;">
              <a href="https://wa.me/91{lead.mobile}" style="display:inline-block;background:#A37C3B;color:#24160F;padding:12px 20px;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;">WhatsApp {lead.full_name.split()[0]}</a>
            </div>
          </td></tr>
          <tr><td style="padding:20px 32px;border-top:1px solid #A37C3B;font-size:11px;color:#A37C3B;letter-spacing:1px;">
            Automated notification · oracle.hariomrealty.com
          </td></tr>
        </table>
      </td></tr>
    </table>
    """.strip()


async def send_lead_notification(lead: Lead) -> None:
    """Fire-and-forget email to the sales inbox. Never raises."""
    if not RESEND_API_KEY:
        logger.warning("RESEND_API_KEY not set — skipping email notification")
        return
    subject = f"New Oracle enquiry · {lead.property_type} · {lead.full_name}"
    payload = {
        "from": RESEND_FROM,
        "to": [LEAD_NOTIFY_EMAIL],
        "subject": subject,
        "html": _lead_email_html(lead),
        "reply_to": lead.email,
    }
    try:
        async with httpx.AsyncClient(timeout=15) as http:
            r = await http.post(
                RESEND_API_URL,
                headers={
                    "Authorization": f"Bearer {RESEND_API_KEY}",
                    "Content-Type": "application/json",
                },
                json=payload,
            )
            r.raise_for_status()
            logger.info(f"Lead email sent for {lead.email} → {LEAD_NOTIFY_EMAIL}")
    except httpx.HTTPStatusError as e:
        logger.error(f"Resend send failed {e.response.status_code}: {e.response.text}")
    except Exception as e:
        logger.error(f"Resend send error: {e}")


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Oracle by Hariom Realty API", "status": "live"}


@api_router.get("/health")
async def health():
    try:
        await db.command("ping")
        return {"status": "ok", "db": "connected"}
    except Exception as e:
        raise HTTPException(status_code=503, detail=f"DB error: {e}")


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate, background: BackgroundTasks):
    lead = Lead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    logger.info(f"New lead: {lead.email} | {lead.property_type} | {lead.budget}")
    # Fire-and-forget: doesn't block the response
    background.add_task(send_lead_notification, lead)
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads(limit: int = 100):
    leads = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for l in leads:
        if isinstance(l.get('created_at'), str):
            l['created_at'] = datetime.fromisoformat(l['created_at'])
    return leads


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
