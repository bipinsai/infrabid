"""
Utility class for mongodb operations
"""
import logging
import sys
from motor.motor_asyncio import AsyncIOMotorClient
from app.db.mongodb import db, get_database
from app.config.config import MONGODB_URL, MAX_CONNECTIONS_COUNT, MIN_CONNECTIONS_COUNT

sys.path.append("..")  # Adds higher directory to python modules path.


async def connect_to_mongo():
    """
    bootstrap to connect to mongo
    :return:
    """
    logging.info("Connecting to mongo")
    db.client = AsyncIOMotorClient(
        str(MONGODB_URL),
        maxPoolSize=MAX_CONNECTIONS_COUNT,
        minPoolSize=MIN_CONNECTIONS_COUNT,
    )
    logging.info("connected to mongo")
    await get_server_info()
    logging.info("created indexes in mongo")


async def get_server_info():
    """
    create index at startup
    :return:
    """
    conn = await get_database()
    # create a index  in descending order
    try:
        print(await conn.server_info())
    except Exception:
        print("Unable to connect to the server.")
    # await conn[MONGO_DATA_DB][MONGO_DB_COLLECTION].create_index([("sddc_id", -1)])


async def close_mongo_connection():
    """
    teardown to close connection to mongo
    :return:
    """

    logging.info("closing connection to mongo")
    db.client.close()
    logging.info("closed connection to mongo")


async def get_db_wrapper():
    """
    db wrapper to get db
    or instantiate and get
    db
    :return:
    """
    conn = await get_database()
    # for test client - this needs to be
    # instantiated
    if not conn:
        await connect_to_mongo()
        conn = await get_database()
    return conn