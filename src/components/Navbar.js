import React, { useEffect, useState } from 'react';
import '../components/style.css'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHamburgerToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">Kanaram</a>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
          <li><a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#experience" className="nav-link" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#certifications" className="nav-link" onClick={handleLinkClick}>Certifications</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          id="hamburger"
          onClick={handleHamburgerToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
