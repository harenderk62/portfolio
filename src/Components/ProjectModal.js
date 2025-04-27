import Modal from 'react-bootstrap/Modal';
import ProjectCard from '../Components/projectCard';
import "bootstrap/dist/css/bootstrap.min.css";
import './ProjectModal.scss';

const ProjectModal = ({ show, onHide, title, projectsData = [] }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      scrollable
      className="projects-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              about={project.about}
              highlights={project.highlights}
              image={project.image}
              url={project.project_url}
            />
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="modal-close-btn" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;