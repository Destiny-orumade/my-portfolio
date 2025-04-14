import React from 'react';
import '../Styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/Destiny-orumade" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="www.linkedin.com/in/destinyorumade" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="destinyorumade@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
