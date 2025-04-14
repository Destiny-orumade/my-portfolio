import React from 'react';
import '../Styles/Skills.css';

const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>HTML / CSS / JavaScript</li>
        <li>TypeScript & React</li>
        <li>Next.js / Tailwind CSS</li>
        <li>REST APIs & Axios</li>
        <li>Git / GitHub</li>
        <li>Responsive Design</li>
        <li>UI/UX Best Practices</li>
      </ul>
    </section>
  );
};

export default Skills;
