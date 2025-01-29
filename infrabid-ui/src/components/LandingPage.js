// import React, { useEffect } from 'react';
// import { CircularProgress, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserData } from '../features/userSlice';  // Import getUserData correctly

// const LandingPage = () => {
//     // Access Redux state
//     const { user, loading, error } = useSelector((state) => state.user);
//     const dispatch = useDispatch();


//     // Dispatch the getUserData action when the component mounts
//     useEffect(() => {
//         dispatch(getUserData());
//     }, [dispatch]);

//     if (loading) {
//         return <CircularProgress />;
//     }

//     if (error) {
//         return <Typography color="error">{`Error: ${error}`}</Typography>;
//     }

//     return (
//         <div>
//             <Typography variant="h6">Fetched Data:</Typography>
//             <div>{user.title}</div>
//         </div>
//     );
// };

// export default LandingPage;

import React from "react";
import "../styles/LandingPage.scss"; // Import SCSS file
import Button from "./shared/button";
import ReachOutForm from "./shared/reachOutForm";
import EquipmentRequirements from "./EquipmentRequirements";
import { bidData, tenderData } from "../mocks/mock";

const LandingPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here
        console.log('Form submitted');
    };

    return (
        <div className="landing-page">
            {/* Home Section */}
            <div id="home" className="home-section">
                <div className="overlay"></div>
                <div className="content">
                    <h1>
                        CONSTRUCTION SOLUTIONS, <br />
                        <span className="highlight">MADE SIMPLE.</span>
                    </h1>
                    <p>
                        Find the right construction equipment to rent and explore contract
                        opportunities, all in one platform.
                    </p>
                    <div className="buttons">
                        <Button placeholder={'For Tenders'} customColor={'#E04E10'} width={220} height={58} />
                        <Button placeholder={'For Equipment'} customColor={'#033F59'} width={220} height={58} />
                    </div>
                </div>
            </div>

            <ReachOutForm
                title="Reach out to us!"
                buttonText="Submit"
                onSubmit={handleSubmit} // Pass the onSubmit handler to the form
            />

            <div className="equipment-requirements-section">
                <EquipmentRequirements component={'tender'} title={'RECENT TENDERS'} buttonPlaceHolder={'VIEW / Add tenders'} data={tenderData}/>
            </div>

            <div className="equipment-requirements-section">
                <EquipmentRequirements component={'equipment'} data={bidData}/>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/path/to/logo.png" alt="Logo" />
                    </div>
                    <div className="footer-links">
                        <button className="footer-btn">Privacy Policy</button>
                        <button className="footer-btn">Terms of Service</button>
                        <button className="footer-btn">Contact Us</button>
                    </div>
                </div>
                <p>&copy; 2025 Your Company. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
