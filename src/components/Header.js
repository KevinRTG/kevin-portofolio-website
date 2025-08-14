import React, { useState, useEffect, useRef } from 'react';
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && toggleRef.current.contains(event.target)) return;
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.classList.toggle('menu-open-body', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`header ${!isScrolled ? 'transparent' : ''}`}>
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={logo} alt="Kevin Suyadi Ritonga Logo" className="logo-image" />
          </a>
        </div>

        {/* Menu (tengah) */}
        <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`} ref={menuRef}>
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#home" className="menu-link" onClick={(e) => handleNavClick(e, '#home')}>
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#about" className="menu-link" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="#services" className="menu-link" onClick={(e) => handleNavClick(e, '#services')}>
                Services
              </a>
            </li>
            <li className="menu-item">
              <a href="#projects" className="menu-link" onClick={(e) => handleNavClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li className="menu-item">
              <a href="#contact" className="menu-link" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons (kanan) */}
        <div className="header-actions">
          <div className="social-icons">
            <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube Channel"><i className="fab fa-youtube"></i></a>
            <a href="https://github.com/KevinRTG" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Linkedin Profile"><i className="fab fa-linkedin"></i></a>
          </div>

          {isScrolled && (
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
          )}
        </div>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Header;
