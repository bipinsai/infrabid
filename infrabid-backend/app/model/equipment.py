from datetime import datetime

from bson import ObjectId
from pydantic import BaseModel, Field
from typing import List, Optional

class PyObjectId(ObjectId):
    """
    class to validate mongo id value as object
    """

    @classmethod
    def __get_validators__(cls):
        """

        :return:
        """
        yield cls.validate

    @classmethod
    def validate(cls, v):
        """

        :param v:
        :return:
        """
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        """

        :param field_schema:
        :return:
        """
        field_schema.update(type="string")

class Equipment(BaseModel):
    """
    Equipment model class
    """

    id: Optional[PyObjectId] = Field(alias="_id")
    owner_email : str
    equipment_name : str
    equipment_details : {}
    created_on: Optional[datetime]
    updated_on: Optional[datetime]

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        use_enum_values = True
        json_encoders = {ObjectId: str}

    def initialize_new_equipment(self):
        if hasattr(self, "id"):
            delattr(self, "id")
        self.created_on = datetime.utcnow()
        self.updated_on = datetime.utcnow()
