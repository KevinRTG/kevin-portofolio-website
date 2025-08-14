import React, { useRef } from 'react';
import kevinPhoto from '../../img/kevin_photo.jpg';
import useInView from '../../useInView';
import '../css/Home.css';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const homeRef = useRef(null);
  const isVisible = useInView(homeRef, 0.3); // threshold 0.3

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        ref={homeRef}
        className={`home ${isVisible ? 'fade-in' : 'fade-init'}`}
      >
        <div className="home-container">
          <div className="home-content">
            <div className="hero-text">
              <h1 className="home-greeting">Hello,</h1>
              <h2 className="home-title">
                I'm <span className="home-name">Kevin Suyadi Ritonga</span>
              </h2>
              <p className="home-description">
                UI/UX Designer, Front-End Development <br /> From Indonesia
              </p>
              <a href="#about" className="home-button">About Me</a>
            </div>
            <div className="hero-image">
              <img
                src={kevinPhoto}
                alt="Kevin Suyadi Ritonga"
                className="home-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
