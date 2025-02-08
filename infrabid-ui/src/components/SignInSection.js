import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import "../styles/SignInSection.scss";
import Button from "./shared/button";
import logo from '../assets/background.jpg'

const SignInCard = ({ title, image, onSignIn }) => {
    return (
        <Card className="sign-in-card" style={{ borderRadius: '0px', boxShadow: "none" }}>
            <CardMedia component="img" image={image} alt={title} className="card-media" />
            <CardContent className="card-content">
                <Typography variant="h6" className="card-title">{title}</Typography>
                <Button placeholder={'Sign In'} customColor={'#E04E10'} width={172} height={46} onClick={onSignIn} />
            </CardContent>
        </Card>
    );
};

const SignInSection = () => {
    const users = [
        {
            title: "CONTRACTOR/ SUB CONTRACTOR",
            image: logo,
            onSignIn: () => console.log("Contractor Sign In")
        },
        {
            title: "EQUIPMENT OWNER/ CUSTOMER",
            image: logo,
            onSignIn: () => alert("Equipment Owner Sign In")
        },
        {
            title: "INDIVIDUAL WORKER",
            image: logo,
            onSignIn: () => alert("Individual Worker Sign In")
        }
    ];

    return (
        <div className="sign-in-header">
            <Typography variant="h4" className="title">
                {'Sign In and Get Started'}
            </Typography>
            <Typography variant="h6" style={{ fontSize: '18px', fontWeight: '600', lineHeight: '24px' }}>{'Register now for tailored opportunities and real-time customized notifications'}</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" className="sign-in-section">
                {users.map((user, index) => (
                    <Box key={index} className="sign-in-box">
                        <SignInCard {...user} />
                    </Box>
                ))}
            </Stack>
        </div>
    );
};

export default SignInSection;
