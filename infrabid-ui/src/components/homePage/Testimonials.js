import React, { useState } from 'react';
import { IconButton, Box, Typography } from "@mui/material";
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import '../../styles/Testimonials.scss';
import TestimonialCard from "../shared/testimonialCard";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Limit the images to 3 per view
  const imagesPerPage = 3;
  const totalImages = testimonials.length;

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

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + imagesPerPage);

  return (
    <Box className="testimonials-container">
      <Typography variant="h4" className="testimonials-title">
        <span className="highlight">TRUSTED</span> BY MANY
      </Typography>
      <Box className="testimonial-wrapper">
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCard testimonialDetail={testimonial} key={index}/>
        ))}
      </Box>
      <Box className="arrow-buttons-container">
        <IconButton className="arrow-button" onClick={prevImages} disabled={currentIndex === 0}>
          <ArrowBack />
        </IconButton>
        <IconButton className="arrow-button" onClick={nextImages} disabled={currentIndex + imagesPerPage >= totalImages}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;