import { useMemo } from "react";
import Button from "../Components/button";
import Card from "../Components/card";
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

  const skillData = useMemo(
    () => [
      { name: "React", percentage: "90", color: "#fcba03" },
      { name: "Python", percentage: "90", color: "#f54689" },
      { name: "MongoDB", percentage: "80", color: "#8732ab" },
      { name: "JavaScript", percentage: "80", color: "#c50d5f" },
      { name: "MySQL", percentage: "90", color: "#9c8371" },
      { name: "NodeJs", percentage: "85", color: "#c2332f" },
      { name: "HTML", percentage: "100", color: "#196193" },
      { name: "CSS", percentage: "90", color: "#34b986" },
      { name: "Bootstrap", percentage: "70", color: "#ca01bb" },
    ],
    []
  );

  const portfolioHandler = () => {
    console.log("Im Clicked");
  };

  const resumeHandler = () => {
    console.log("Resume Handler");
  };

  return (
    <>
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

      <div className="about-tech">
        <h3>What I do</h3>
        <p>
          I have more than 1 year' experience building software for clients all
          over the world. Below is a quick overview of my main technical skill
          sets and technologies I use. Want to find out more about my experience
          & projects? Check out my online resume and project portfolio.
        </p>

        <div className="program-skills">
          <div className="skills">
            {programData.map((item, index) => (
              <Card
                key={index}
                img={item.logo}
                title={item.name}
                body={item.about}
              />
            ))}
          </div>
          <Button
            className="grn-btn"
            img={Arrow}
            type="button"
            onClick={portfolioHandler}
            btnName="View More"
          />
        </div>
      </div>
      <hr />

      <div className="feature-projects">
        <h3>Feature Projects</h3>
      </div>
      <hr />

      <div className="skills-section">
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
        <div className="skills-bar">
          {skillData.map((item, index) => (
            <>
              <ProgressBar
                key={index}
                progress={item.percentage}
                radius={80}
                transition="1.5s ease 0.5s"
                trackTransition="0s ease"
                initialAnimation={true}
                initialAnimationDelay={10}
                strokeColor={item.color}
                strokeLinecap="square"
                pointerRadius={0}
                className="progressBar"
              >
                <div className="indicator-volume">
                  <p>{item.name}</p>
                  <p className="percentage">{item.percentage}%</p>
                </div>
              </ProgressBar>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
