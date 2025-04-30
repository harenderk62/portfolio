// src/pages/AboutMe.js (or your original path)
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"; // Removed NavLink as it wasn't used
import { Helmet } from "react-helmet";
import Footer from "../Components/footer"; // Keep needed top-level components
import CommonModal from "../Components/modal"; // Keep modal
import ProjectModal from "../Components/ProjectModal";
import User from "../assets/myself.webp"; // Keep assets needed here or in AboutHeader
import AWS from "../assets/AWS.png"; // Keep assets needed here or in AboutHeader
import GOOGLE from "../assets/Google.png"; // Keep assets needed here or in AboutHeader
import COURSERA from "../assets/Coursera.png"; // Keep assets needed here or in AboutHeader
import PORTFOLIO from "../assets/portfolio.png"; // Keep assets needed here or in AboutHeader
import URL_SHORT from "../assets/URL_Short.png"; // Keep assets needed here or in AboutHeader
import AICHAT from "../assets/AI_chatbot.png"; // Keep assets needed here or in AboutHeader
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
  Language: ["Python", "Java", "JavaScript", "SQL"],
  Frontend: [
    "HTML",
    "CSS/SCSS",
    "Bootstap",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "Redux"
  ],
  Backend: [
    "Spring Boot",
    "Node.js",
    "Express",
    "Flask",
    "Fast API",
    "Rest APIs",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  Miscellaneous: [
    "AWS Services (EC2, S3, Lambda, SNS, SQS)",
    "AWS CI/CD pipline services",
    "Kafka",
    "Azure OpenAI",
    "LangChain",
    "Docker",
    "Nginx",
    "Git",
    "Kubernetes",
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
        skills: [ "Python", "Node.js", "REST APIs" , "AWS", "NextJs", "React" , "JavaScript", "MySQL", "MongoDB", "Docker"]
      },
      {
        title: "Software Developer (GET)",
        from: "Jul 2022",
        to: "Jun 2023",
        duration: "1 yr",
        skills: ["Python", "MERN Stack", "JavaScript", "React", "Node.js", "MySQL", "MongoDB", "AWS"]
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
        title: "Associate",
        from: "Jan 2022",
        to: "Jun 2022",
        duration: "6 mos",
        skills: ["Python", "Rest APIs", "React.JS", "Excel", "Pandas", "numpy"]
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
    skills: ["Data Structure and Algorithms","Computer Science","JAVA","Python","MERN","Spring Boot", "Hibernate",  "Mathematics"]
  },
  {
    img: KVLogo,
    company: "Kendriya Vidyalaya",
    position: "Higher Secondary",
    type: "Science Stream",
    from: "2005",
    to: "2017",
    skills: ["Physics", "Chemistry", "Mathematics"]
  }
];

const certificationData = [
  {
    img: AWS,
    Source: "Amazon Web Services (AWS)",
    title: "Architecting Solutions on AWS",
    issued: "Mar 2025",
    link: "https://coursera.org/verify/XM2ZZZVN128K",
  },
  {
    img: HackerRank,
    Source: "HackerRank",
    title: "Rest API (Intermediate) Certificate",
    issued: "Sep 2024",
    link: "https://www.hackerrank.com/certificates/0eafb4370b8c",
  },
  {
    img: HackerRank,
    Source: "HackerRank",
    title: "SQL (Intermediate) Certificatee",
    issued: "Sep 2024",
    link: "https://www.hackerrank.com/certificates/8edc7863ff0c",
  },
  {
    img: AWS,
    Source: "Amazon Web Services (AWS)",
    title: "AWS Cloud Technical Essentials",
    issued: "Apr 2024",
    link: "https://www.coursera.org/account/accomplishments/records/M9224QLYA2X2",
  },
  {
    img: GOOGLE,
    Source: "Google",
    title: "Introduction to Git and GitHub",
    issued: "Mar 2024",
    link: "https://www.coursera.org/account/accomplishments/records/7JQDTL4WJLTJ",
  },
  {
    img: Udemy,
    Source: "Udemy",
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issued: "Mar 2023",
    link: "https://www.udemy.com/certificate/UC-db73920f-d823-45c3-a49e-19cef744c3b2/",
  },
  {
    img: COURSERA,
    Source: "Coursera",
    title: "Machine Learning: Regression",
    issued: "Jun 2021",
    link: "https://coursera.org/share/f8d309851d64afab4e28ab1cf443e542",
  },
  {
    img: Udemy,
    Source: "Udemy",
    title: "Complete Python Bootcamp From Zero to Hero in Python",
    issued: "Jun 2021",
    link: "https://www.udemy.com/certificate/UC-fbf4211c-b626-4aab-a99b-5d445b050c04/",
  },
];

