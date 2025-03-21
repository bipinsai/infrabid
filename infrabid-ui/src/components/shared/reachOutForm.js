import React, { useState } from "react";
import Button from "./button";
import "../../styles/ReachOutForm.scss";

const ReachOutFormComponent = ({ title, buttonText }) => {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxQ-Kyh2Rt8g-o1lpxEnbvgygLVl1eSTZOevLPQAkWKxmK2SWya9z0LcH1lmxHuY-sgXQ/exec";
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        const form = e.target;
        const formData = new FormData(form);
        
        try {
            // First try with no-cors mode
            await fetch(scriptURL, {
                method: "POST",
                mode: 'no-cors',
                body: formData,
            });
            
            // With no-cors, we can't check the response, so assume success
            // setSubmitStatus({ success: true, message: "Message sent successfully!" });
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus({ 
                success: false, 
                message: "Failed to send message. Please try again later." 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="about" className="reach-out-to-us">
            <div className="reach-out-text">
                <div>{title || "Reach out to us!"}</div>
            </div>

            {/* Contact Form Section */}
            <div className="reach-out-form">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company_name">Company Name</label>
                        <input type="text" id="company_name" name="company_name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    
                    {submitStatus && (
                        <div className={`submit-status ${submitStatus.success ? 'success' : 'error'}`}>
                            {submitStatus.message}
                        </div>
                    )}
                    
                    <Button
                        type="submit"
                        placeholder={isSubmitting ? "Sending..." : (buttonText || "Submit")}
                        customColor="#E04E10"
                        width={300}
                        height={48}
                        fontWeight={700}
                        disabled={isSubmitting}
                    />
                </form>
            </div>
        </div>
    );
};

export default ReachOutFormComponent;
