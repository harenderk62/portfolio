import { useMemo } from "react";
import Button from "../Components/button";
import ProgressBar from "react-customizable-progressbar";
import Send from "../assets/send.svg";
import Footer from "../Components/footer";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import "./skills.scss";

// program
import ReactLogo from "../assets/Program/react.svg";
import JavaScript from "../assets/Program/JS.svg";
import Python from "../assets/Program/python.svg";
import Mongo from "../assets/Program/Mongodb.svg";
import SQL from "../assets/Program/sql.svg";
import Node from "../assets/Program/node.svg";
import HTML from "../assets/Program/html.svg";
import Bootstrap from "../assets/Program/bootstrap.svg";

const Resume = () => {
  const skillData = useMemo(
    () => [
      { name: "ReactJs", percentage: "90", color: "#fcba03" },
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
  const buttonHandler = () => {};
  return (
    <>
      <div className="skl">
        <div className="skills-page">
          <p className="header">Skills</p>
          <p className="header-Para">
            I am proficient in a variety of programming languages including
            Python, JavaScript, and C#. I have experience building full stack
            web applications using frameworks such as Django and Flask, and am
            comfortable working with front-end technologies such as HTML, CSS
            and beck-end such as python. In addition to my experience with web
            development, I have also completed projects involving data analysis
            using libraries such as NumPy. I am always looking to expand my
            skillset and am open to learning new languages and technologies.
          </p>
          <Button
            className="grn-btn"
            img={Send}
            type="button"
            onClick={buttonHandler}
            btnName="Lets connect"
          />
        </div>

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
      <Footer />
    </>
  );
};

export default Resume;
