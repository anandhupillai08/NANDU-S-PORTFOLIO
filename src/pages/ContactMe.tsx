import React from 'react';
import './ContactMe.css';
import profilePic from '../images/nandhu.jpg'; // Replace this with your own image (or remove it)
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const userData = {
  name: "Anandhu Pillai",
  title: "Computer Engineer",
  summary: "I’m a Computer Engineering student with a passion for clean code, backend logic, and building useful tech. Let’s connect!",
  companyUniversity: "Indira College of Engineering, Pune",
  linkedinLink: "https://www.linkedin.com/in/anandhu-pillai-799405250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  email: "anandhupillai08@gmail.com",
  
};

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Karan Patil" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat. Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        
        <div className="contact-fun">
          <p>Or catch up over a tea</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
