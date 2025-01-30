import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../styles/EquipmentRequirements.scss"; // Import SCSS
import BidCard from "./shared/bidCard";
import Button from "./shared/button";

const EquipmentRequirements = ({title, buttonPlaceHolder, data, component}) => {
  return (
    <><Box className="header">
      <Typography variant="h4" className="title">
        {title || 'EQUIPMENT REQUIREMENTS'}
      </Typography>
      <Button placeholder={buttonPlaceHolder || 'LIST / RENT EQUIPMENT'} customColor={'#E04E10'} />
    </Box><Container className="equipment-container" style={{maxWidth: '100%'}}>
        <Box className="bid-list">
          {data?.map((bid, index) => (
            <BidCard key={index} {...bid} component={component}/>
          ))}
        </Box>
      </Container></>
  );
};

export default EquipmentRequirements;
