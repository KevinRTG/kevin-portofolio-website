import React from 'react';
import { Link } from 'react-router-dom'; 
import kevinPhoto from '../../img/kevin_photo.png';
import '../css/Home.css';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="hero-content">
        <h1>Hello,</h1>
        <h2>
          I'm <span className="name">Kevin Suyadi Ritonga</span>
        </h2>
        <p>
          UI/UX Designer, Front-End Development <br /> From Indonesia
        </p>
        {/* Tombol menuju halaman About */}
        <Link to="/about" className="hire-button">
          About Me
        </Link>
      </div>
      <div className="hero-image">
        <img src={kevinPhoto} alt="Kevin" />
      </div>
    </div>
  );
};

export default Home;
