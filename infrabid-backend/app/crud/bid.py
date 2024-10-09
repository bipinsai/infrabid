from app.config.config import MONGO_DATA_DB, BID_COLLECTION
from app.db.mongodb_utils import get_db_wrapper
from app.model.bid import Bid


async def create_bid(bid: Bid):
    bid.initialize_new_bid()
    conn = await get_db_wrapper()
    cursor = conn[MONGO_DATA_DB][BID_COLLECTION]
    ret = await cursor.insert_one(bid.dict())
    bid.id = ret.inserted_id
    return bid.dict()

# async def get_bid_data(bid_id: str = None):

