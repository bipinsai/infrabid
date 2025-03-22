import React from "react";
import Footer from "../shared/footer";
import ReachOutForm from "../shared/reachOutForm";
import HeadSection from "../shared/headSection";
import "../../styles/AboutUs.scss";

const ComingSoonPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="landing-page">
      {/* Head Section */}
      <HeadSection componetType={"comingsoon"} />

      {/* About Us Section */}
 
      {/* Our Team Section */}

      {/* Reach Out Form */}
      <div>
        <ReachOutForm
          title="Reach out to us!"
          buttonText="Submit"
          onSubmit={handleSubmit}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComingSoonPage;