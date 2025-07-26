// src/sections/About.js
import React from 'react';
import '../components/style.css'
const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div>
            <p className="about-text">
              I'm a passionate Full-Stack Developer with expertise in the MERN stack, dedicated to
              creating efficient, scalable, and user-friendly web applications. My journey in
              technology began with a curiosity for problem-solving and has evolved into a
              comprehensive skill set spanning both frontend and backend development.
            </p>
            <p className="about-text">
              With a strong foundation in computer science and hands-on experience in modern web
              technologies, I enjoy turning complex problems into simple, beautiful, and intuitive
              solutions. I'm always eager to learn new technologies and collaborate with teams to
              bring innovative ideas to life.
            </p>
          </div>
          <div className="about-details">
            <div className="detail-card">
              <h3>
                <i className="fas fa-graduation-cap"></i> Education
              </h3>
              <ul>
                <li>
                  <strong>B.Tech CSE</strong> - Global Institute of Technology, Jaipur (2021–2025)
                  - CGPA: 7.2
                </li>
                <li><strong>Class 12</strong> - 96.20%</li>
                <li><strong>Class 10</strong> - 84.50% </li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>
                <i className="fas fa-users"></i> Soft Skills
              </h3>
              <ul>
                <li>Teamwork & Collaboration</li>
                <li>Effective Communication</li>
                <li>Adaptability & Learning</li>
                <li>Problem-solving & Critical Thinking</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>
                <i className="fas fa-globe"></i> Languages
              </h3>
              <ul>
                <li>Hindi (Native)</li>
                <li>English (Proficient)</li>
                <li>French (Beginner)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
