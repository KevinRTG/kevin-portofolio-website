import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Dapatkan path halaman saat ini

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Tutup menu saat salah satu item diklik (khusus mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>About</Link></li>
          <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://github.com/KevinRTG" target="_blank" rel="noopener noreferrer">
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
