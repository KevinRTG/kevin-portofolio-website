import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
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
      // Don't close if clicking the toggle button itself
      if (toggleRef.current && toggleRef.current.contains(event.target)) {
        return;
      }
      
      // Close if menu is open and click is outside menu and header
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Add body class to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open-body');
    } else {
      document.body.classList.remove('menu-open-body');
    }
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
          <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`} ref={menuRef}>
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
              ref={toggleRef}
              className={`menu-toggle ${isMenuOpen ? 'menu-toggle-active' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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