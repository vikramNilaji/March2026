import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { MapPin } from "lucide-react"; // Import the icon

// Inside your return:

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Hero Section */}
      <header className="hero">
        <p className="location">
          <MapPin size={18} color="#60a5fa" /> Belagavi, India
        </p>
        <h1>Vikram</h1>
        <p className="tagline">Full-Stack MERN Developer in Training</p>
        <div className="cta-buttons">
          <Link to="/signin" className="btn-primary">
            Launch VaultHub
          </Link>
          <a href="#projects" className="btn-secondary">
            View Work
          </a>
        </div>
      </header>

      {/* About Section - Highlighting your discipline */}
      <section className="about-section">
        <h2>The Journey</h2>
        <p>
          By day, I manage a professional 9-to-5 role. By night, I build the
          future. For the past 3 years, I've dedicated my time to mastering the
          **MERN Stack**, focusing on secure authentication and scalable web
          architecture.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-grid">
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">Express.js</div>
        <div className="skill-card">React.js</div>
        <div className="skill-card">Node.js</div>
      </section>

      {/* Project Gallery */}
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
