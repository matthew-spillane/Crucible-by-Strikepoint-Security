from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class IntelRequest(BaseModel):
    query: str
    query_type: str = "cve"  # cve | ioc | domain | hash | general
    target_id: str | None = None
    context: str | None = None


@router.post("")
async def query_intel(body: IntelRequest):
    # Segment 2: implement CVE lookup, IOC enrichment, threat actor correlation
    return {"status": "not_implemented", "segment": 2, "query": body.query}


@router.get("/saved")
async def get_saved_intel():
    return {"status": "not_implemented", "segment": 2}
