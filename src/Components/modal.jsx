import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modal.scss";

const CommonModal = ({ show, onHide, title, certificationData = [] }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      backdrop="static"
      className="certification-modal"
    >
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="certification-container">
          {certificationData.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-content">
                <div className="certification-logo-container">
                  <img 
                    src={cert.img} 
                    alt={`${cert.Source} logo`} 
                    className="certification-logo"
                  />
                </div>
                <div className="certification-details">
                  <div className="certification-header">
                    <h3 className="certification-name">{cert.title}</h3>
                    <div className="certification-meta">
                      <span className="certification-provider">{cert.Source}</span>
                      <span className="certification-date">{cert.issued}</span>
                    </div>
                  </div>
                </div>
                <div className="credential-btn-container">
                  <Button 
                    variant="outline-primary" 
                    className="credential-btn"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    Show Credential <i className="fas fa-external-link-alt"></i>
                  </Button>
                </div>
              </div>
              {index !== certificationData.length - 1 && <div className="certification-divider"></div>}
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommonModal;