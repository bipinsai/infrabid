import React from "react";
import Footer from "../shared/footer";
import ReachOutForm from "../shared/reachOutForm";
import HeadSection from "../shared/headSection";
// import "../styles/ServicesPage.scss"; // You can add your own styles

const AboutUsPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here
        console.log('Form submitted');
    };
    return (
        <div className="landing-page">
            <HeadSection componetType={'aboutuspage'} />
            <ReachOutForm
                title="Reach out to us!"
                buttonText="Submit"
            onSubmit={handleSubmit} // Pass the onSubmit handler to the form
            />
            <Footer />
        </div>
    );
};

export default AboutUsPage;