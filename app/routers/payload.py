from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class PayloadRequest(BaseModel):
    type: str
    language: str
    options: dict = {}


@router.post("")
async def generate_payload(body: PayloadRequest):
    return {"status": "not_implemented", "segment": 2, "type": body.type, "language": body.language}
