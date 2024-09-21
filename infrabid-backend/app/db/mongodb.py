"""
Handle mongo db operations
"""
from motor.motor_asyncio import AsyncIOMotorClient


class DataBase:
    """
    generic class for the db client
    """

    client: AsyncIOMotorClient = None


db = DataBase()


async def get_database() -> AsyncIOMotorClient:
    """
    get the instance of the db client
    on which operation can be performed
    :return:
    """
    return db.client
