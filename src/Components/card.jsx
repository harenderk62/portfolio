import "./component-css.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="program-Logo" />
      <p className="cardTitle">{props.title}</p>
      <p className="cardBody">{props.body}</p>
    </div>
  );
};

export default Card;
