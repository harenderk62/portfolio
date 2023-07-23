import { useMemo } from "react";
import Button from "../Components/button";
import Send from "../assets/send.svg";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import "./connect.scss";

const Connect = () => {
  const buttonHandler = () => {};
  return (
    <>
      <div className="connect-page">
        <p className="header">Connect</p>
        <p>
          Interested in hiring me or just want to say Hi? You can fill in the
          contact form below or send me an email to{" "}
          <span className="email">harenderk62@gmail.com</span>
        </p>
        <p>
          Want to get connected? Connect with me on the below social channels.
        </p>
        {/* <Button
          className="grn-btn"
          img={Send}
          type="button"
          onClick={buttonHandler}
          btnName="Lets connect"
        /> */}
      </div>

      <div className="contact-form">
        <p className="head">Get In Touch</p>
        <div className="contact-input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="email" />
        </div>
        <div className="message-section">
          <textarea rows="10" cols="40" placeholder="Enter your message" />
          <Button
            className="grn-btn"
            img={Send}
            type="button"
            onClick={buttonHandler}
            btnName="Lets connect"
          />
        </div>
      </div>
    </>
  );
};

export default Connect;
