import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../../styles/HireEquipment.scss";
import ButtonComponent from "../shared/button";

const Contracts = () => {
  return (
    <Box className="hero-container">
      <Box className="tender-section">
        {/* Overlay Content */}
        <Box className="hero-overlay">
          <Typography style={{color: '#FFFFFF', textAlign: 'left', fontSize: '48px', fontWeight: 600}} variant="h4" className="hero-title">
            Streamline Your Tender <br/> Process Today
          </Typography>
          <Box className="hero-buttons">
            <ButtonComponent placeholder={'Explore tenders'}  customColor={'#E04E10'} fontSize={14}  width={240} height={58}/>
            <ButtonComponent placeholder={'Add your tender'}  width={240} height={58} fontSize={14} style={{fontSize: '14px', background: 'linear-gradient(to right bottom, #033F59, #001A26)'}} border={'1px solid #D2D2D2'}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contracts;