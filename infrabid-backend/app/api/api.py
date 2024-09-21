"""
FASTAPI API router declared
"""
from fastapi import APIRouter
from .endpoints.equipment_api import router as equipment_api_router
from .endpoints.bid_api import router as bid_api_router
from .endpoints.tender_api import router as tender_api_router

router = APIRouter()

# Adding all api routes
router.include_router(equipment_api_router)
router.include_router(bid_api_router)
router.include_router(tender_api_router)