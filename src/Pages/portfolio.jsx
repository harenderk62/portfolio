import { useMemo } from "react";
import Button from "../Components/button";
import Card from "../Components/card";
import Send from "../assets/send.svg";
import Footer from "../Components/footer";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import Toolbar from "@mui/material/Toolbar";
// import FAB from "../Components/FAB";
import "./portfolio.scss";

// program
// import ReactLogo from "../assets/Program/react.svg";
// import JavaScript from "../assets/Program/JS.svg";
// import Python from "../assets/Program/python.svg";
// import Mongo from "../assets/Program/Mongodb.svg";
// import SQL from "../assets/Program/sql.svg";
// import Node from "../assets/Program/node.svg";
// import HTML from "../assets/Program/html.svg";
// import Bootstrap from "../assets/Program/bootstrap.svg";

const Portfolio = () => {
  const buttonHandler = () => {};
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <div className="portfolio-page">
        <p className="header">Portfolio</p>
        <p className="header-Para">
          Welcome to my online portfolio. My portfolio showcases my skills as a
          developer, including my experience with various programming languages
          and technologies. It also highlights my ability to work on projects
          independently and as part of a team, as well as my passion for coding
          and problem-solving.
        </p>
        <Button
          className="grn-btn"
          img={Send}
          type="button"
          onClick={buttonHandler}
          btnName="Lets connect"
        />
      </div>

      <Footer />
      {/* <FAB /> */}
    </>
  );
};

export default Portfolio;
