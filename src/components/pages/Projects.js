import React from 'react';
import '../css/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Company Profile",
      description: "I created and implemented this company profile website project to offer to a specific company that needed a simple and easy-to-use Company Profile. This website was built using the Next.js framework.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/preview.png?raw=true",
      link: "https://solusidigital.my.id/",
      technologies: ["Nodemailer", "React", "CSS", "JavaScript"],
    },

    {
      title: "Jemaat App",
      description: "I created this congregation app project to be implemented in church organizations, which allows congregations to register through this web-based Jemaat App.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/jemaatapppreview.png?raw=true",
      link: "https://sistem-pengelola-data-jemaat.vercel.app/",
      technologies: ["Nodemailer", "React", "CSS", "JavaScript"],
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
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

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
