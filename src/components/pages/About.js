import React from 'react';
import '../css/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a student from Pelita Bangsa University, class of 2021, majoring in Computer Engineering.
          During this study program, I have learned and gotten to know various programming languages such as:
        </p>

        <ul className="tech-list">
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js Logo" className="icon" />
            <span>React JS</span>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" className="icon" />
            <span>JavaScript</span>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Logo" className="icon" />
            <span>PHP</span>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" className="icon" />
            <span>HTML</span>
          </li>
          <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" className="icon" />
            <span>CSS</span>
          </li>
        </ul>

        <p>
          In addition, I also have a great interest in UI/UX design for both websites and mobile apps. I enjoy turning complex problems into simple, beautiful, and intuitive designs. I always aim to keep learning and improving my skills in the Front-End field.
        </p>

        <h3>My Skills</h3>
        <ul className="skills-list">
          <li>Responsive Web Design</li>
          <li>Wireframing & Prototyping (Figma)</li>
          <li>Next.js Front-end Development+</li>
          <li>React.js Functional Components</li>
          <li>Tailwind CSS & Bootstrap</li>
          <li>Version Control (Git & GitHub)</li>
        </ul>

        <h3>Tools I Use</h3>
        <div className="tools-grid">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="tool-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="tool-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tool-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="tool-icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/4603/4603959.png" alt="Terminal" className="tool-icon" />
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
          I aspire to become a professional Front-End Developer who not only writes clean code, but also understands user experience.
          I hope to work in a team that shares the same passion for building impactful digital products.
        </p>
      </div>
    </section>
  );
}

export default About;
