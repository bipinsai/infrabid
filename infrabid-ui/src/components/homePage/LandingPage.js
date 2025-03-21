import React from "react";
import ReachOutForm from "../shared/reachOutForm";
import EquipmentRequirements from "./EquipmentTender";
import { bidData, tenderData, testimonials } from "../../mocks/mock";
import SignInSection from "./SignInSection";
import ConstructionNeeds from "./ConstructionNeeds"
import Testimonials from "./Testimonials";
import ImageCard from "../shared/ImageCard";
import Footer from "../shared/footer";
import HeadSection from "../shared/headSection";
import "../../styles/LandingPage.scss"; // Import SCSS file
import Questions from "./Questions";

const LandingPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here
        console.log('Form submitted');
    };

    return (
        <div className="landing-page">
            <HeadSection componetType={'mainpage'} />
            <ConstructionNeeds />
            <SignInSection />
            <div className="equipment-requirements-section" style={{ paddingLeft: '50px' }}>
                <EquipmentRequirements 
                    component={'tender'} 
                    title={'RECENT TENDERS'} 
                    buttonPlaceHolder={'VIEW / Add tenders'} 
                    data={tenderData}
                    buttonStyle={{fontSize: '16px'}} // Add this line to adjust button font size
                />
            </div>

            <div className="equipment-requirements-section" style={{ paddingLeft: '50px' }}>
                <EquipmentRequirements component={'equipment'} data={bidData} />
            </div>
            <ImageCard />
            <Questions />
            <ReachOutForm
                title="Reach out to us!"
                buttonText="Submit"
                onSubmit={handleSubmit}
            />
            <Footer />
        </div>
    );
};

export default LandingPage;