const projectsData = [
  {
    title: "AI-powered chatbot using GPT model",
    about: "Developed a personalised AI-driven chatbot using OpenAI's GPT-3 for improved response relevance. Deployed using AWS, reducing manual intervention and streamlining deployment.",
    highlights: [
      "Deployed on AWS EC2 (Backend)",
      "Deployed on AWS S3 (Frontend)",
      // "Phone number, email, policy number, and user ID login options",
      // "Improved user experience and reduced login time",
      // "Modernized interface design"
    ],
    // image: "absliLoginImage", // import your image
    image: AICHAT, // import your image
    project_url: "http://chat-portfolio.s3-website.ap-south-1.amazonaws.com/"
  },
  {
    title: "URL Shortener",
    about: "Developed a URL Shortener with functionality to generate both custom short URLs and randomly generated short URLS",
    highlights: [
      // "Natural language processing for customer queries",
      // "Deployed on AWS EC2",
      // "Increased customer engagement by 40%"
    ],
    image: URL_SHORT, // import your image
    project_url: "https://github.com/harenderk62/urlShortener"
  },
  {
    title: "Automated Portfolio Website with GenAI chatbot",
    about: "Built and deployed a portfolio website with AWS integration, featuring a GenAI chatbot powered by the GPT-3.5 model, enhancing user engagement and streamlining interactions. Utilized AWS services for seamless automation.",
    highlights: [
      "Deployed on AWS",
      // "Hourly success/failure reports",
      // "Real-time monitoring dashboard",
      // "Reduced manual checks by 90%"
    ],
    image: PORTFOLIO, // import your image
    project_url: "https://www.harender.in/"
  },
  // Add more projects as needed
];

const awardsData = [
  {
    id: 1,
    title: "Commitment Champion Value Award",
    description: "Recognized with commitment value champion award for delivering high-impact projects such as Login Revamp and Reinstatement Revamp, enhancing system usability and reducing customer support tickets by 30%.",
    year: "2023-24",
    organization: "Aditya Birla Capital",
    icon: "🏆", // or import an icon component
    category: "Professional Excellence"
  },
  {
    id: 2,
    title: "Significantly Outperformed Performance (2023-24)",
    description: "Awarded the highest performance rating for 2023-24 in recognition of technical excellence and impactful contributions, particularly in driving key projects to successful completion.",
    year: "2024",
    organization: "Aditya Birla Capital",
    icon: "🏆", // or import an icon component
    category: "Professional Excellence"
  },
  {
    id: 3,
    title: "JEE Mains 2018",
    description: "Achieved a 98 percentile (AIR 14819) in the JEE Mains 2018, where over 13 lakh students appeared.",
    year: "2018",
    organization: "NTA",
    icon: "📚", // or import an icon component
    category: "Academic Excellence"
  },
  {
    id: 4,
    title: "National Standard Examination in Physics (IAPT)",
    description: "Achieved rank 3 within my Center and consistently ranked among the Top 10% of participants",
    year: "2017",
    organization: "Indian Association of Physics Teachers",
    icon: "🏆", // or import an icon component
    category: "Academic Excellence"
  },
  {
    id: 5,
    title: "National Children's Science Congress",
    description: "Represented my school at the regional level and received recognition for an outstanding presentation",
    year: "2016",
    organization: "NCSC",
    icon: "🔬", // or import an icon component
    category: "Science & Research"
  },
  
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

        <AwardsSection awardsData = {awardsData} />

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
