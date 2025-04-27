import React from 'react';
import ProjectCard from '../Components/projectCard';

const ProjectSection = ({ projectsData, onShowAllClick }) => {
  const featuredProjects = projectsData.slice(0, 3); // Show first 3 projects
  
  return (
    <div className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
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
      {projectsData.length > 3 && (
        <button className="view-all-btn" onClick={onShowAllClick}>
          View All Projects <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
};

export default ProjectSection;