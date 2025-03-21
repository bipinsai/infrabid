import React from "react";
import Footer from "../shared/footer";
import ReachOutForm from "../shared/reachOutForm";
import HeadSection from "../shared/headSection";
import "../../styles/AboutUs.scss";
import shreyasImage from "../../assets/shreyas.jpg";
import praneethImage from "../../assets/setty.jpeg";
import rohitImage from "../../assets/rohit.jpeg";
import bipinIMage from "../../assets/bipin.jpg";

const AboutUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="landing-page">
      {/* Head Section */}
      <HeadSection componetType={"aboutuspage"} />

      {/* About Us Section */}
      <div className="about-us-container">
        <div className="about-us-content1">
          <h1>
            <span style={{ color: "#033F59" }}>SIMPLIFYING</span>
            <br />
            <span style={{ color: "#033F59" }}>CONSTRUCTION FOR A</span>
            <br />
            <span style={{ color: "#E04E10" }}>BETTER TOMORROW</span>
          </h1>
        </div>
        <div className="about-us-content2">
          <p>
            Founded by a team from BITS Pilani and ISB, <br />
            InfraBid is transforming the construction industry <br />
            with a real-time bidding platform for subcontracting <br />
            and equipment rentals. We streamline processes, <br />
            boost transparency, and empower stakeholders <br />
            with greater efficiency.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team-section" style={{ backgroundColor: "#033F59" }}>
        <div className="our-team-section-title">
          <h2>
            <span style={{ color: "#FFFFFF" }}>OUR</span>{" "}
            <span style={{ color: "#E04E10" }}>TEAM</span>
          </h2>
        </div>
        <div className="team-members-container">
          {/* Team Members Row */}
          <div className="team-members-row">
            {/* Team Member 1 */}
            <div className="team-member">
              <div className="gradient-background">
                <img
                  src={shreyasImage}
                  alt="Shreyas Reddy"
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
                              <p style={{ color: "#E04E10", margin: "10px 0 0 0", fontWeight: "bold" }}>
                Shreyas Reddy
              </p>
              <p style={{ color: "#FFFFFF", margin: "0", fontFamily: "Switzer Variable" }}>
                Co-founder
              </p>
              </div>

            </div>

            {/* Team Member 2 */}
            <div className="team-member">
              <div className="gradient-background">
                <img
                  src={praneethImage}
                  alt="Praneeth Setty"
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
                              <p style={{ color: "#E04E10", margin: "10px 0 0 0", fontWeight: "bold" }}>
                Praneeth Setty
              </p>
              <p style={{ color: "#FFFFFF", margin: "0", fontFamily: "Switzer Variable" }}>
                Co-founder
              </p>
              </div>

            </div>

            {/* Team Member 3 */}
            <div className="team-member">
              <div className="gradient-background">
                <img
                  src={rohitImage}
                  alt="Rohith Mandadi"
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
               <p style={{ color: "#E04E10", margin: "10px 0 0 0", fontWeight: "bold" }}>
                Rohith Mandadi
              </p>
              <p style={{ color: "#FFFFFF", margin: "0", fontFamily: "Switzer Variable" }}>
                Head of Product
              </p>
              </div>

            </div>

            {/* Team Member 4 */}
            <div className="team-member">
              <div className="gradient-background">
                <img
                  src={bipinIMage}
                  alt="Bipin Sai Narwa"
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
               <p style={{ color: "#E04E10", margin: "10px 0 0 0", fontWeight: "bold" }}>
                Bipin Sai Narwa
              </p>
                           <p style={{ color: "#FFFFFF", margin: "0", fontFamily: "Switzer Variable" }}>
                Chief Technology Officer
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default AboutUsPage;