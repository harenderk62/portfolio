import "./footer.scss";

const footer = () => {
  return (
    <div className="footer">
      <p>
        <i
          className="fa fa-copyright"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "50%",
          }}
        ></i>{" "}
        Harender Kumar
      </p>
      <p>
        Made with <span style={{ color: "red" }}>&#10084;</span>
      </p>
    </div>
  );
};

export default footer;
