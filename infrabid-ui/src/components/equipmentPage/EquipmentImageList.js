import React, { useState } from 'react';
import { IconButton, Box, Typography, Card, CardContent } from "@mui/material";
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import '../../styles/ContractImageList.scss';
import TestimonialCard from "../shared/testimonialCard";
import ButtonComponent from '../shared/button';

const EquipmentImageList = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limit the images to 3 per view
  const imagesPerPage = 3;
  const totalImages = images.length;

  // Show the next set of images
  const nextImages = () => {
    if (currentIndex + imagesPerPage < totalImages) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  // Show the previous set of images
  const prevImages = () => {
    if (currentIndex - imagesPerPage >= 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  const displayedEquipmentImages = images.slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <Box className="contracts-images-container">
      <Box className="contracts-images-arrow-buttons-container">
        <IconButton className="contracts-images-arrow-button" onClick={prevImages} disabled={currentIndex === 0}>
          <ArrowBack />
        </IconButton>
        <IconButton className="contracts-images-arrow-button" onClick={nextImages} disabled={currentIndex + imagesPerPage >= totalImages}>
          <ArrowForward />
        </IconButton>
      </Box>
      <Typography variant="h4" className="contracts-images-title" style={{ color: '#033F59', fontSize: '32px', fontWeight: 600 }}>
        CATEGORIES WE DEAL
      </Typography>
      <Box className="contracts-images-wrapper">
        {displayedEquipmentImages.map((image, index) => (
          // <TestimonialCard testimonialDetail={image} key={index}/>
          <Card className="contracts-images-testimonial-card" style={{ boxShadow: "none", borderRadius: '0px', width: '320px', height: '380px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", padding: '0px', gap: '12px'}}>
              <Typography variant="body1" className="contracts-images-text">
                {image.title}
              </Typography>
              <Box className="contracts-image-wrapper">
                <img src={image.image} alt={image.title} className="contracts-image" />
              </Box>
              <ButtonComponent placeholder={'View requirements'} width={168} height={40} fontSize={10} customColor={'#E04E10'}/>
            </CardContent>
          </Card>
        ))}
      </Box>

    </Box>
  );
};

export default EquipmentImageList;