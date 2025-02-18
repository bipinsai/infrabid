import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../shared/button";
import "../../styles/ConstructionNeeds.scss";

const ConstructionNeeds = () => {
  return (
    <div className="construction-container">
      <Box className="construction-need-title-wrapper">
        <Typography 
          variant="h4" 
          className="construction-need-title"
          style={{ 
            fontFamily: 'Clash Grotesk Variable', 
            fontWeight: 600, 
            fontSize: '40px', 
            lineHeight: '56px', 
            letterSpacing: '0%',
             marginTop: '100px'
          }}
        >
          ALL YOUR CONSTRUCTION NEEDS <br /> IN <span className="highlight">ONE GO.</span>
        </Typography>
      </Box>
      <Box className="cards-container">
        {["FOR CONTRACTS", "FOR EQUIPMENT"].map((title, index) => (
          <Box className="card-wrapper" key={index}>
            <Card className="card contract" style={{ boxShadow: "none", borderRadius: '0px' }}>
              <CardContent style={{ padding: '0px' }}>
                <Box className="card-image contract-image"></Box>
                <Box className="overlay">
                  <Typography 
                    variant="h6" 
                    className="card-title"
                    style={{ 
                      fontFamily: 'Clash Grotesk Variable', 
                      fontWeight: 600, 
                      fontSize: '36px', 
                      lineHeight: '56px', 
                      letterSpacing: '0%'
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography className="card-description">
                    {index === 0
                      ? "Post or bid on construction tenders across India and hassle-free processing."
                      : "Easily rent or list construction machinery to save time and money."}
                  </Typography>
                  <div>
                    <Button placeholder={'LEARN MORE'} customColor={'#E04E10'} width={200} height={50} />
                  </div>
                </Box>
                <div className="features">
                  {["Seamless Bidding", "Nationwide Network", "Cost-Effective Tenders"].map((feature, i) => (
                    <Box className="feature-item" key={i}>
                      <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                      <div className="feature-text">
                        {feature}
                        <br /> 
                        <div className="feature-subtext">
                          {index === 0
                            ? [
                                "Receive bids from contractors or suppliers in no time, helping you move forward faster.",
                                "Connect with verified professionals across India for reliable partnerships.",
                                "List your tenders for a nominal fee, making the process affordable for everyone."
                              ][i]
                            : [
                                "Rent equipment hassle-free or list your idle machinery to earn extra income.",
                                "Access a wide range of construction machinery tailored to your project needs.",
                                "Avoid the middleman and directly connect with equipment owners or renters."
                              ][i]}
                        </div>
                      </div>
                    </Box>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};


export default ConstructionNeeds; 