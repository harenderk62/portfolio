import { useState, useMemo } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "../Components/button";
// import Card from "../Components/card";
import ExpCard from "../Components/expCard";
import CertiCard from "../Components/certiCard";
import ProjectCard from "../Components/projectCard";
import Footer from "../Components/footer";
import User from "../assets/myself.webp";
import Arrow from "../assets/arrow.svg";
import Social from "../Components/social";
import CommonModal from "../Components/modal";
// Back to top FAB
import Toolbar from "@mui/material/Toolbar";

// import ResumeLogo from "../assets/ListIcon/resume.svg";
import "./about.scss";
import { useMediaQuery } from "react-responsive";
import ProfileBackground from "../assets/profileBackground.jpeg";

// program
// import ReactLogo from "../assets/Program/react.svg";
// import JavaScript from "../assets/Program/JS.svg";
// import Python from "../assets/Program/python.svg";
// import Mongo from "../assets/Program/Mongodb.svg";
// import SQL from "../assets/Program/sql.svg";
// import Node from "../assets/Program/node.svg";
// import HTML from "../assets/Program/html.svg";
// import Bootstrap from "../assets/Program/bootstrap.svg";

import ABC from "../assets/Company/abc.png";
import Accenture from "../assets/Company/accenture.png";
import Chattel from "../assets/Company/chattel.jpeg";
import DTU from "../assets/Company/DTU.png";
import Udemy from "../assets/Company/udemy.png";
import HackerRank from "../assets/Company/hackerRank.png";

// import FAB from "../Components/FAB";

