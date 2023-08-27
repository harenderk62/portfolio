import { useMemo } from "react";
import Button from "../Components/button";
import Send from "../assets/send.svg";
import Footer from "../Components/footer";
import ResumeLogo from "../assets/ListIcon/resume.svg";
import FAB from "../Components/FAB";
import "./certificate.scss";

const Certificate = () => {
  const buttonHandler = () => {};
  return (
    <>
      <div className="certificate-page">
        <p className="header">Certificate's</p>
        <p className="header-Para">
          I'm certified in a number of programming languages, such as Python and
          JavaScript. These credentials attest to my command of each language as
          well as my capacity to create and manage software products utilising
          those languages. I've also earned certifications in a number of other
          fields, including cloud computing, web development, database
          management, and full-stack programming. These certificates attest to
          my knowledge in these fields and highlight my capacity to offer
          top-notch services.
        </p>
        <Button
          className="grn-btn"
          img={Send}
          type="button"
          onClick={buttonHandler}
          btnName="Lets connect"
        />
      </div>

      <FAB />

      <Footer />
    </>
  );
};

export default Certificate;
