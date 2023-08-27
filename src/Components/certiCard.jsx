import Button from "./button";
import Arrow from "../assets/arrow.svg";

const CertiCard = (props) => {
  const redirectHandler = () => {
    // handle redirect
  };

  return (
    <div className="expCard">
      <img className="logo" src={props.img} alt="cmpLogo" />
      <div className="exp-info">
        <p className="position">{props.title}</p>
        <p className="company">{props.Source}</p>
        <p className="timePeriod">{props.issued}</p>
        {/* <Button
          className="grn-btn"
          img={Arrow}
          type="button"
          onClick={redirectHandler}
          btnName="Show credential"
        /> */}
        <button className="redirectBtn" type="button" onClick={redirectHandler}>
          {/* <img src={Arrow} alt="logo" /> */}
          Show Credential <i class="fa fa-external-link"></i>
        </button>
      </div>
    </div>
  );
};

export default CertiCard;
