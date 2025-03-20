import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectsData from '../../data/projects.json';
import "../styles/projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;