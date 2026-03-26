from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class AutoRunRequest(BaseModel):
    target: str
    engagement_id: str | None = None
    scope_notes: str | None = None


@router.post("")
async def start_auto_run(body: AutoRunRequest):
    return {
        "status": "not_implemented",
        "segment": 2,
        "message": "Auto Mode agentic engine coming in Segment 2.",
        "target": body.target,
    }


@router.get("/{run_id}")
async def get_auto_run_status(run_id: str):
    return {"status": "not_implemented", "segment": 2, "run_id": run_id}


@router.get("")
async def list_auto_runs():
    return {"status": "not_implemented", "segment": 2}
