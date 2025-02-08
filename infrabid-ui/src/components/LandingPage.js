import React from "react";
import "../styles/LandingPage.scss"; // Import SCSS file
import Button from "./shared/button";
import ReachOutForm from "./reachOutForm";
import EquipmentRequirements from "./EquipmentTender";
import { bidData, tenderData } from "../mocks/mock";
import SignInSection from "./SignInSection";
import ConstructionNeeds from "./ConstructionNeeds"
import Testimonials from "./Testimonials";
import logo from '../assets/background.jpg'
import ImageCard from "./ImageCard";
import Questions from "./Questions";
import Footer from "./shared/footer";

const testimonials = [
    {
        id: 1,
        text: "I was able to connect with trusted contractors who needed my equipment. The platform’s transparency gave me confidence in every deal.",
        name: "Deepak Singh",
        role: "Rental Provider",
        image: logo
    },
    {
        id: 2,
        text: "Infrabid made renting equipment so convenient. I was able to focus more on my project and less on logistics.",
        name: "Manoj Tiwari",
        role: "Builder",
        image: logo
    },
    {
        id: 3,
        text: "Infrabid helped me turn my machinery into an asset. Listing was simple, and I found renters quickly!",
        name: "Rajesh Kumar",
        role: "Equipment Owner",
        image: logo
    },
    {
        id: 4,
        text: "Infrabid helped me turn my machinery into an asset. Listing was simple, and I found renters quickly!",
        name: "Rajesh Kumar",
        role: "Equipment Owner",
        image: logo
    }
];

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
                    <div className="content-title">
                        CONSTRUCTION SOLUTIONS, <br />
                        <span className="highlight">MADE SIMPLE.</span>
                        <div className="content-sub-title">
                            Find the right construction equipment to rent and explore contract
                            opportunities, all in one platform.
                        </div>
                    </div>
                    <div className="buttons">
                        <Button placeholder={'For Tenders'} customColor={'#E04E10'} width={220} height={58} />
                        <Button placeholder={'For Equipment'} customColor={'#033F59'} width={220} height={58} />
                    </div>
                </div>
            </div>
            <ConstructionNeeds />
            <SignInSection />
            <div className="equipment-requirements-section">
                <EquipmentRequirements component={'tender'} title={'RECENT TENDERS'} buttonPlaceHolder={'VIEW / Add tenders'} data={tenderData} />
            </div>

            <div className="equipment-requirements-section">
                <EquipmentRequirements component={'equipment'} data={bidData} />
            </div>
            <Testimonials testimonials={testimonials} />
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
