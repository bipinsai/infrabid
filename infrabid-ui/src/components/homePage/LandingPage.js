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
            {/* Home Section */}
            <HeadSection componetType={'mainpage'} />
            <ConstructionNeeds />
            <SignInSection />
            <div className="equipment-requirements-section">
                <EquipmentRequirements component={'tender'} title={'RECENT TENDERS'} buttonPlaceHolder={'VIEW / Add tenders'} data={tenderData} />
            </div>

            <div className="equipment-requirements-section">
                <EquipmentRequirements component={'equipment'} data={bidData} />
            </div>
            {/* <Testimonials testimonials={testimonials} /> */}
            <ImageCard />
            <Questions />
            <ReachOutForm
                title="Reach out to us!"
                buttonText="Submit"
                onSubmit={handleSubmit} // Pass the onSubmit handler to the form
            />
            <Footer />
        </div>
    );
};

export default LandingPage;