const AboutMe = (props) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // const programData = useMemo(
  //   () => [
  //     {
  //       logo: ReactLogo,
  //       name: "React",
  //       about:
  //         "JavaScript projects that demonstrate various skills and capabilities in working with the language. They showcase my proficiency in JavaScript and ability to create functional and user-friendly applications.",
  //     },
  //     {
  //       logo: JavaScript,
  //       name: "JavaScript",
  //       about:
  //         "JavaScript projects that demonstrate various skills and capabilities in working with the language. They showcase my proficiency in JavaScript and ability to create functional and user-friendly applications.",
  //     },
  //     {
  //       logo: Python,
  //       name: "Python",
  //       about:
  //         "python projects in the linked showcase a range of skills in utilizing the language for data analysis and machine learning. They include a sentiment analysis tool for social media text and a predictive model for stock prices. ",
  //     },
  //     {
  //       logo: Mongo,
  //       name: "MongoDB",
  //       about:
  //         "With extensive experience in MySQL and PostgreSQL, I am well-versed in the intricacies of relational database management. From designing and implementing complex database structures to optimizing performance and troubleshooting issues, I have the skills and expertise to handle any project.",
  //     },
  //     {
  //       logo: SQL,
  //       name: "SQL & PostgreSQL",
  //       about:
  //         "With extensive experience in MySQL and PostgreSQL, I am well-versed in the intricacies of relational database management. From designing and implementing complex database structures to optimizing performance and troubleshooting issues, I have the skills and expertise to handle any project.",
  //     },
  //     { logo: Node, name: "NodeJS", about: "Node is Node " },
  //     {
  //       logo: HTML,
  //       name: "HTML & CSS",
  //       about:
  //         "HTML and CSS projects in the linked showcase proficiency in creating responsive and visually appealing websites. They include a portfolio website and a landing page for a fictional business. ",
  //     },
  //     {
  //       logo: Bootstrap,
  //       name: "Bootstrap",
  //       about:
  //         "Bootstrap projects in the linked showcase proficiency in utilizing the popular front-end framework to create responsive and visually appealing websites. They include a landing page template and a responsive navigation bar.",
  //     },
  //   ],
  //   []
  // );

  const skills = {
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

  // const skillData = useMemo(
  //   () => [
  //     { name: "React", percentage: "97", color: "#fcba03" },
  //     { name: "Python", percentage: "97", color: "#f54689" },
  //     { name: "MongoDB", percentage: "97", color: "#8732ab" },
  //     { name: "JavaScript", percentage: "97", color: "#c50d5f" },
  //     { name: "MySQL", percentage: "97", color: "#9c8371" },
  //     { name: "NodeJs", percentage: "97", color: "#c2332f" },
  //     { name: "HTML", percentage: "97", color: "#196193" },
  //     { name: "CSS", percentage: "97", color: "#34b986" },
  //     { name: "Bootstrap", percentage: "97", color: "#ca01bb" },
  //   ],
  //   []
  // );

  const experienceData = [
    {
      img: ABC,
      company: "Aditya Birla Capital",
      position: "Software Engineer",
      type: "Full-time",
      from: "Jun 2022",
      to: "Present",
      location: "Mumbai, Maharashtra, India",
      skills: ["ReactJs", "NodeJs", "Git", "MongoDB", "MySQL", "AWS"],
    },
    {
      img: Accenture,
      company: "Accenture",
      position: "Data Science Associate",
      type: "Internship",
      from: "Jan 2022",
      to: "Jun 2022",
      location: "Bangalore Urban, Karnataka, India",
      skills: ["Python", "Excel", "Pandas", "numpy"],
    },
    {
      img: Chattel,
      company: "Chattel Technologies",
      position: "Intern",
      type: "Internship",
      from: "May 2021",
      to: "Aug 2021",
      location: "Bangalore Urban, Karnataka, India",
      skills: ["ReactJs", "NodeJs", "MongoDB", "MySQL"],
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
      skills: ["Computer Science", "Mathematics"],
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
      title:
        "Enhanced User Experience: Revamped ABSLI's Login Page of Customer Servicing Portal",
      about:
        "Completely redesigned the ABSLI's customer servicing portal login page. -> Improved user login experience by offering a variety of login options. -> Added choices for users to log in using their phone number, email address, policy number, and user ID into the customer servicing portal",
    },
    {
      title: "InsureGPT (using OpenAI)",
      about:
        "Created InsureGPT with OpenAI, enabling customers to interact and inquire about ABSLI's range of policies through chat. -> Boosted user engagement and contentment on ABSLI's life insurance webpage. -> Utilized AWS EC2 to deploy InsureGPT for seamless functionality.",
    },
    {
      title: "ESB API Reporting: Automation Across 70+ Distinct APIs",
      about:
        "-> Implemented automation for the reporting system of over 70 distinct ESB APIs used by the customer portal.  -> Generated hourly email notifications containing success and failure reports of the APIs, leading to enhanced monitoring and operational efficiency.",
    },
  ];

  const [showCertification, setShowCertification] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const portfolioHandler = () => {
    console.log("Im Clicked");
  };

  const resumeHandler = () => {
    sessionStorage.setItem("activeTab", "Resume");
    navigate("/resume");
  };

  const certificationHandler = () => {
    setShowCertification(true);
    console.log("redirect to show all");
  };

  const projectHandler = () => {
    setShowProjects(true);
    console.log("redirect to show all");
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
        <div className="page-container">
          {isMobile && (
            <div className="profilePics">
              <img
                className="profileBackground"
                src={ProfileBackground}
                loading="lazy"
                alt="Profile-Background"
              />
              <div className="profileLogo">
                <img
                  className="profile"
                  loading="lazy"
                  src={User}
                  alt="Profile"
                />
                <Social />
              </div>
            </div>
          )}
          <Toolbar id="back-to-top-anchor" />
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
                  loading="lazy"
                  type="button"
                  onClick={resumeHandler}
                  btnName="View Resume"
                />
                {/* <Button
                className="drk-btn"
                img={ResumeLogo}
                type="button"
                onClick={resumeHandler}
                btnName="View Resume"
              /> */}
              </div>
            </div>
            {!isMobile && (
              <img
                className="profile"
                loading="lazy"
                src={User}
                alt="Harender_Profile_Image"
              />
            )}
          </div>
        </div>

        {/* Experience */}

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

        {/* skills */}

        <div className="subContainer">
          <h3>Skills</h3>
          <p>
            I'm a proficient developer specializing in Python, with a strong
            track record in building full-stack web applications using ReactJS,
            NodeJS, MongoDB, and Flask. Proficient in HTML, CSS, and data
            engineering with NumPy, I'm dedicated to staying current with
            emerging technologies to ensure optimal results.
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

          <div className="skills" style={{ margin: "30px 0" }}>
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
            Show all licenses & certifications{" "}
            <i className="fa-solid fa-right-long"></i>
          </button>
          <CommonModal
            show={showCertification}
            onHide={() => setShowCertification(false)}
            title="Licenses & Certifications"
          />
        </div>

        {/* Projects */}

        <div className="subContainer">
          <h3>Projects</h3>

          <div className="skills" style={{ margin: "30px 0" }}>
            {projectsData.map((item, index) => (
              <ProjectCard key={index} title={item.title} about={item.about} />
            ))}
          </div>
          <button
            className="cardBottomBtn"
            type="button"
            onClick={projectHandler}
          >
            Show all projects <i className="fa-solid fa-right-long"></i>
          </button>
          <CommonModal
            show={showProjects}
            onHide={() => setShowProjects(false)}
            title="Projects"
          />
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
              My research paper during my BTech studies primarily focused on the
              application of Natural Language Processing (NLP) techniques for
              extractive text summarization. This research aimed to develop a
              streamlined approach that efficiently summarizes large volumes of
              textual data. By leveraging NLP, I explored methods to
              automatically extract and condense relevant information from
              extensive text sources, ultimately improving the accessibility and
              usability of such data.
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
                Achieved rank 3 within my Center and consistently ranked among
                the Top 10% of participants
              </p>
            </div>
            <div className="award">
              <p className="awardTitle">National Children's Science Congress</p>
              <p className="awardAbout">
                I had the honor of representing my school at the regional level
                and received recognition for an outstanding presentation at the
                National Children's Science Congress.
              </p>
            </div>
            <div className="award">
              <p className="awardTitle">Jee Mains</p>
              <p className="awardAbout">
                Scored in the top 98 percentile in the JEE Mains, where over 13
                lakhs students appeared.
              </p>
            </div>
          </div>
        </div>

        {/* <FAB /> */}

        <Footer />
      </div>
    </>
  );
};

export default AboutMe;
