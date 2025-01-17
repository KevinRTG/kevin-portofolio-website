import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Icon hamburger */}
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://github.com/Vinez666" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
