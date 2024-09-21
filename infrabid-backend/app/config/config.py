"""
Module to keep all constants and configuration at one place
"""

PROJECT_NAME = "INFRABID"
API_STR = "/api/v1"
LOG_DEBUG = False

# Database Configuration
# MONGO_HOST = "mongo"
# MONGO_USER = "root"
# MONGO_PASS = "ca$hc0w"
# MONGO_PORT = "27017"
# MONGO_ADMIN_DB = "admin"
# MONGO_DATA_DB = "POOL_MANAGER"
# REPLICA_SET = "/?authSource=admin&replicaSet=rs0"
# MONGODB_URL = (
#     f"mongodb://{MONGO_USER}:{MONGO_PASS}@{MONGO_HOST}:{MONGO_PORT}{REPLICA_SET}"
# )

# for local testing
MONGO_HOST = "127.0.0.1"
MONGO_PORT = "27017"
MONGO_USER = "mongo"
MONGO_PASS = "mongo"
MONGO_ADMIN_DB = "admin"
MONGO_DATA_DB = "infrabid"
MONGODB_URL = f"mongodb://{MONGO_USER}:{MONGO_PASS}@{MONGO_HOST}:{MONGO_PORT}"

BID_COLLECTION = "bid"
EQUIPMENT_COLLECTION = "equipment"
TENDER_COLLECTION = "tender"


MIN_CONNECTIONS_COUNT = 10
MAX_CONNECTIONS_COUNT = 100