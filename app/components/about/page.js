import React from 'react';
import Footer from "../footer/page"
import "./about.css"

const AboutPage = () => {
    return (
        <div>
            <div className="about-container bg-blue-100 ">
                <div className="profile-picture">
                    <img src="/images/first resume-3.png" alt="resume"/>
                </div>
                <div className="about-section p-16 pb-0">
                    <h2>About Me</h2>
                    <p>
                        I am a Master's in Computer Science graduate and seasoned Java developer with a flair for innovation and design. From crafting immersive stock trading platforms to sculpting personalized song recommenders, I thrive on blending creativity with technical expertise. With a solid foundation in full-stack development, I specialize in Java, JavaScript, React.js, and API integration. Passionate about teaching and leading, I bring a unique blend of artistry and innovation to every project, transforming ideas into digital masterpieces
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
