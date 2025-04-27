import React from 'react';

const ProjectCard = ({ title, about, highlights, image, url }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-overlay"></div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{about}</p>
        <ul className="project-highlights">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {url && (
          <button 
            className="project-link-btn"
            onClick={() => window.open(url, '_blank')}
          >
            View Project <i className="fas fa-external-link-alt"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;