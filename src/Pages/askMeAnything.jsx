// src/pages/AboutMe.js
import React, { Suspense } from "react"; // Removed useState, useNavigate
import { Helmet } from "react-helmet";
import Footer from "../Components/footer";
// Removed User and ProfileBackground imports as AboutHeader will no longer be rendered here
// Removed Toolbar import as it's not directly used for layout here anymore

import "./home.scss";
// Removed useMediaQuery as it was primarily for AboutHeader conditional rendering

// Import the GeminiChatbot component
import { GeminiChatbot } from '../aboutComponent';

// Import data from the new centralized data file
import {
  skillsData,
  experienceData,
  educationData,
  certificationData,
  projectsData,
  awardsData
} from '../data/portfolioData';

// Combine all portfolio data into a single object to pass to the chatbot
const allPortfolioData = {
  skillsData,
  experienceData,
  educationData,
  certificationData,
  projectsData,
  awardsData
};

const AskMeAnything = () => { // Removed showGeminiChat prop
  return (
    <>
      <Helmet>
        <title>Harender Kumar - Ask Me Anything!</title> {/* Updated title */}
        <meta
          name="description"
          content="Interact with a Gemini-powered chatbot to learn more about Harender Kumar's portfolio, skills, and experience."
        /> {/* Updated description */}
      </Helmet>
      <div className="Container">
        {/* Removed Toolbar for back-to-top anchor from here, as the page content is now just the chatbot */}
        {/* Removed AboutHeader component */}
        {/* Removed all other sections (Experience, Skills, Education, Certification, Project, Publication, Awards) */}

        {/* Render the Gemini Chatbot section directly */}
        <Suspense fallback={<div>Loading Chatbot...</div>}>
          <GeminiChatbot portfolioData={allPortfolioData} />
        </Suspense>

        {/* Keep the Footer */}
        <Footer />
      </div>
    </>
  );
};

export default AskMeAnything;
