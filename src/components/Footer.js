import React from 'react';
import './css/Footer.css';
import { FaYoutube, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact</h2>
          <div className="footer-links">
            <a href="mailto:kevinsuyadi2017@gmail.com" className="footer-link">
              <FaEnvelope /> kevinsuyadi2017@gmail.com
            </a>
            <span className="footer-link">
              <FaMapMarkerAlt /> Based in Bekasi, Indonesia
            </span>
          </div>
        </div>

        <div className="footer-section">
          <h2>Social</h2>
          <div className="footer-social-links">
            <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://github.com/KevinRTG" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Kevin Ritonga. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
