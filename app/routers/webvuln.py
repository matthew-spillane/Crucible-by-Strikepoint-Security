from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class WebVulnRequest(BaseModel):
    target_url: str
    engagement_id: str | None = None
    modules: list[str] = []


@router.post("")
async def run_webvuln(body: WebVulnRequest):
    return {"status": "not_implemented", "segment": 2, "target": body.target_url}


@router.get("/{scan_id}")
async def get_webvuln_result(scan_id: str):
    return {"status": "not_implemented", "segment": 2, "scan_id": scan_id}
