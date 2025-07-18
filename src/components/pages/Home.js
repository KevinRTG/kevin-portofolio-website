import React from 'react';
import { Link } from 'react-router-dom';
import kevinPhoto from '../../img/kevin_photo.png';
import '../css/Home.css';

const Home = () => {
  return (
    <section className="home">
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
            <Link to="/about" className="home-button">
              About Me
            </Link>
           </div>
           <div className="hero-image">
            <img src={kevinPhoto} alt="Kevin Suyadi Ritonga" className="home-photo" />
           </div>
          </div>
      </div>
    </section>
  );
};

export default Home;