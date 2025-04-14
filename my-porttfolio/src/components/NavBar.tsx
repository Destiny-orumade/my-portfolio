
import React from 'react';
import '../Styles/NavBar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">👨‍💻 Portfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
