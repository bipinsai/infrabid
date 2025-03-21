import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../shared/button";
import "../../styles/ConstructionNeeds.scss";

const ConstructionNeeds = () => {
  // Separate data for FOR CONTRACTS and FOR EQUIPMENT
  const constructionData = [
    {
      title: "FOR CONTRACTS",
      description: "Post or  bid on construction tenders across India with hassle-free .",
      imageClass: "contract-image",
      features: [
        {
          title: "Seamless Bidding",
          description: "Receive bids from subcontractors or suppliers instantly, ensuring seamless project execution."
        },
        {
          title: "Nationwide Network",
          description: "Connect with trusted professionals across India for reliable partnerships."
        },
        {
          title: "Cost-Effective Tenders",
          description: "Post and bid for tenders at minimal cost, making bidding accessible for all stakeholders."
        }
      ]
    },
    {
      title: "FOR EQUIPMENT",
      description: "Easily rent or list construction machinery to save time and money.",
      imageClass: "equipment-image",
      features: [
        {
          title: "Easy Rentals & Listings",
          description: "Rent equipment hassle-free or list idle machinery to generate additional income."
        },
        {
          title: "Diverse Options",
          description: "Access a wide range of construction machinery tailored to your project needs."
        },
        {
          title: "Save Time & Money",
          description: "Avoid the middleman and directly connect with equipment providers and customers"
        }
      ]
    }
  ];

  return (
    <div className="construction-container">
      <Box className="construction-need-title-wrapper">
        <Typography 
          variant="h4" 
          className="construction-need-title"
        >
          ALL YOUR CONSTRUCTION NEEDS <br /> IN <span className="highlight">ONE GO.</span>
        </Typography>
      </Box>
      <Box className="cards-container">
        {constructionData.map((cardData, index) => (
          <Box className="card-wrapper" key={index}>
            <Card className="card" style={{ boxShadow: "none", borderRadius: '0px' }}>
              <CardContent className="card-content" style={{ padding: '0px' }}>
                <Box className={`card-image ${cardData.imageClass}`}></Box>
                <Box className="overlay">
                  <Typography 
                    variant="h6" 
                    className="card-title"
                  >
                    {cardData.title}
                  </Typography>
                  <Typography className="card-description">
                    {cardData.description}
                  </Typography>
                  <div>
                    <Button 
                      placeholder={'LEARN MORE'} 
                      customColor={'#E04E10'} 
                      width={200} 
                      height={50} 
                      onClick={() => {
                        const path = cardData.title === "FOR CONTRACTS" ? "/contracts" : "/equipment";
                        window.location.href = path;
                      }}
                    />
                  </div>
                </Box>
                <div className="features">
                  {cardData.features.map((feature, i) => (
                    <Box className="feature-item" key={i}>
                      <CheckCircleIcon className="feature-icon" style={{ fontSize: '32px' }} />
                      <div className="feature-text">
                        {feature.title}
                        <br /> 
                        <div className="feature-subtext">
                          {feature.description}
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