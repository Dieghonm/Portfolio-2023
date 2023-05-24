import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do Projeto 1",
      image: "caminho-para/imagem1.jpg",
      demo: "https://exemplo.com/demo1",
      repo: "https://exemplo.com/repo1"
    },
    // Adicione aqui os outros projetos
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Projetos</h2>
        <div className="projects-list">
          {projectsData.map(project => (
            <div className="project-item" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


