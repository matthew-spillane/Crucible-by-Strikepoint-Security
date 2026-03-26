from fastapi import APIRouter
from datetime import datetime, timezone

router = APIRouter(tags=["Health"])


@router.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "crucible-api",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "version": "1.0.0",
        "segment": 1,
    }
