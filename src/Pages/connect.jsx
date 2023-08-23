import { useMemo } from "react";
import Button from "../Components/button";
import Send from "../assets/send.svg";
import Footer from "../Components/footer";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import "./connect.scss";

const Connect = () => {
  const buttonHandler = () => {};
  return (
    <>
      <div className="connect-page">
        <p className="header">Connect</p>
        <p className="header-Para">
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
          <label for="inp" class="inp">
            <input type="text" id="inp" placeholder="&nbsp;" />
            <span class="label">Name</span>
            <span class="focus-bg"></span>
          </label>

          <label for="inp" class="inp">
            <input type="email" id="inp" placeholder="&nbsp;" />
            <span class="label">Email</span>
            <span class="focus-bg"></span>
          </label>
        </div>
        <div className="message-section">
          {/* <textarea
            className="customInput"
            rows="10"
            cols="40"
            placeholder="Enter your message"
          /> */}
          <label for="inp" class="customInput">
            <textarea rows="10" cols="40" id="inp" placeholder="&nbsp;" />
            <span class="label">Enter your message</span>
            <span class="focus-bg"></span>
          </label>
          <Button
            className="grn-btn"
            img={Send}
            type="button"
            onClick={buttonHandler}
            btnName="Send"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Connect;
