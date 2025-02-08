import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "../styles/ConstructionNeeds.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "./shared/button";

const ConstructionNeeds = () => {
  return (
    <div className="construction-container">
      <Box className="construction-need-title-wrapper">
        <Typography variant="h4" className="construction-need-title">
          YOUR CONSTRUCTION NEEDS <br /> IN <span className="highlight">ONE GO.</span>
        </Typography>
      </Box>
      <Box className="cards-container">
        <Box className="card-wrapper">
          <Card className="card contract" style={{ boxShadow: "none", borderRadius: '0px' }}>
            <CardContent style={{ padding: '0px' }}>
              <Box className="card-image contract-image"></Box>
              <Box className="overlay">
                <Typography variant="h6" className="card-title">FOR CONTRACTS</Typography>
                <Typography className="card-description">
                  Post or bid on construction tenders across India and hassle-free processing.
                </Typography>
                <div>
                  <Button placeholder={'LEARN MORE'} customColor={'#E04E10'} width={200} height={50} />
                </div>
              </Box>
              <div className="features">
                <Box className="feature-item">
                  <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                  <div className="feature-text">
                    Quick Bidding Process
                    <br /> <div className="feature-subtext">Receive bids from contractors or suppliers in no time, helping you move forward faster.</div></div>
                </Box>
                <Box className="feature-item">
                  <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                  <div className="feature-text">Wider Reach
                    <br /> <div className="feature-subtext">Connect with verified professionals across India for reliable partnerships.</div></div>
                </Box>
                <Box className="feature-item">
                  <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                  <div className="feature-text">Cost-Effective Posting
                    <br /> <div className="feature-subtext">List your tenders for a nominal fee, making the process affordable for everyone.</div></div>
                </Box>
              </div>
            </CardContent>
          </Card>
        </Box>
        <Box className="card-wrapper">
          <Card className="card contract" style={{ boxShadow: "none", borderRadius: '0px' }}>
            <CardContent style={{ padding: '0px' }}>
              <Box className="card-image contract-image"></Box>
              <Box className="overlay">
                <Typography variant="h6" className="card-title">{'FOR EQUIPMENT'}</Typography>
                <Typography className="card-description">
                Easily rent or list construction machinery to save time and money.
                </Typography>
                <div>
                  <Button placeholder={'LEARN MORE'} customColor={'#E04E10'} width={200} height={50} />
                </div>
              </Box>
              <div className="features">
                <Box className="feature-item">
                  <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                  <div className="feature-text">
                    {'Easy Rentals & Listings'}
                    <br /> <div className="feature-subtext">{'Rent equipment hassle-free or list your idle machinery to earn extra income.'}</div></div>
                </Box>
                <Box className="feature-item">
                  <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                  <div className="feature-text">{'Diverse Options'}
                    <br /> <div className="feature-subtext">{'Access a wide range of construction machinery tailored to your project needs.'}</div></div>
                </Box>
                <Box className="feature-item">
                  <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                  <div className="feature-text">{'Save Time & Money'}
                    <br /> <div className="feature-subtext">{'Avoid the middleman and directly connect with equipment owners or renters.'}</div></div>
                </Box>
              </div>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default ConstructionNeeds; 