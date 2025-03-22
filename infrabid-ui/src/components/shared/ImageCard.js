import React from 'react';
import { Card, Typography, IconButton } from '@mui/material';
import '../../styles/ImageCard.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const ImageCard = () => {
    return (
        <div className="about-container">
            <div className="image-container"></div>
            <Card className="about-card" style={{ background: '#E04E10' }}>
                <Typography className="title">ABOUT US</Typography>
                <Typography variant="body1" className="description">
                    We are a passionate team of civil professionals dedicated to the construction industry,
                    blending traditional expertise with cutting-edge technology to deliver innovative solutions that exceed expectations.
                </Typography>
                <hr />
                <Typography variant="h4" className="contact-title">Got questions? Reach out to us.</Typography>
                <div className='contact-info'>
                    <div className='icon-wrapper'><IconButton className="icon">
                        <PhoneIcon />
                    </IconButton>
                        <span style={{ fontWeight: '500', fontSize: '15px', color: '#FFFFFF' }}>+91 - 93893 85938 </span></div>
                    <div className='icon-wrapper'><IconButton className="icon">
                        <MailIcon />
                    </IconButton>
                        <span style={{ fontWeight: '500', fontSize: '15px', color: '#FFFFFF' }}>shreyas@infrabid.in</span></div>
                </div>
            </Card>
        </div>
    );
};

export default ImageCard;
