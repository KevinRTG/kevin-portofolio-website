import React from 'react';
import kevinPhoto from '../../img/kevin_photo.png'; // Impor gambar
import resumeFile from '../../files/Resume_Kevin.pdf'; // Impor file resume
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
        {/* Tombol untuk mengunduh file */}
        <a
          href={resumeFile} // Path file untuk diunduh
          download="Resume_Kevin.pdf" // Nama file saat diunduh
          className="hire-button"
        >
          Download Resume
        </a>
      </div>
      <div className="hero-image">
        <img src={kevinPhoto} alt="Kevin" />
      </div>
    </div>
  );
};

export default Home;
