from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class OsintRequest(BaseModel):
    target: str
    target_type: str = "domain"
    sources: list[str] = []
    engagement_id: str | None = None


@router.post("")
async def run_osint(body: OsintRequest):
    return {"status": "not_implemented", "segment": 2, "target": body.target}


@router.get("/{run_id}")
async def get_osint_result(run_id: str):
    return {"status": "not_implemented", "segment": 2, "run_id": run_id}
