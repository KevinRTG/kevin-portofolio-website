import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Kevin Suyadi Ritonga Logo" className="logo-image" />
          </Link>
        </div>

        <div className="header-nav">
          <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul className="menu-list">
              <li className="menu-item">
                <Link 
                  to="/" 
                  className={`menu-link ${location.pathname === "/" ? "active" : ""}`} 
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  to="/about" 
                  className={`menu-link ${location.pathname === "/about" ? "active" : ""}`} 
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  to="/services" 
                  className={`menu-link ${location.pathname === "/services" ? "active" : ""}`} 
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  to="/projects" 
                  className={`menu-link ${location.pathname === "/projects" ? "active" : ""}`} 
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="menu-item">
                <Link 
                  to="/contact" 
                  className={`menu-link ${location.pathname === "/contact" ? "active" : ""}`} 
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="header-actions">
            <div className="social-icons">
              <a 
                href="https://www.youtube.com/@kevindoots" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube Channel"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a 
                href="https://github.com/KevinRTG" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.instagram.com/kepin.sr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <button 
              className={`menu-toggle ${isMenuOpen ? 'menu-toggle-active' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              <span className="menu-toggle-bar"></span>
              <span className="menu-toggle-bar"></span>
              <span className="menu-toggle-bar"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Header;