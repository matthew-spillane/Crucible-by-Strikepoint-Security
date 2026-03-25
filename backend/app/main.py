import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.routers import health, recon, webvuln, osint, payload, intel, reporter, auto

load_dotenv()

app = FastAPI(
    title="Crucible API",
    description="Strikepoint Crucible — Pentesting Suite Backend",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ── CORS ───────────────────────────────────────────────────────────────────────
_cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173")
origins = [o.strip() for o in _cors_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ────────────────────────────────────────────────────────────────────
app.include_router(health.router)
app.include_router(recon.router,    prefix="/recon",    tags=["Recon"])
app.include_router(webvuln.router,  prefix="/webvuln",  tags=["Web Vuln"])
app.include_router(osint.router,    prefix="/osint",    tags=["OSINT"])
app.include_router(payload.router,  prefix="/payload",  tags=["Payload Lab"])
app.include_router(intel.router,    prefix="/intel",    tags=["Threat Intel"])
app.include_router(reporter.router, prefix="/reporter", tags=["Reporter"])
app.include_router(auto.router,     prefix="/auto",     tags=["Auto Mode"])
