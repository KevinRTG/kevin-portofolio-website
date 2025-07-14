import React from 'react';
import '../css/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Company Profile",
      description: "I created this company profile project to promote it to a certain company.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/preview.png?raw=true",
      link: "https://github.com/KevinRTG/CompanyProfile",
    },

  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
       Explore the best projects that I have worked on
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">
                View Projects
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
