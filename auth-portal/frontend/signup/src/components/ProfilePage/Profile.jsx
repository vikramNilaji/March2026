import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import "./Profile.css";

const githubProfileUrl = "https://github.com/";

const contacts = [
  {
    label: "vik.nilaji@gmail.com",
    href: "mailto:vik.nilaji@gmail.com",
    icon: Mail,
  },
  {
    label: "+91-8550099765",
    href: "tel:+918550099765",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vikram-nilaji-417286261",
    icon: Link2,
  },
  {
    label: "Portfolio",
    href: "https://vikramsvaulthub-theta.vercel.app/",
    icon: ExternalLink,
  },
  {
    label: "GitHub",
    href: githubProfileUrl,
    icon: GitBranch,
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "React-Router-Dom",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "RESTful API Design"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MongoDB Atlas (Cloud Management)"],
  },
  {
    category: "Tools & Deployment",
    items: ["GitHub", "Postman", "Render", "Vercel", "Railway", "Hostinger"],
  },
  {
    category: "Security",
    items: ["JWT (JSON Web Tokens)", "bcrypt encryption"],
  },
];

const metrics = [
  { value: "1+", label: "year of full-stack development experience" },
  { value: "2", label: "major production and portfolio projects" },
  { value: "6", label: "deployment and developer tools used" },
];

const experience = [
  {
    role: "Programmer / Developer",
    organization: "KLE Technological University",
    location: "Belagavi, KA",
    period: "July 2024 - Present",
  },
  {
    role: "Instructor / Technical Lead",
    organization: "KLE Technological University",
    location: "Belagavi, KA",
    period: "August 2018 - June 2024",
  },
];

const projects = [
  {
    title: "Voice of Venugram",
    subtitle: "Local News Portal",
    link: "https://www.voiceofvenugram.com",
    displayLink: "www.voiceofvenugram.com",
    preview: "news",
    description:
      "Full-stack regional news portal with category-wise browsing, article detail pages, live stream support, contact forms, and commercial ad placements.",
    highlights: [
      "Built a secure admin dashboard for news and advertisement management.",
      "Added image uploads, YouTube link validation, view tracking, and CRUD flows.",
      "Implemented JWT and bcrypt authentication with MongoDB-backed models.",
    ],
    stack: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "ImageKit",
      "Hostinger",
    ],
  },
  {
    title: "Vault Hub",
    subtitle: "Personal Project Portal",
    link: "https://vikramsvaulthub-theta.vercel.app",
    displayLink: "vikramsvaulthub-theta.vercel.app",
    preview: "/vault-dashboard-preview.png",
    description:
      "The all-in-one app which contains My Profile, and apps like Expense Tracker, Calculator, Games, and other productivity tools.",
    highlights: [
      "Developed a centralized dashboard for multiple micro-applications.",
      "Integrated protected data access using JWT and bcrypt authentication.",
      "Deployed the MERN application with MongoDB Atlas and Render.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Render"],
  },
];

const Profile = () => {
  return (
    <div className="profile-page-container">
      <header className="profile-hero">
        <div className="profile-copy">
          <span className="profile-eyebrow">
            <ShieldCheck size={18} />
            MERN full-stack web developer
          </span>
          <h1>Vikram C. Nilaji builds secure, production-ready web apps.</h1>
          <p>
            Results-driven full-stack web developer with over 1 year of
            professional experience focused on scalable MERN applications,
            RESTful APIs, high-performance React components, and secure
            authentication protocols.
          </p>

          <div className="profile-actions">
            <a
              href="/Resume.pdf"
              download="Vikram-C-Nilaji-Resume.pdf"
              className="profile-btn primary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <Link to="/dashboard" className="profile-btn secondary">
              Open Vault Hub
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <aside className="profile-card">
          <img
            src="/vikram.jpg"
            alt="Vikram C. Nilaji"
            className="profile-pic"
          />
          <h2>Vikram C. Nilaji</h2>
          <p>Programmer / Developer</p>
          <div className="location">
            <MapPin size={17} />
            BELGAUM, KNT
          </div>
          <div className="contact-strip" aria-label="Contact links">
            {contacts.map((contact) => {
              const ContactIcon = contact.icon;

              return (
                <a key={contact.label} href={contact.href} aria-label={contact.label}>
                  <ContactIcon size={18} />
                </a>
              );
            })}
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
            Profile
          </span>
          <h2>Practical developer with live product experience.</h2>
        </div>
        <p>
          Skilled in architecting scalable web applications, translating complex
          design mock-ups into responsive React components, deploying live
          applications, and implementing secure authentication protocols with
          JWT and bcrypt.
        </p>
      </section>

      <section className="profile-section">
        <span className="section-kicker">
          <Code2 size={17} />
          Technical Skills
        </span>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tag-list">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <span className="section-kicker">
          <CalendarDays size={17} />
          Work Experience
        </span>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.organization} | {item.location}
                </p>
              </div>
              <span>{item.period}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="profile-section">
        <span className="section-kicker">
          <Rocket size={17} />
          Major Projects
        </span>
        <div className="projects-container">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {project.preview === "news" ? (
                <div className="project-preview news-preview" aria-hidden="true">
                  <div className="preview-topline" />
                  <div className="preview-headline" />
                  <div className="preview-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              ) : (
                <img
                  src={project.preview}
                  alt={`${project.title} preview`}
                  className="project-preview"
                />
              )}
              <div className="project-card-header">
                <div>
                  <h3>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <span>{project.subtitle}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live-link"
                  >
                    {project.displayLink}
                  </a>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section credential-panel">
        <article>
          <span className="section-kicker">
            <Award size={17} />
            Certification
          </span>
          <h2>MERN Full Stack Development</h2>
          <p>Completed the Web Development Bootcamp Certification by Udemy.</p>
        </article>
        <article>
          <span className="section-kicker">
            <GraduationCap size={17} />
            Education
          </span>
          <h2>Diploma in Electrical and Electronics Engineering</h2>
          <p>Technical foundation paired with hands-on web development work.</p>
        </article>
      </section>
    </div>
  );
};

export default Profile;
