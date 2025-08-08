import React from 'react';
import './css/Footer.css';
import { FaYoutube, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-contact">
        <h2> Contact</h2>
      </div>
            
      <div className="footer-info">
        <p><FaEnvelope /> kevinsuyadi2017@gmail.com</p>
        <p><FaMapMarkerAlt /> Cibitung, Jawa Barat, Indonesia</p>
      </div>

      <div className="footer-social">
        <h2> Social</h2>
      </div>

      <div className="social-links">
        <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer">
          <FaYoutube /> Youtube
        </a>
        <a href="https://github.com/KevinRTG" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Github
        </a>
        <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
         <a href="https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Linkedin
        </a>
      </div>
      <p>&copy; 2025 Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
