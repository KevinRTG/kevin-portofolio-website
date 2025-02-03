import React from 'react';
import '../css/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Proyek 1",
      description: "Deskripsi singkat proyek pertama.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Proyek 2",
      description: "Deskripsi singkat proyek kedua.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Proyek 3",
      description: "Deskripsi singkat proyek ketiga.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Proyek-Proyek</h2>
      <p className="projects-description">
        Jelajahi proyek-proyek terbaik yang telah saya kerjakan.
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
                Lihat Proyek
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
