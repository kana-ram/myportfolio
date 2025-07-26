// src/sections/Skills.js
import React from 'react';
import '../components/style.css'
const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3><i className="fas fa-laptop-code"></i> Frontend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Backend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">API Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-database"></i> Database & Storage</h3>
            <div className="skill-tags">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">Firestore</span>
              <span className="skill-tag">Database Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">npm</span>
            </div>
          </div>
          <div className="skill-category">
            <h3><i className="fas fa-brain"></i> Core Competencies</h3>
            <div className="skill-tags">
              <span className="skill-tag">Data Structures</span>
              <span className="skill-tag">Algorithms</span>
              <span className="skill-tag">OOP</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">HackerRank Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
