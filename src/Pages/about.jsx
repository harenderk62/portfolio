// src/pages/AboutMe.js (or your original path)
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Removed NavLink as it wasn't used
import { Helmet } from "react-helmet";
import Footer from "../Components/footer"; // Keep needed top-level components
import CommonModal from "../Components/modal"; // Keep modal
import ProjectModal from "../Components/ProjectModal";
import User from "../assets/myself.webp"; // Keep assets needed here or in AboutHeader
import ProfileBackground from "../assets/profileBackground.jpeg"; // Keep assets needed here or in AboutHeader

// Back to top FAB
import Toolbar from "@mui/material/Toolbar";

import "./about.scss"; // Keep main styles
import { useMediaQuery } from "react-responsive";

// Import assets used in data (assuming they remain here for now)
import ABC from "../assets/Company/abc.png";
import Accenture from "../assets/Company/accenture.png";
import Chattel from "../assets/Company/chattel.jpeg";
import DTU from "../assets/Company/DTU.png";
import KVLogo from "../assets/kv_logo.jpg";
import Udemy from "../assets/Company/udemy.png";
import HackerRank from "../assets/Company/hackerRank.png";

// Import the new section components using the index file
import {
  AboutHeader,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  CertificationSection,
  ProjectSection,
  PublicationSection,
  AwardsSection
} from '../aboutComponent'; // Adjust path relative to AboutMe.js

// Consider moving data to a separate file (e.g., src/data/aboutData.js)
// For now, keep it here as per the original structure.
const skillsData = {
  Language: ["Python", "C++", "C", "Java"],
  Development: [
    "HTML",
    "CSS/SCSS",
    "Bootstap",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "Material UI",
    "Node Js",
    "Express",
  ],
  Databases: ["MongoDB", "SQL", "PostgreSQL"],
  Miscellaneous: [
    "Git",
    "AWS EC2",
    "Deployment",
    "Azure OpenAI",
    "LangChain OpenAI",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
  ],
};

const experienceData = [
  {
    img: ABC,
    company: "Aditya Birla Capital",
    type: "Full-time",
    location: "Mumbai, Maharashtra, India - On-site",
    positions: [
      {
        title: "Software Developer (Manager)",
        from: "Jul 2023",
        to: "Present",
        duration: "1 yr 10 mos",
        skills: ["REST APIs", "Python", "JavaScript", "Node.js", "React", "MongoDB", "AWS", "Docker", "Kubernetes"]
      },
      {
        title: "Software Developer (Trainee)",
        from: "Jul 2022",
        to: "Jun 2023",
        duration: "1 yr",
        skills: ["Python", "MERN Stack", "JavaScript", "React", "Node.js", "MongoDB", "Express"]
      }
    ]
  },
  {
    img: Accenture,
    company: "Accenture",
    type: "Internship",
    location: "Bangalore Urban, Karnataka, India",
    positions: [
      {
        title: "SDE Intern",
        from: "Jan 2022",
        to: "Jun 2022",
        duration: "6 mos",
        skills: ["Python", "Excel", "Pandas", "numpy"]
      }
    ]
  },
  {
    img: Chattel,
    company: "Chattel Technologies",
    type: "Internship",
    location: "Bangalore Urban, Karnataka, India",
    positions: [
      {
        title: "Intern",
        from: "May 2021",
        to: "Aug 2021",
        duration: "4 mos",
        skills: ["ReactJs", "NodeJs", "MongoDB", "MySQL"]
      }
    ]
  }
];

const educationData = [
  {
    img: DTU,
    company: "Delhi Technological University (DTU)",
    position: "Bachelor of Technology",
    type: "Mathematics and Computing Engineering",
    from: "2018",
    to: "2022",
    skills: ["Spring Boot", "Hibernate", "Computer Science", "Mathematics"]
  },
  {
    img: KVLogo,
    company: "Kendriya Vidyalaya",
    position: "Higher Secondary",
    type: "Science Stream",
    from: "2016",
    to: "2018",
    skills: ["Physics", "Chemistry", "Mathematics"]
  }
];

const certificationData = [
  {
    img: Udemy,
    Source: "Udemy",
    title: "SQL Masterclass: SQL for Data Analytics",
    issued: "Sep 2021",
    link: "",
  },
  {
    img: HackerRank,
    Source: "HackerRank",
    title: "SQL Certificate",
    issued: "Sep 2021",
    link: "",
  },
  {
    img: Udemy,
    Source: "Udemy",
    title: "Complete Python Bootcamp",
    issued: "Sep 2021",
    link: "",
  },{
    img: Udemy,
    Source: "Udemy",
    title: "Complete Python Bootcamp",
    issued: "Sep 2021",
    link: "",
  },
];

const projectsData = [
  {
    title: "Enhanced User Experience: Revamped ABSLI's Login Page",
    about: "Redesigned ABSLI's customer portal login with multiple login options",
    highlights: [
      "Phone number, email, policy number, and user ID login options",
      "Improved user experience and reduced login time",
      "Modernized interface design"
    ],
    // image: "absliLoginImage", // import your image
    image: KVLogo, // import your image
    project_url: "www.test.com"
  },
  {
    title: "InsureGPT (using OpenAI)",
    about: "AI chatbot for ABSLI's insurance policy inquiries",
    highlights: [
      "Natural language processing for customer queries",
      "Deployed on AWS EC2",
      "Increased customer engagement by 40%"
    ],
    image: "insureGptImage", // import your image
    project_url: ""
  },
  {
    title: "ESB API Reporting Automation",
    about: "Automated monitoring for 70+ ESB APIs",
    highlights: [
      "Hourly success/failure reports",
      "Real-time monitoring dashboard",
      "Reduced manual checks by 90%"
    ],
    image: "apiDashboardImage", // import your image
    project_url: ""
  },{
    title: "ESB API Reporting Automation",
    about: "Automated monitoring for 70+ ESB APIs",
    highlights: [
      "Hourly success/failure reports",
      "Real-time monitoring dashboard",
      "Reduced manual checks by 90%"
    ],
    image: "apiDashboardImage", // import your image
    project_url: ""
  },
  // Add more projects as needed
];


const AboutMe = (props) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [showCertification, setShowCertification] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  // Handlers remain in the container component
  const resumeHandler = () => {
    sessionStorage.setItem("activeTab", "Resume");
    navigate("/resume");
  };

  const certificationHandler = () => {
    setShowCertification(true);
    // console.log("Show all certifications modal triggered");
  };

  const projectHandler = () => {
    setShowProjects(true);
    // console.log("Show all projects modal triggered");
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

        {/* Render Section Components and pass props */}
        <ExperienceSection experienceData={experienceData} />

        <SkillsSection skills={skillsData} />

        <EducationSection educationData={educationData} />

        <CertificationSection
          certificationData={certificationData}
          onShowAllClick={certificationHandler} // Pass handler
        />

        <ProjectSection
          projectsData={projectsData}
          onShowAllClick={projectHandler} // Pass handler
        />

        <PublicationSection />

        <AwardsSection />

        {/* Modals remain here, controlled by state in this component */}
        <CommonModal
          show={showCertification}
          onHide={() => setShowCertification(false)}
          title="Licenses & Certifications"
          certificationData={certificationData} // Pass the data here
        />
        <ProjectModal
          show={showProjects}
          onHide={() => setShowProjects(false)}
          title="Projects"
          projectsData = {projectsData}
          // Add content prop if your modal needs it populated dynamically
        />

        {/* Keep the Footer */}
        <Footer />
      </div>
    </>
  );
};

export default AboutMe;
