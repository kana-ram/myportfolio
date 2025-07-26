import React, { useEffect, useRef, useState } from 'react';
import '../components/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImg from '../assests/profile-p.png';
// ✅ Typewriter component
const HeroTitleTypewriter = ({ text = '', speed = 80 }) => {
  const [displayed, setDisplayed] = useState('');
  const hasTyped = useRef(false); // prevent reruns
  const index = useRef(0); // track index across renders

  useEffect(() => {
    if (hasTyped.current) return;
    hasTyped.current = true;

    const type = () => {
      if (index.current < text.length) {
        setDisplayed(prev => prev + text.charAt(index.current));
        index.current++;
        setTimeout(type, speed);
      }
    };

    type();
  }, [text, speed]);

  return <h2 className="hero-title">{displayed}</h2>;
};



const Home = () => {
  const heroRef = useRef(null);

  // ✅ Parallax effect using useRef
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="section home">
      <div className="container">
        <div className="hero-content" ref={heroRef}>
          <div className="hero-text">
            <h1 className="hero-name">Kanaram Khatik</h1>
            <HeroTitleTypewriter text="  Full-Stack Developer (MERN Stack)" speed={80} />
            <p className="hero-subtitle">Passionate about building real-world responsive web apps.</p>
            <div className="cta-buttons">
              <a href="https://drive.google.com/file/d/1_jBH7jwjKs-6rg3G3gy7e69STGaVOwO1/view?usp=sharing" className="btn btn-primary">
                <i className="fas fa-download"></i>
                View Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
            <div className="tech-stack">
              <i className="fab fa-react tech-icon" title="React"></i>
              <i className="fab fa-node-js tech-icon" title="Node.js"></i>
              <i className="fab fa-js-square tech-icon" title="JavaScript"></i>
              <i className="fas fa-database tech-icon" title="MongoDB"></i>
              <i className="fab fa-html5 tech-icon" title="HTML5"></i>
              <i className="fab fa-css3-alt tech-icon" title="CSS3"></i>
            </div>
          </div>
          <div className="hero-image">
  <div className="profile-image">
    <img
      src={profileImg}
      alt="Kanaram Khatik"
      className="profile-photo"
      loading="lazy"
    />
  </div>
</div>

          </div>
        </div>
    
    </section>
  );
};

export default Home;
