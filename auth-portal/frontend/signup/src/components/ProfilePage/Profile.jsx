import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { MapPin } from "lucide-react"; 

const Profile = () => {
  return (
    <div className="profile-page-container">
      <header className="hero">
        <div className="profile-image-container">
          <img
            src="/vikram.jpg"
            alt="Vikram"
            className="profile-pic"
          />
        </div>
        
        <p className="location">
          <MapPin size={18} color="#60a5fa" /> Belagavi, India
        </p>
        
        <h2>Vikram</h2>
        <p className="tagline">Full-Stack MERN Developer</p>
        
        <div className="cta-buttons">
          <Link to="/login" className="btn-primary">
            Launch VaultHub
          </Link>
          <a href="#projects" className="btn-secondary">
            View Work
          </a>
        </div>
      </header>

      <section className="about-section">
        <h2>The Journey</h2>
        <p>
          Results-driven Full Stack Web Developer with over 3 years of
          professional experience and a deep focus on the MERN stack. Skilled in
          architecting scalable web applications, designing RESTful APIs, and
          translating complex design mock-ups into high-performance React
          components. Proven track record of deploying live production
          applications and implementing secure authentication protocols.
        </p>
      </section>

      <section className="skills-grid">
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">Express.js</div>
        <div className="skill-card">React.js</div>
        <div className="skill-card">Node.js</div>
      </section>

      <section id="projects" className="project-gallery">
        <h2>Live Applications</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Expense Tracker</h3>
            <p>MERN stack app with JWT auth and category filtering.</p>
          </div>
          <div className="project-card">
            <h3>Smart Calculator</h3>
            <p>Advanced logic tool with a polished UI/UX.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;