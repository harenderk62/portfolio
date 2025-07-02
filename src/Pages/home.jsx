// src/pages/AboutMe.js (or your original path)
import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Components/footer";
import User from "../assets/myself.webp";
import ProfileBackground from "../assets/profileBackground.jpeg";

// Back to top FAB
import Toolbar from "@mui/material/Toolbar";

import "./home.scss";
import { useMediaQuery } from "react-responsive";

// Import the new section components using the index file
import {
  AboutHeader,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  CertificationSection,
  ProjectSection,
  PublicationSection,
  AwardsSection,
  GeminiChatbot
} from '../aboutComponent';

// Import data from the new centralized data file
import {
  skillsData,
  experienceData,
  educationData,
  certificationData,
  projectsData,
  awardsData
} from '../data/portfolioData';

// Lazily load modal components
const CommonModal = React.lazy(() => import("../Components/modal"));
const ProjectModal = React.lazy(() => import("../Components/ProjectModal"));

// Memoize the section components for performance optimization
const MemoizedExperienceSection = React.memo(ExperienceSection);
const MemoizedSkillsSection = React.memo(SkillsSection);
const MemoizedEducationSection = React.memo(EducationSection);
const MemoizedCertificationSection = React.memo(CertificationSection);
const MemoizedProjectSection = React.memo(ProjectSection);
const MemoizedPublicationSection = React.memo(PublicationSection);
const MemoizedAwardsSection = React.memo(AwardsSection);
const MemoizedGeminiChatbot = React.memo(GeminiChatbot);

const Home = () => { 
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [showCertification, setShowCertification] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  // Combine all portfolio data into a single object to pass to the chatbot
  const allPortfolioData = {
    skillsData,
    experienceData,
    educationData,
    certificationData,
    projectsData,
    awardsData
  };

  // Handlers remain in the container component
  const resumeHandler = () => {
    sessionStorage.setItem("activeTab", "Resume");
    navigate("/resume");
  };

  const certificationHandler = () => {
    setShowCertification(true);
  };

  const projectHandler = () => {
    setShowProjects(true);
  };

  return (
    <>
      <Helmet>
        <title>Harender Kumar</title>
        <meta
          name="description"
          content="Hi, My name is Harender Kumar. Welcome to my personal website."
        />
      </Helmet>
      <div className="Container">
        {/* Toolbar for potential back-to-top functionality */}
        <Toolbar id="back-to-top-anchor" />

        {/* Render the Header Component */}
        <AboutHeader
          isMobile={isMobile}
          User={User}
          ProfileBackground={ProfileBackground}
          resumeHandler={resumeHandler}
        />

        {/* Render Memoized Section Components and pass props */}
        <MemoizedExperienceSection experienceData={experienceData} />

        <MemoizedSkillsSection skills={skillsData} />

        <MemoizedEducationSection educationData={educationData} />

        <MemoizedCertificationSection
          certificationData={certificationData}
          onShowAllClick={certificationHandler}
        />

        <MemoizedProjectSection
          projectsData={projectsData}
          onShowAllClick={projectHandler}
        />

        <MemoizedPublicationSection />

        <MemoizedAwardsSection awardsData = {awardsData} />

        {/* Conditionally render the Gemini Chatbot section */}
        <MemoizedGeminiChatbot portfolioData={allPortfolioData} />

        {/* Modals are now lazy-loaded */}
        <Suspense fallback={<div>Loading Modals...</div>}>
          {showCertification && (
            <CommonModal
              show={showCertification}
              onHide={() => setShowCertification(false)}
              title="Licenses & Certifications"
              certificationData={certificationData}
            />
          )}
          {showProjects && (
            <ProjectModal
              show={showProjects}
              onHide={() => setShowProjects(false)}
              title="Projects"
              projectsData = {projectsData}
            />
          )}
        </Suspense>

        {/* Keep the Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;