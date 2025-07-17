import React from 'react';
import '../css/About.css';

const About = () => {
  const skills = [
    { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
  ];

  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Terminal", icon: "https://cdn-icons-png.flaticon.com/512/4603/4603959.png" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        
        <p>
          Hello! I am Kevin Suyadi Ritonga, a Computer Engineering student at Pelita Bangsa University
          with a passion for UI/UX Design and Front-End Development. I enjoy creating
          engaging and functional digital experiences.
        </p>

        <h3>Background</h3>
        <p>
          My journey in the world of technology began with an interest in web design and development.
          I continue to learn and hone my skills in creating user-friendly and responsive interfaces using modern technology.
        </p>

        <h3>Technical Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.icon} alt={skill.name} className="icon" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>

        <h3>What I Do</h3>
        <ul className="tech-list">
          <li>UI/UX Design & Prototyping</li>
          <li>Wireframing & User Research</li>
          <li>Next.js Front-end Development</li>
          <li>React.js Functional Components</li>
          <li>Tailwind CSS & Bootstrap</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>

        <h3>Tools I Use</h3>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <img 
              key={index}
              src={tool.icon} 
              alt={tool.name} 
              className="tool-icon"
              title={tool.name}
            />
          ))}
        </div>

        <h3>Education</h3>
        <div className="education-box">
          <h4>Pelita Bangsa University</h4>
          <p><strong>Major:</strong> Computer Engineering</p>
          <p><strong>Year:</strong> 2021 – Present</p>
          <p><strong>Relevant Courses:</strong> Web Programming, Human Computer Interaction, Mobile Programming, Database Systems</p>
        </div>

        <h3>My Goal</h3>
        <p>
         I aspire to become a professional Front-End Developer who not only writes clean code,
         but also understands user experience. I hope to work in a team that shares the same passion for building impactful digital products.
        </p>
      </div>
    </section>
  );
};

export default About;