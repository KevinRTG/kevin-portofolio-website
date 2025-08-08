import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current?.contains(event.target)) return;
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle('menu-open-body', isMenuOpen);
  }, [isMenuOpen]);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`header ${!isScrolled ? 'transparent' : ''}`}>
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
              {/* Social links */}
              <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube Channel"><i className="fab fa-youtube"></i></a>
              <a href="https://github.com/KevinRTG" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Linkedin Profile"><i className="fab fa-linkedin"></i></a>
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

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Header;
