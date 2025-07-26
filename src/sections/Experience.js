// src/sections/Experience.js
import React from 'react';
import '../components/style.css'
const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 - Present</div>
            <h3 className="timeline-company">AIC Catalyst</h3>
            <div className="timeline-role">Full-Stack Developer Intern</div>
            <p className="timeline-desc">
              Developed comprehensive dashboards using React.js and Firebase, implementing real-time data synchronization with Firestore. Contributed to multiple full-stack projects, focusing on user experience and performance optimization.
            </p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022 - 2023</div>
            <h3 className="timeline-company">Sunstone</h3>
            <div className="timeline-role">React JS Intern</div>
            <p className="timeline-desc">
              Built a Netflix Clone UI using React.js, focusing on responsive design and component-based architecture. Implemented modern UI patterns and gained experience with state management and API integration.
            </p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <h3 className="timeline-company">Learn & Build</h3>
            <div className="timeline-role">Frontend Developer</div>
            <p className="timeline-desc">
              Developed a dynamic To-Do application and a company website using React and Firebase. Implemented features like real-time updates, user authentication, and responsive design across multiple devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
