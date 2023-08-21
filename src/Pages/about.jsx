import { useMemo } from "react";
import Button from "../Components/button";
import Card from "../Components/card";
import ExpCard from "../Components/expCard";
import CertiCard from "../Components/certiCard";
import ProjectCard from "../Components/projectCard";
import ProgressBar from "react-customizable-progressbar";
import User from "../assets/myself.png";
import Arrow from "../assets/arrow.svg";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import "./about.scss";

// program
import ReactLogo from "../assets/Program/react.svg";
import JavaScript from "../assets/Program/JS.svg";
import Python from "../assets/Program/python.svg";
import Mongo from "../assets/Program/Mongodb.svg";
import SQL from "../assets/Program/sql.svg";
import Node from "../assets/Program/node.svg";
import HTML from "../assets/Program/html.svg";
import Bootstrap from "../assets/Program/bootstrap.svg";

import ABC from "../assets/Company/abc.png";
import Accenture from "../assets/Company/accenture.png";
import Chattel from "../assets/Company/chattel.jpeg";
import DTU from "../assets/Company/DTU.png";
import Udemy from "../assets/Company/udemy.png";
import HackerRank from "../assets/Company/hackerRank.png";

const AboutMe = () => {
  const programData = useMemo(
    () => [
      {
        logo: ReactLogo,
        name: "React",
        about:
          "JavaScript projects that demonstrate various skills and capabilities in working with the language. They showcase my proficiency in JavaScript and ability to create functional and user-friendly applications.",
      },
      {
        logo: JavaScript,
        name: "JavaScript",
        about:
          "JavaScript projects that demonstrate various skills and capabilities in working with the language. They showcase my proficiency in JavaScript and ability to create functional and user-friendly applications.",
      },
      {
        logo: Python,
        name: "Python",
        about:
          "python projects in the linked showcase a range of skills in utilizing the language for data analysis and machine learning. They include a sentiment analysis tool for social media text and a predictive model for stock prices. ",
      },
      {
        logo: Mongo,
        name: "MongoDB",
        about:
          "With extensive experience in MySQL and PostgreSQL, I am well-versed in the intricacies of relational database management. From designing and implementing complex database structures to optimizing performance and troubleshooting issues, I have the skills and expertise to handle any project.",
      },
      {
        logo: SQL,
        name: "SQL & PostgreSQL",
        about:
          "With extensive experience in MySQL and PostgreSQL, I am well-versed in the intricacies of relational database management. From designing and implementing complex database structures to optimizing performance and troubleshooting issues, I have the skills and expertise to handle any project.",
      },
      { logo: Node, name: "NodeJS", about: "Node is Node " },
      {
        logo: HTML,
        name: "HTML & CSS",
        about:
          "HTML and CSS projects in the linked showcase proficiency in creating responsive and visually appealing websites. They include a portfolio website and a landing page for a fictional business. ",
      },
      {
        logo: Bootstrap,
        name: "Bootstrap",
        about:
          "Bootstrap projects in the linked showcase proficiency in utilizing the popular front-end framework to create responsive and visually appealing websites. They include a landing page template and a responsive navigation bar.",
      },
    ],
    []
  );

  const skills = {
    Language: ["Python", "C++", "C", "Java"],
    "Web Development": [
      "HTML",
      "CSS/SCSS",
      "Bootstap",
      "JavaScript",
      "ReactJS",
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

  const skillData = useMemo(
    () => [
      { name: "React", percentage: "97", color: "#fcba03" },
      { name: "Python", percentage: "97", color: "#f54689" },
      { name: "MongoDB", percentage: "97", color: "#8732ab" },
      { name: "JavaScript", percentage: "97", color: "#c50d5f" },
      { name: "MySQL", percentage: "97", color: "#9c8371" },
      { name: "NodeJs", percentage: "97", color: "#c2332f" },
      { name: "HTML", percentage: "97", color: "#196193" },
      { name: "CSS", percentage: "97", color: "#34b986" },
      { name: "Bootstrap", percentage: "97", color: "#ca01bb" },
    ],
    []
  );

  const experienceData = [
    {
      img: ABC,
      company: "Aditya Birla Capital",
      position: "Software Engineer Trainee",
      type: "Full-time",
      from: "Jun 2022",
      to: "Present",
      location: "Mumbai, Maharashtra, India",
      skills: ["React", "Js", "Git"],
    },
    {
      img: Accenture,
      company: "Accenture",
      position: "Data Science Associate",
      type: "Internship",
      from: "Jan 2022",
      to: "Jun 2022",
      location: "Bangalore Urban, Karnataka, India",
      skills: [],
    },
    {
      img: Chattel,
      company: "Chattel Technologies",
      position: "Intern",
      type: "Internship",
      from: "May 2021",
      to: "Aug 2021",
      location: "Bangalore Urban, Karnataka, India",
      skills: [],
    },
  ];

  const EducationData = [
    {
      img: DTU,
      company: "Delhi Technological University (DTU)",
      position: "Bachelor's degree, Mathematics and Computing Engineering",
      type: "",
      from: "2018",
      to: "2022",
      location: "",
      skills: [],
    },
  ];

  const CertificationData = [
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
    },
  ];

  const projectsData = [
    {
      title: "SQL Masterclass: SQL for Data Analytics",
      about:
        "I have more than 1 year experience building software for clients allover the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience & projects? Check out my online resume and project portfolio.",
    },
    {
      title: "SQL Masterclass: SQL for Data Analytics",
      about:
        "I have more than 1 year experience building software for clients allover the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience & projects? Check out my online resume and project portfolio.",
    },
    {
      title: "SQL Masterclass: SQL for Data Analytics",
      about:
        "I have more than 1 year experience building software for clients allover the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience & projects? Check out my online resume and project portfolio.",
    },
  ];

  const portfolioHandler = () => {
    console.log("Im Clicked");
  };

  const resumeHandler = () => {
    console.log("Resume Handler");
  };

  const certificationHandler = () => {
    console.log("redirect to show all");
  };

  const projectHandler = () => {
    console.log("redirect to show all");
  };

  return (
    <div className="Container">
      <div className="page-container">
        <div className="header">
          <div className="aboutMe">
            <h1>Harender Kumar</h1>
            <h3>Software Engineer | Developer | Full Stack</h3>
            <p>
              I'm an experienced Software Developer adept in bringing forth
              expertise in design, installation, testing and maintenance of
              software systems. Proficient in various platforms and languages
              like MERN stack, python, SQL. Experienced with the latest
              cutting-edge development tools and procedures. Recognized for
              commitment and speed. Able to effectively self-manage during
              independent projects, as well as collaborate as part of a
              productive team.
            </p>
            <div className="btn-group">
              <Button
                className="grn-btn"
                img={Arrow}
                type="button"
                onClick={portfolioHandler}
                btnName="View Portfolio"
              />
              <Button
                className="drk-btn"
                img={ResumeLogo}
                type="button"
                onClick={resumeHandler}
                btnName="View Resume"
              />
            </div>
          </div>
          <img className="profile" src={User} alt="Profile" />
        </div>
      </div>

      <div className="subContainer">
        <h3>Experience</h3>
        {/* <p>
          I have more than 1 year' experience building software for clients all
          over the world. Below is a quick overview of my main technical skill
          sets and technologies I use. Want to find out more about my experience
          & projects? Check out my online resume and project portfolio.
        </p> */}

        <div className="skills">
          {experienceData.map((item, index) => (
            <ExpCard
              key={index}
              img={item.img}
              company={item.company}
              position={item.position}
              type={item.type}
              from={item.from}
              to={item.to}
              location={item.location}
              skills={item.skills}
            />
          ))}
        </div>
      </div>

      {/* Education */}

      <div className="subContainer">
        <h3>Education</h3>
        {/* <p>
          I have completed my B.Tech from 
        </p> */}

        <div className="skills">
          {EducationData.map((item, index) => (
            <ExpCard
              key={index}
              img={item.img}
              company={item.company}
              position={item.position}
              type={item.type}
              from={item.from}
              to={item.to}
              location={item.location}
              skills={item.skills}
            />
          ))}
        </div>
      </div>

      {/* Licenses */}

      <div className="subContainer">
        <h3>Licenses & Certifications</h3>
        {/* <p>
          I have completed my B.Tech from 
        </p> */}

        <div className="skills">
          {CertificationData.map((item, index) => (
            <CertiCard
              key={index}
              img={item.img}
              Source={item.Source}
              title={item.title}
              issued={item.issued}
              link={item.link}
            />
          ))}
        </div>
        <button
          className="cardBottomBtn"
          type="button"
          onClick={certificationHandler}
        >
          Show all licenses & certifications
        </button>
      </div>

      {/* Projects */}

      <div className="subContainer">
        <h3>Projects</h3>
        {/* <p>
          I have completed my B.Tech from 
        </p> */}

        <div className="skills">
          {projectsData.map((item, index) => (
            <ProjectCard key={index} title={item.title} about={item.about} />
          ))}
        </div>
        <button
          className="cardBottomBtn"
          type="button"
          onClick={projectHandler}
        >
          Show all projects
        </button>
      </div>

      <div className="subContainer">
        <h3>Skills</h3>
        <p>
          I am proficient in a variety of programming languages including
          Python, JavaScript, and C#. I have experience building full stack web
          applications using frameworks such as Django and Flask, and am
          comfortable working with front-end technologies such as HTML, CSS and
          beck-end such as python. In addition to my experience with web
          development, I have also completed projects involving data analysis
          using libraries such as NumPy. I am always looking to expand my
          skillset and am open to learning new languages and technologies.
        </p>
        <div>
          {Object.keys(skills).map((value, index) => (
            <div className="skill-row" key={index}>
              <p className="topic">{value}</p>
              <div className="skillsGroup">
                {skills[value].map((skill, arrayIndex) => (
                  <p className="skill" key={arrayIndex}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}

      <div className="subContainer">
        <h3>Publications</h3>
        <div className="publication">
          <p className="pubTitle">
            Extractive Text Summarization Using Natural Language Processing
            (NLP)
          </p>
          <p className="pubAbout">
            focuses on the application of Natural Language Processing (NLP)
            techniques for extractive text summarization, providing a
            streamlined approach to summarize large volumes of textual data.
          </p>
        </div>
      </div>

      {/* Honors and awards */}

      <div className="subContainer">
        <h3>Honors & awards</h3>
        <div className="awardsContainer">
          <div className="award">
            <p className="awardTitle">
              National Standard Examination in Physics (IAPT)
            </p>
            <p className="awardAbout">
              Rank 3 in my Center and among the Top 10%
            </p>
          </div>
          <div className="award">
            <p className="awardTitle">National Children's Science Congress</p>
            <p className="awardAbout">
              Represent my school at Regional level and got the certificate of
              Outstanding presentation{" "}
            </p>
          </div>
          <div className="award">
            <p className="awardTitle">Jee Mains</p>
            <p className="awardAbout">Under Top 3 percentile</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Copyright Harender Kumar</p>
        <p>Made with Love</p>
      </div>
    </div>
  );
};

export default AboutMe;
