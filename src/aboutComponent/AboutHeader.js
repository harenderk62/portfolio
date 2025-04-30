import React from 'react';
import Button from '../Components/button';
import Social from '../Components/social';
import Arrow from '../assets/arrow.svg';

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
            I'm an experienced Software Developer adept in bringing forth
            expertise in design, deployment, testing and maintenance of
            software systems. Proficient in various platforms and languages
            like MERN stack, Python, and SQL. Experienced with the latest
            cutting-edge development tools and procedures.
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