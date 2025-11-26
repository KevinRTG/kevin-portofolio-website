import React, { useState, useEffect, useRef } from 'react';
import './css/Header.css';
import logo from '../img/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const id = targetId.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    closeMenu();
  };

  return (
    <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={logo} alt="Kevin Suyadi Ritonga Logo" className="logo-image" />
          </a>
        </div>

        {/* Menu */}
        <div className={`menu ${isMenuOpen ? 'menu-open' : ''}`} ref={menuRef}>
          <ul className="menu-list">
            {['Home', 'About', 'Services', 'Projects'].map((item) => (
              <li className="menu-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`menu-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, `#${item.toLowerCase()}`)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="header-actions">
          <div className="social-icons">
            <a href="https://www.youtube.com/@kevindoots" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="https://github.com/KevinRTG" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/kepin.sr/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/kevin-suyadi-ritonga-909108292" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>

          <button
            ref={toggleRef}
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="menu-toggle-bar"></span>
            <span className="menu-toggle-bar"></span>
            <span className="menu-toggle-bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
