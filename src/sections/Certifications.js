// src/sections/Certifications.js
import React from 'react';
import '../components/style.css'
const Certifications = () => {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">
              <i className="fab fa-free-code-camp"></i>
            </div>
            <h3 className="cert-title">Full Stack Web Development</h3>
            <p className="cert-issuer">freeCodeCamp • 2023</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">
              <i className="fab fa-google"></i>
            </div>
            <h3 className="cert-title">Firebase Essentials</h3>
            <p className="cert-issuer">Google • 2023</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">
              <i className="fab fa-react"></i>
            </div>
            <h3 className="cert-title">React Advanced</h3>
            <p className="cert-issuer">Udemy • 2023</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="cert-title">MongoDB Developer</h3>
            <p className="cert-issuer">MongoDB University • 2023</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon">
              <i className="fab fa-git-alt"></i>
            </div>
            <h3 className="cert-title">Git & GitHub</h3>
            <p className="cert-issuer">Udemy • 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
