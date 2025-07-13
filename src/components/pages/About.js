import React from 'react';
import '../css/About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        I am a student from Pelita Bangsa University, class of 2021, majoring in Computer Engineering. During this study program, I have learned and gotten to know various programming languages such as:
        </p>
        <ul>
          <li>
            <img src="/images/react.png" alt="Logo React.js" className="icon" />
            <span>React JS</span>
          </li>
          <li>
            <img src="/images/javascript-logo.png" alt="Logo JavaScript" className="icon" />
            <span>JavaScript</span>
          </li>
          <li>
            <img src="/images/php-logo.png" alt="Logo PHP" className="icon" />
            <span>PHP</span>
          </li>
          <li>
            <img src="/images/html-5.png" alt="Logo HTML" className="icon" />
            <span>HTML</span>
          </li>
          <li>
            <img src="/images/css-logo.png" alt="Logo CSS" className="icon" />
            <span>CSS</span>
          </li>
        </ul>
        <p>
          In addition, I also have a greater interest in UI/UX design, both for websites and mobile applications. I always want to continue to grow and learn to improve my skills in this Front-end field.
        </p>
      </div>
    </section>
  );
}

export default About;
