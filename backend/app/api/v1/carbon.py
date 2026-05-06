import uuid
from datetime import datetime
from random import randint

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class CreateReportRequest(BaseModel):
    organization: str
    reporting_period: str


class CarbonReportResponse(BaseModel):
    id: str
    organization: str
    reporting_period: str
    total_co2e_tons: int
    scope_breakdown: dict
    reduction_targets: list[str]
    created_at: str


class TrendDataPoint(BaseModel):
    quarter: str
    co2e_tons: int


@router.post("/reports", response_model=CarbonReportResponse)
async def create_report(payload: CreateReportRequest):
    return CarbonReportResponse(
        id=str(uuid.uuid4()),
        organization=payload.organization,
        reporting_period=payload.reporting_period,
        total_co2e_tons=randint(100, 10000),
        scope_breakdown={"scope1": 30, "scope2": 40, "scope3": 30},
        reduction_targets=["Reduce travel 20%"],
        created_at=datetime.utcnow().isoformat(),
    )


@router.get("/reports/{report_id}/trends", response_model=list[TrendDataPoint])
async def get_trends(report_id: str):
    return [
        TrendDataPoint(quarter="Q1", co2e_tons=randint(100, 5000)),
        TrendDataPoint(quarter="Q2", co2e_tons=randint(100, 5000)),
        TrendDataPoint(quarter="Q3", co2e_tons=randint(100, 5000)),
        TrendDataPoint(quarter="Q4", co2e_tons=randint(100, 5000)),
    ]
