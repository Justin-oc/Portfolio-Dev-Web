import React from "react";
import PropTypes from "prop-types";
import "@styles/projectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech">{tech}</span>
          ))}
        </div>
        <div className="buttons">
          {project.live && (
          <a href={project.live} target="_blank" rel="noopener" className="btn">Voir le site</a>
          )}
          <a href={project.code} target="_blank" rel="noopener" className="btn">Voir le code</a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    live: PropTypes.string,
    code: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectCard;