// src/sections/Footer.js
import React from 'react';
import '../components/style.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/kana-ram" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/kana-ram" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/kanaram-khatik" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <p className="footer-text">
          &copy; 2024 Kanaram Khatik. All rights reserved. Made with{' '}
          <i className="fas fa-heart" style={{ color: 'var(--accent-color)' }}></i> using React & Firebase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
