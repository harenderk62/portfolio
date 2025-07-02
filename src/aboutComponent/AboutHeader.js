import React from "react";
import Button from "../Components/button";
import Social from "../Components/social";
import Arrow from "../assets/arrow.svg";

const AboutHeader = ({ isMobile, User, ProfileBackground, resumeHandler }) => {
  return (
    <div className="about-header-container">
      {isMobile && (
        <div className="mobile-profile-section">
          <img
            className="profile-background"
            src={ProfileBackground}
            loading="lazy"
            alt="Profile-Background"
          />
          <div className="profile-content">
            <img
              className="profile-image"
              loading="lazy"
              src={User}
              alt="Profile"
            />
            <div className="social-container">
              <Social />
            </div>
          </div>
        </div>
      )}

      <div className="header-content">
        <div className="text-content">
          <div className="title-group">
            <h1 className="name">Harender Kumar</h1>
            <div className="title-decoration"></div>
          </div>
          <h2 className="title">Software Engineer | Developer | Full Stack</h2>
          <p className="description">
            Highly motivated Software Developer with 3 years of experience in
            designing, developing, and deploying robust, scalable backend
            solutions. Proficient in Java, Spring Boot, RESTful APIs, Python,
            MERN and AWS, with a proven track record of optimizing application
            performance, enhancing user experience, and driving significant
            business value through technical excellence.
          </p>
          <div className="action-buttons">
            <Button
              className="primary-btn"
              img={Arrow}
              type="button"
              // onClick={resumeHandler}
              btnName="Download Resume"
              disable
            />
            {/* <Button
              className="secondary-btn"
              type="button"
              btnName="Contact Me"
            /> */}
          </div>
        </div>

        {!isMobile && (
          <div className="desktop-profile">
            <img
              className="profile-image"
              loading="lazy"
              src={User}
              alt="Harender_Profile_Image"
            />
            <div className="profile-decoration"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutHeader;
