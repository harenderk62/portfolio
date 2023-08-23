const ExpCard = (props) => {
  return (
    <div className="expCard">
      <img className="logo" src={props.img} alt="cmpLogo" />
      <div className="exp-info">
        <p className="position">{props.position}</p>
        <p className="company">
          {props.company} . {props.type}
        </p>
        <p className="timePeriod">
          {props.from}-{props.to}
        </p>
        <p className="location">{props.location}</p>
        <p className="skillsContainer">
          <span style={{ fontWeight: "bold" }}>Skills: </span>
          {props.skills.map((value, index) => (
            <span className="skill-G" key={index}>
              {value}{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ExpCard;
