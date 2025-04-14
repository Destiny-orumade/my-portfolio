import React from 'react';
import '../Styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Hexaview</h3>
          <p>A streaming website with the aim of giving users the feature of streaming with ease .</p>
        </div>
        <div className="project-card">
          <h3>CivicLink Platform</h3>
          <p>An interactive civic-tech app with authentication, role-based dashboards, and real-time updates.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A sleek personal portfolio built with React and TypeScript, showcasing web development projects and skills.</p>
        </div>
        <div className="project-card">
          <h3>JobListing</h3>
          <p>A webpage that helps techies to find available jobs in the global or nearest location</p>
          </div>
          <p>they all other minor personal projects </p>
      </div>
    </section>
  );
};

export default Projects;
