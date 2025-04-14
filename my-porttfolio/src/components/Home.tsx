
import React from 'react';
import '../Styles/Home.css';
import profile from '../assets/IMG_5212.jpg';

const Home: React.FC = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <img src={profile} alt="Profile" className="profile-img" />
        <div className="intro-text">
          <h1>Hi, I'm [Destiny Orumade]</h1>
          <h2> Front-End Web Developer </h2>
          <p>
          I specialize in building beautiful, user-friendly web interfaces. With a focus on modern JavaScript frameworks like React etc,
          I turn ideas into responsive and accessible web experiences that users love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
