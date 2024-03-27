import Modal from "react-bootstrap/Modal";
import Loader from "../assets/Loader.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.scss";

const CommonModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="loader">
          <img src={Loader} alt="loading" />
          <p>Dev in Progess...</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CommonModal;
