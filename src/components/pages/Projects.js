import React, { useRef, useState } from 'react';
import useInView from '../../useInView';
import '../css/Projects.css';
import { FiExternalLink } from 'react-icons/fi';

function Projects() {
  const projectsRef = useRef(null);
  const isVisible = useInView(projectsRef, 0.3);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Company Profile",
      description: "I created and implemented this company profile website project to offer to a specific company that needed a simple and easy-to-use Company Profile. This website was built using the Next.js framework.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/preview.png?raw=true",
      link: "https://solusidigital.my.id/",
      technologies: ["Next.js", "Nodemailer", "Prisma", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "GKO Cibitung Website",
      description: "I developed this church website for GKO Cibitung to support their mission of spreading the Gospel, nurturing faith, and serving the community with sincerity. The site includes features such as worship schedules, congregation registration, and church information, all designed to be accessible and user-friendly for members of the congregation.",
      image: "https://github.com/KevinRTG/kevin-portofolio-website/blob/master/public/images/websitegkocibitung.png?raw=true",
      link: "https://github.com/KevinRTG/jemaat-app",
      technologies: ["Next.js", "Nodemailer", "React", "Prisma", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`projects ${isVisible ? 'fade-in' : 'fade-init'}`}
    >
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-description">
          Explore the best projects that I have worked on
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const shortDescription = project.description.slice(0, 120) + '...';

            return (
              <div className="project-card" key={index}>
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Live <FiExternalLink style={{ marginLeft: '8px' }} />
                    </a>
                  </div>
                </div>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="project-description">
                    {isExpanded ? project.description : shortDescription}
                    <button
                      className="read-more-button"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  </p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{ marginTop: 'auto', width: 'fit-content' }}>
                    View Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
