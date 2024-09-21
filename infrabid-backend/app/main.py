import logging
import sys
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

sys.path.append("..")
from app.api.api import router as api_router
from app.config.config import PROJECT_NAME, API_STR
from app.db.mongodb_utils import close_mongo_connection, connect_to_mongo


# start fast api server
app = FastAPI(title=PROJECT_NAME, docs_url="/")

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", connect_to_mongo)
app.add_event_handler("shutdown", close_mongo_connection)

# include all router apis
app.include_router(api_router, prefix=API_STR)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)