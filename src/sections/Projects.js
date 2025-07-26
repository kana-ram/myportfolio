// src/sections/Projects.js
import React from 'react';
import '../components/style.css'
const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">chef voice</h3>
              <p className="project-desc">
              ChefVoice is a voice-controlled cooking assistant that guides users through recipes step by step. 
              It offers hands-free navigation, timers, and smart tips for an interactive cooking experience.
              </p>
              <div className="project-stack">
                <span className="stack-tag">React</span>
                <span className="stack-tag">Web speech</span>
                <span className="stack-tag">CSS3</span>
                <span className="stack-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://chefvoice-2k25.web.app/" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://chefvoice-2k25.web.app/" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Netflix Clone</h3>
              <p className="project-desc">
                A responsive Netflix clone built with React and modern CSS, featuring movie browsing,
                search functionality, and a pixel-perfect UI that mimics the original Netflix interface.
              </p>
              <div className="project-stack">
                <span className="stack-tag">React</span>
                <span className="stack-tag">HTML5</span>
                <span className="stack-tag">CSS3</span>
                <span className="stack-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Dynamic To-Do App</h3>
              <p className="project-desc">
                A feature-rich to-do application with real-time updates, user authentication, task
                categorization, and data persistence using Firebase backend services.
              </p>
              <div className="project-stack">
                <span className="stack-tag">React</span>
                <span className="stack-tag">Firebase</span>
                <span className="stack-tag">Firestore</span>
                <span className="stack-tag">CSS3</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Company Website</h3>
              <p className="project-desc">
                A modern, responsive company website with contact forms, service pages, and admin
                dashboard. Built with React and Firebase for seamless content management.
              </p>
              <div className="project-stack">
                <span className="stack-tag">React</span>
                <span className="stack-tag">Firebase</span>
                <span className="stack-tag">Node.js</span>
                <span className="stack-tag">CSS3</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Ambulance Now</h3>
              <p className="project-desc">
                An emergency ambulance booking system with real-time tracking, driver management, and
                patient records. Built with React, Firebase, and Firestore for reliable performance.
              </p>
              <div className="project-stack">
                <span className="stack-tag">React</span>
                <span className="stack-tag">Firebase</span>
                <span className="stack-tag">Firestore</span>
                <span className="stack-tag">Maps API</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
