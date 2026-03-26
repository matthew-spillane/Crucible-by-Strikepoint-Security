from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class ReporterRequest(BaseModel):
    engagement_id: str
    finding_ids: list[str] = []
    sections: list[str] = ["executive_summary", "methodology", "findings", "evidence", "remediation"]


@router.post("")
async def generate_report(body: ReporterRequest):
    # Segment 2: implement AI-assisted markdown + PDF report generation
    return {"status": "not_implemented", "segment": 2, "engagement_id": body.engagement_id}


@router.get("")
async def list_reports():
    return {"status": "not_implemented", "segment": 2}


@router.get("/{report_id}")
async def get_report(report_id: str):
    return {"status": "not_implemented", "segment": 2, "report_id": report_id}
