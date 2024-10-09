import logging
import sys
from fastapi import APIRouter, HTTPException
from starlette.status import HTTP_404_NOT_FOUND, HTTP_400_BAD_REQUEST

from app.crud.bid import create_bid
from app.model.bid import Bid

sys.path.append("..")
router = APIRouter()

@router.get("/bid/{bid_id}", tags=["BIDS"])
async def get_bid_by_id(
    bid_id,
):
    logging.info("Getting bid with id")
    res = await get_bid_data(
        bid_id=bid_id,
    )
    if res:
        return Pool(**res)
    logging.info("Error occured. Bid not found")
    raise HTTPException(status_code=HTTP_404_NOT_FOUND, detail="Pool not found")

@router.post("/bid", tags=["POOLS"])
async def create_pool(bid: Bid):
    """
    :param bid:
    :return:
    """
    logging.info("Creating new bid")
    res = await create_bid(bid)
    if "Error_Msg" in res.keys():
        raise HTTPException(status_code=HTTP_400_BAD_REQUEST, detail=res["Error_Msg"])
    logging.info("Created new bid")
    return Bid(**res)