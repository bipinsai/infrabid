import React from 'react';
import Button from "./button";
import '../../styles/ReachOutForm.scss';

const ReachOutFormComponent = ({ title, buttonText, onSubmit }) => {
    return (
        <div id="about" className="reach-out-to-us">
            <div className="reach-out-text">
                <div>{title || 'Reach out to us!'}</div>
            </div>

            {/* Contact Form Section */}
            <div className="reach-out-form">
                <form className="contact-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <Button
                        placeholder={buttonText || 'Submit'}
                        customColor="#E04E10"
                        width={355}
                        height={50}
                        fontWeight={700}
                    />
                </form>
            </div>
        </div>
    );
};

export default ReachOutFormComponent;
