import { useMemo } from "react";
import Button from "../Components/button";
import Send from "../assets/send.svg";
import User from "../assets/user.png";
import Footer from "../Components/footer";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import "./resume.scss";

const Resume = () => {
  const buttonHandler = () => {};
  return (
    <>
      <div className="resume-page">
        <p className="header">Resume</p>
      </div>
      <div className="resume-container">
        <Button
          className="grn-btn"
          img={Send}
          type="button"
          onClick={buttonHandler}
          btnName="Download Resume"
        />
        <div className="resume">
          <div className="resume-top">
            <div className="top-left">
              <h1>HARENDER KUMAR</h1>
              <p>Software Engineer | Developer | Full Stack</p>
            </div>
            <div className="top-right">
              <ul>
                <li>+91 7048941490</li>
                <li>harenderk62@gmail.com</li>
                <li>www.harender.in</li>
                <li>India</li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="profile">
            <img src={User} alt="User" />
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
          </div>

          <hr />

          <div className="experience">
            <p className="section-title">Experience</p>
            <div className="company-detail">
              <p className="company">
                <span style={{ fontWeight: "bold" }}>Software Developer</span>,
                Aditya Birla Capital
              </p>
              <p>Jun 2022 - Present</p>
            </div>
            <ul>
              <li>
                Developed and deployed Azure OpenAI ChatGPT (PolicyGPT) on AWS
                services, allowing customers to chat and inquire about various
                policies, enhancing user engagement and satisfaction.
              </li>
              <li>
                Effectively integrated Zoho PageSense and Google Analytics v4 on
                customer portal, enabling comprehensive tracking and analysis of
                user behavior, production issues and website performance.{" "}
              </li>
              <li>
                Implemented automated reporting system for ESB APIs in
                production, generating hourly emails with success and failure
                counts of the APIs for improved monitoring and efficiency.{" "}
              </li>
              <li>
                Implemented various modules in the admin panel of the customer
                portal, including maintenance banner, App Tracker report, ESB
                Tracker, and more, enhancing administrative control and
                functionality.{" "}
              </li>
            </ul>

            <div className="company-detail">
              <p className="company">
                <span style={{ fontWeight: "bold" }}>
                  Data Science Associate
                </span>
                , Accenture
              </p>
              <p>Jun 2022 - Present</p>
            </div>
            <ul>
              <li>
                Developed and deployed Azure OpenAI ChatGPT (PolicyGPT) on AWS
                services, allowing customers to chat and inquire about various
                policies, enhancing user engagement and satisfaction.
              </li>
              <li>
                Effectively integrated Zoho PageSense and Google Analytics v4 on
                customer portal, enabling comprehensive tracking and analysis of
                user behavior, production issues and website performance.{" "}
              </li>
              <li>
                Implemented automated reporting system for ESB APIs in
                production, generating hourly emails with success and failure
                counts of the APIs for improved monitoring and efficiency.{" "}
              </li>
            </ul>

            <div className="company-detail">
              <p className="company">
                <span style={{ fontWeight: "bold" }}>
                  Software Developer Intern
                </span>
                , Chattel Technologies
              </p>
              <p>Jun 2022 - Present</p>
            </div>
            <ul>
              <li>
                Developed and deployed Azure OpenAI ChatGPT (PolicyGPT) on AWS
                services, allowing customers to chat and inquire about various
                policies, enhancing user engagement and satisfaction.
              </li>
              <li>
                Effectively integrated Zoho PageSense and Google Analytics v4 on
                customer portal, enabling comprehensive tracking and analysis of
                user behavior, production issues and website performance.{" "}
              </li>
              <li>
                Implemented automated reporting system for ESB APIs in
                production, generating hourly emails with success and failure
                counts of the APIs for improved monitoring and efficiency.{" "}
              </li>
            </ul>
          </div>

          {/* recogination */}
          {/* <div className="recoginations">
            <p className="section-title">Recoginations</p>

            <ul>
              <li>
                Commitment Value Champion Award for the year Apr 2022 - Mar 2023
              </li>
              <li>
                Speed Value Champion Award for the year Apr 2022 - Mar 2023
              </li>
            </ul>
          </div> */}

          {/* Certifications */}
          <div className="certifications">
            <p className="section-title">Certifications</p>

            <ul>
              <li>
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </li>
              <li>Node.js, Express, MongoDB & More: The Complete Bootcamp</li>
              <li>Machine Learning A-Z™: AI, Python + ChatGPT</li>
              <li>Node.js, Express, MongoDB & More: The Complete Bootcamp</li>
            </ul>
          </div>

          {/* skills */}
          <div className="skills">
            <p className="section-title">Skills</p>

            <div className="sk-cont">
              <div className="row">
                <p className="topic">Language :</p>
                <p>Python, C++, C and MySQL</p>
              </div>
              <div className="row">
                <p className="topic">Web Development :</p>
                <p>Python, C++, C and MySQL</p>
              </div>
              <div className="row">
                <p className="topic">Database :</p>
                <p>Python, C++, C and MySQL</p>
              </div>
              <div className="row">
                <p className="topic">Miscellaneous :</p>
                <p>Python, C++, C and MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div href="" className="float-btn">
        <i className="fas fa-file-download"></i>
        <span className="float-txt">Download Resume</span>
      </div>

      <Footer />
    </>
  );
};

export default Resume;
