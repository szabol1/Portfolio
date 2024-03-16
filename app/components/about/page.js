import React from 'react';
import Footer from "../footer/page"
import "./about.css"

const AboutPage = () => {
    return (
        <div>
            <div className="about-container">
                <div className="profile-picture">
                    <img src="your-profile-picture-url" alt="Profile Picture" />
                </div>
                <div className="about-section">
                    <h2>About Me</h2>
                    <p>
                        Add your about me content here
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
