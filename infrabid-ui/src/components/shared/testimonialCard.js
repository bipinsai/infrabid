import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "../../styles/TestimonialCard.scss"

const TestimonialCard = ({ testimonialDetail }) => {
  return (
    <Card className="testimonial-card" style={{ boxShadow: "none", borderRadius: '0px', background: 'linear-gradient(#ECF2F4, #C1D2DA)' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start" }}>
        <Typography variant="body1" className="testimonial-text">
          "{testimonialDetail.text}"
        </Typography>
        <Box className="testimonial-author">
          <img src={testimonialDetail.image} alt={testimonialDetail.name} className="author-image" />
        </Box>
        <Typography variant="h6" className="author-name">
          {testimonialDetail.name}
        </Typography>
        <Typography variant="body2" className="author-role">
          {testimonialDetail.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
