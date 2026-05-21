import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import "./Profile.css";

const strengths = [
  "MERN architecture",
  "JWT authentication",
  "REST API design",
  "Responsive React UI",
  "Deployment workflows",
  "Product thinking",
];

const metrics = [
  { value: "3+", label: "years building web apps" },
  { value: "6", label: "core MERN skills" },
  { value: "2", label: "live portfolio modules" },
];

const projects = [
  {
    title: "VaultHub Auth Portal",
    description:
      "Full-stack authentication workspace with guest access, protected dashboard flow, and polished recruiter-facing profile.",
    tags: ["React", "Node", "JWT"],
  },
  {
    title: "Expense Tracker",
    description:
      "Budget management module with add/list flows, category data, and clean dashboard entry points.",
    tags: ["MERN", "REST API", "UX"],
  },
  {
    title: "Smart Calculator",
    description:
      "Focused utility module designed for quick calculations inside the same personal productivity hub.",
    tags: ["React", "Logic", "UI"],
  },
];

const Profile = () => {
  return (
    <div className="profile-page-container">
      <header className="profile-hero">
        <div className="profile-copy">
          <span className="profile-eyebrow">
            <ShieldCheck size={18} />
            Recruiter-ready MERN developer profile
          </span>
          <h1>Vikram builds secure, polished web products with React and Node.</h1>
          <p>
            Full-stack developer focused on practical product experiences,
            scalable APIs, clean interfaces, and reliable deployment-ready MERN
            applications.
          </p>

          <div className="profile-actions">
            <a
              href="/Vikram-Resume.html"
              download="Vikram-Resume.html"
              className="profile-btn primary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <Link to="/dashboard" className="profile-btn secondary">
              Launch VaultHub
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <aside className="profile-card">
          <img src="/vikram.jpg" alt="Vikram" className="profile-pic" />
          <h2>Vikram</h2>
          <p>Full-Stack MERN Developer</p>
          <div className="location">
            <MapPin size={17} />
            Belagavi, India
          </div>
          <div className="contact-strip">
            <a href="mailto:vikram@example.com" aria-label="Email Vikram">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn profile">
              <span>in</span>
            </a>
            <a href="https://github.com/" aria-label="GitHub profile">
              <span>GH</span>
            </a>
          </div>
        </aside>
      </header>

      <section className="metrics-grid" aria-label="Profile highlights">
        {metrics.map((item) => (
          <div className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="profile-section split">
        <div>
          <span className="section-kicker">
            <BriefcaseBusiness size={17} />
            Professional Summary
          </span>
          <h2>Built for impact, not just implementation.</h2>
        </div>
        <p>
          Results-driven full-stack web developer with hands-on experience
          creating MERN applications, protected user flows, REST endpoints, and
          responsive frontends. I care about clean structure, business clarity,
          and interfaces that feel trustworthy from the first click.
        </p>
      </section>

      <section className="profile-section">
        <span className="section-kicker">
          <Code2 size={17} />
          Technical Strengths
        </span>
        <div className="skills-grid">
          {strengths.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="profile-section">
        <span className="section-kicker">
          <Rocket size={17} />
          Portfolio Work
        </span>
        <div className="projects-container">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section recruiter-panel">
        <div>
          <span className="section-kicker">
            <Trophy size={17} />
            Recruiter Signal
          </span>
          <h2>Strong fit for junior and associate full-stack roles.</h2>
          <p>
            I can contribute across frontend implementation, backend API work,
            authentication flows, dashboard experiences, and production polish.
          </p>
        </div>
        <a
          href="/Vikram-Resume.html"
          download="Vikram-Resume.html"
          className="profile-btn primary"
        >
          <Download size={18} />
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Profile;
