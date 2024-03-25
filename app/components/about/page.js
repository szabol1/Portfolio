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
                        I am a full stack developer with a solid foundation in design and leadership. My early career involved teaching and creating art, which honed my skills in design and artistic vision. Currently, I teach full stack development at the college level, specializing in front-end design. My expertise spans across various languages and frameworks, including Java, Python, JavaScript, React.js, Next.js, Node.js, SQL, MongoDB, and more.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
