import React from 'react';
import '../css/About.css';

const About = () => {
  const skills = [
    { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Terminal", icon: "https://cdn-icons-png.flaticon.com/512/4603/4603959.png" }
  ];

  const services = [
    "UI/UX Design & Prototyping",
    "Wireframing & User Research", 
    "Next.js Front-end Development",
    "React.js Functional Components",
    "Tailwind CSS & Bootstrap",
    "Version Control (Git & GitHub)"
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Passionate Computer Engineering student with expertise in UI/UX Design and Front-End Development
        </p>
        
        <div className="about-content">
          <div className="about-intro">
            <p>
              Hello! I am Kevin Suyadi Ritonga, a Computer Engineering student at Pelita Bangsa University
              with a passion for UI/UX Design and Front-End Development. I enjoy creating
              engaging and functional digital experiences.
            </p>
            <p>
              My journey in the world of technology began with an interest in web design and development.
              I continue to learn and hone my skills in creating user-friendly and responsive interfaces using modern technology.
            </p>
          </div>

          <div className="about-section">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <span className="service-bullet">•</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">Tools I Use</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="tool-icon"
                    title={tool.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">Education</h3>
            <div className="education-card">
              <h4 className="education-title">Pelita Bangsa University</h4>
              <div className="education-details">
                <p><strong>Major:</strong> Computer Engineering</p>
                <p><strong>Year:</strong> 2021 – Present</p>
                <p><strong>Relevant Courses:</strong> Web Programming, Human Computer Interaction, Mobile Programming, Database Systems</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">My Goal</h3>
            <p className="goal-text">
              I aspire to become a professional Front-End Developer who not only writes clean code,
              but also understands user experience. I hope to work in a team that shares the same passion for building impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;