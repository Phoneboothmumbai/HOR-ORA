# Oracle by Hariom Realty — Landing Page PRD

## Problem
Single-page, high-converting luxury real-estate landing page for Oracle (Mulund East, Mumbai). Primary goal: qualified enquiries via a lead form.

## User personas
- Prospective home-buyer (families) evaluating 2/3 BHK residences in Mulund East.
- Broker/channel partner routing clients.
- Existing society considering redevelopment.

## Core requirements
- Single page; luxury editorial aesthetic (deep brown + gold, Bodoni Moda serif + Montserrat).
- Sections: Header (sticky), Hero (parallax + kinetic reveal), Marquee, About, Manifesto (numbered chapters), Residences (pricing table), Floor Plans (12 tiles + downloadable PDFs), Gallery (asymmetric), Specs, Amenities, Location (map + connectivity), Founder quote, Enquiry form, Footer, Floating WhatsApp+Call.
- Lead form: 5 fields (name, mobile, email, property type, budget); dual-save to MongoDB + Google Form (Google Form is placeholder).
- SEO title/OG meta set.

## Implemented (Dec 2025)
- FastAPI backend at `/app/backend/server.py`: POST /api/leads, GET /api/leads, GET /api/health. MongoDB via MONGO_URL/DB_NAME.
- React frontend at `/app/frontend/src/pages/OracleLanding.jsx` + `/app/frontend/src/components/oracle/*`.
- lenis smooth scroll + framer-motion (line-by-line reveals, parallax hero, staggered manifesto, marquee).
- Brand assets integrated (Oracle logo, Hariom Realty logo, 3 sample flat renders).
- Placeholder PDF for floor plans at `/public/floor-plans/oracle-plan-placeholder.pdf`.
- Google Form submit stub (client to paste FORM_ID + entry.XXXX later).
- Backend tests 10/10; frontend E2E 95% (empty-form validation, happy path submit, PDF download, mobile menu).

## Backlog (P0 → P2)
- P0: Client to supply Google Form FORM_ID + entry IDs; paste in `Enquiry.jsx`.
- P0: Auth-gate GET /api/leads (currently public PII).
- P1: Replace placeholder PDFs with real CAD floor plans.
- P1: Real MahaRERA QR image (replace pattern placeholder in Footer).
- P1: Real founder headshot (currently placeholder image).
- P2: Instant lead alerts (Apps Script onFormSubmit).
- P2: Change POST /api/leads to 201; add rate-limit / duplicate-guard.
