// import React from "react";
// import logo from '../../assets/background.jpg'

// const HireEquipment = () => {
//     return (
//         <div style={{padding: '20px', alignSelf: 'cente'}}>
//             <img style={{maxWidth: '1280px', maxHeight: '460px'}} src={logo} alt="Logo" />
//         </div>
//     )
// }

// export default HireEquipment

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../../styles/HireEquipment.scss";
import ButtonComponent from "../shared/button";

const HireEquipment = () => {
  return (
    <Box className="hero-container">
      <Box className="hero-section">
        {/* Overlay Content */}
        <Box className="hero-overlay">
          <Typography style={{color: '#FFFFFF', textAlign: 'left', fontSize: '48px', fontWeight: 600}} variant="h4" className="hero-title">
            Ready to Power Your <br/> Projects?
          </Typography>
          <Box className="hero-buttons">
            <ButtonComponent placeholder={'View Requirements'}  customColor={'#E04E10'} fontSize={14}  width={240} height={58}/>
            <ButtonComponent placeholder={'Hire Equipment'}  width={240} height={58} fontSize={14} style={{fontSize: '14px', background: 'linear-gradient(to right bottom, #033F59, #001A26)'}} border={'1px solid #D2D2D2'}/>
            <ButtonComponent placeholder={'Add Your Equipment'} width={240} height={58} fontSize={14}  style={{background: 'linear-gradient(to right bottom, #033F59, #001A26)'}} customColor={'#E04E10'} border={'1px solid #D2D2D2'}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HireEquipment;
