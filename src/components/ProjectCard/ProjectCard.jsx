import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Voir le site</a>}
          {project.code && <a href={project.code} target="_blank" rel="noreferrer">Voir le code</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;