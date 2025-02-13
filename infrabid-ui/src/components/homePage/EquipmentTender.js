import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../../styles/EquipmentRequirements.scss";
import BidCard from "../shared/bidCard";
import Button from "../shared/button";

const EquipmentTender = ({ title, buttonPlaceHolder, data, component }) => {
  return (
    <><Box className={component === 'contracts-equipment' ? "contract-header" : "header"}>
      <Typography variant="h4" className="title">
        {title || 'EQUIPMENT REQUIREMENTS'}
      </Typography>
      {component === 'contracts-equipment' ? <>
        <Button placeholder={'ADD YOUR REQUIRMENT'} customColor={'#E04E10'} width={240} height={50} fontSize={'smaller'}/>
        <Button placeholder={'HIRE EQUIPMENT'} customColor={'#033F59'} width={240} height={50} fontSize={'smaller'}/>
        <Button placeholder={'ADD YOUR EQUIPMENT'} customColor={'#033F59'} width={240} height={50} fontSize={'smaller'}/>
      </> : <Button placeholder={buttonPlaceHolder || 'LIST / RENT EQUIPMENT'} customColor={'#E04E10'} />}
    </Box>
      <Container className="equipment-container" style={{ maxWidth: '100%' }}>
        <Box className="bid-list">
          {data?.map((bid, index) => (
            <BidCard key={index} {...bid} component={component} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default EquipmentTender;
