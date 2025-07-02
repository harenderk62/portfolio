// src/data/portfolioData.js

// Import assets used in data (assuming they remain here for now)
// These paths are relative to this file's location (src/data)
import ABC from "../assets/Company/abc.png";
import Accenture from "../assets/Company/accenture.png";
import Chattel from "../assets/Company/chattel.jpeg";
import DTU from "../assets/Company/DTU.png";
import KVLogo from "../assets/kv_logo.jpg";
import Udemy from "../assets/Company/udemy.png";
import HackerRank from "../assets/Company/hackerRank.png";
import AWS from "../assets/AWS.png";
import GOOGLE from "../assets/Google.png";
import COURSERA from "../assets/Coursera.png";
import PORTFOLIO from "../assets/portfolio.png";
import URL_SHORT from "../assets/URL_Short.png";
import AICHAT from "../assets/AI_chatbot.png";

export const skillsData = {
  Language: ["Java", "Python", "JavaScript", "SQL"],
  Frontend: ["ReactJS", "NextJS", "CSS/SCSS", "Redux"],
  Backend: [
    "Spring Boot (Spring MVC, Spring Data JPA, Spring Security)",
    "Fast API",
    "Flask",
    "RESTful API",
    "GraphQL",
    "Microservices",
    "Hibernate",
    "Node.js",
    "Express",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  Miscellaneous: [
    "AWS Services (EC2, S3, Lambda, SNS, SQS, CodePipeline, CloudWatch)",
    "Kafka",
    "Docker",
    "Nginx",
    "Azure OpenAI",
    "LangChain",
    "Kubernetes",
    "Git",
  ],
};

export const experienceData = [
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
        skills: [
          "Java",
          "Spring Boot",
          "Hibernate",
          "REST APIs",
          "Python",
          "Node.js",
          "AWS",
          "NextJs",
          "ReactJs",
          "MySQL",
          "MongoDB",
          "Docker",
        ],
      },
      {
        title: "Software Developer (GET)",
        from: "Jul 2022",
        to: "Jun 2023",
        duration: "1 yr",
        skills: [
          "Spring Boot",
          "Hibernate",
          "REST APIs",
          "Java",
          "Python",
          "React",
          "Node.js",
          "MySQL",
          "MongoDB",
          "AWS",
        ],
      },
    ],
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
        skills: ["Python", "Rest APIs", "React.JS", "Excel", "Pandas", "numpy"],
      },
    ],
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
        skills: [
          "Spring Boot",
          "Hibernate",
          "REST APIs",
          "ReactJs",
          "NodeJs",
          "MongoDB",
          "MySQL",
        ],
      },
    ],
  },
];

export const educationData = [
  {
    img: DTU,
    company: "Delhi Technological University (DTU)",
    position: "Bachelor of Technology",
    type: "Mathematics and Computing Engineering",
    from: "2018",
    to: "2022",
    skills: [
      "Data Structure and Algorithms",
      "Computer Science",
      "JAVA",
      "Python",
      "MERN",
      "Spring Boot",
      "Hibernate",
      "Mathematics",
    ],
  },
  {
    img: KVLogo,
    company: "Kendriya Vidyalaya",
    position: "Higher Secondary",
    type: "Science Stream",
    from: "2005",
    to: "2017",
    skills: ["Physics", "Chemistry", "Mathematics"],
  },
];

export const certificationData = [
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

export const projectsData = [
  {
    title: "AI-powered chatbot using GPT model",
    about:
      "Developed a personalised AI-driven chatbot using OpenAI's GPT-3 for improved response relevance. Deployed using AWS, reducing manual intervention and streamlining deployment.",
    highlights: [
      "Deployed on AWS EC2 (Backend)",
      "Deployed on AWS S3 (Frontend)",
      // "Phone number, email, policy number, and user ID login options",
      // "Improved user experience and reduced login time",
      // "Modernized interface design"
    ],
    // image: "absliLoginImage", // import your image
    image: AICHAT, // import your image
    project_url: "http://chat-portfolio.s3-website.ap-south-1.amazonaws.com/",
  },
  {
    title: "URL Shortener",
    about:
      "Developed a URL Shortener with functionality to generate both custom short URLs and randomly generated short URLS",
    highlights: [
      // "Natural language processing for customer queries",
      // "Deployed on AWS EC2",
      // "Increased customer engagement by 40%"
    ],
    image: URL_SHORT, // import your image
    project_url: "https://github.com/harenderk62/urlShortener",
  },
  {
    title: "Automated Portfolio Website with GenAI chatbot",
    about:
      "Built and deployed a portfolio website with AWS integration, featuring a GenAI chatbot powered by the GPT-3.5 model, enhancing user engagement and streamlining interactions. Utilized AWS services for seamless automation.",
    highlights: [
      "Deployed on AWS",
      // "Hourly success/failure reports",
      // "Real-time monitoring dashboard",
      // "Reduced manual checks by 90%"
    ],
    image: PORTFOLIO, // import your image
    project_url: "https://www.harender.in/",
  },
  // Add more projects as needed
];

export const awardsData = [
  {
    id: 1,
    title: "Commitment Champion Value Award",
    description:
      "Recognized with commitment value champion award for delivering high-impact projects such as Login Revamp and Reinstatement Revamp, enhancing system usability and reducing customer support tickets by 30%.",
    year: "2023-24",
    organization: "Aditya Birla Capital",
    icon: "醇", // or import an icon component
    category: "Professional Excellence",
  },
  {
    id: 2,
    title: "Significantly Outperformed Performance (2023-24)",
    description:
      "Awarded the highest performance rating for 2023-24 in recognition of technical excellence and impactful contributions, particularly in driving key projects to successful completion.",
    year: "2024",
    organization: "Aditya Birla Capital",
    icon: "醇", // or import an icon component
    category: "Professional Excellence",
  },
  {
    id: 3,
    title: "JEE Mains 2018",
    description:
      "Achieved a 98 percentile (AIR 14819) in the JEE Mains 2018, where over 13 lakh students appeared.",
    year: "2018",
    organization: "NTA",
    icon: "答", // or import an icon component
    category: "Academic Excellence",
  },
  {
    id: 4,
    title: "National Standard Examination in Physics (IAPT)",
    description:
      "Achieved rank 3 within my Center and consistently ranked among the Top 10% of participants",
    year: "2017",
    organization: "Indian Association of Physics Teachers",
    icon: "醇", // or import an icon component
    category: "Academic Excellence",
  },
  {
    id: 5,
    title: "National Children's Science Congress",
    description:
      "Represented my school at the regional level and received recognition for an outstanding presentation",
    year: "2016",
    organization: "NCSC",
    icon: "溌", // or import an icon component
    category: "Science & Research",
  },
];
