import React from 'react';
import './css/Footer.css';
import { FaYoutube, FaGithub, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Portfolio. All Rights Reserved.</p>

      <div className="footer-info">
        <p><FaEnvelope /> kevinsuyadi2017@gmail.com</p>
        <p><FaMapMarkerAlt /> Cibitung, Jawa Barat, Indonesia</p>
      </div>

      <div className="social-links">
        <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer">
          <FaYoutube /> Youtube
        </a>
        <a href="https://github.com/Vinez666" target="_blank" rel="noopener noreferrer">
          <FaGithub /> Github
        </a>
        <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
