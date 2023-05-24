import React from 'react';
import '../Styles/Projects.css';
import {projectsData} from '../data/Projetos/projectsData'

function Projects() {
  const projectCard = (project) => {
    return (
      <div className="project-item" key={project.id}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.url} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.git} target="_blank" rel="noopener noreferrer">Repositório</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Projetos</h2>
        <div className="projects-list">
          {projectsData.map(project => projectCard(project))}
        </div>
      </div>
    </section>
  );
}

export default Projects;