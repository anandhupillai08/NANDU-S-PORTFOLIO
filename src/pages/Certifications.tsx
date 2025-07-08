import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

// ✅ Function to get first letter of issuer
const getInitialIcon = (issuer: string) => {
  const initial = issuer.trim().charAt(0).toUpperCase();
  return (
    <span className="custom-icon">
      {initial}
    </span>
  );
};

// ✅ Your certificates
const certifications = [
  {
    title: "Java Programming",
    issuer: "Hacker Rank",
    issuedDate: "July 2024",
    link: "/certificates/java.pdf"
  },
  {
    title: "C++ Programming",
    issuer: "Udemy",
    issuedDate: "March 2024",
    link: "/certificates/c++.pdf"
  },
  {
    title: "Data Science",
    issuer: "Hacker Rank",
    issuedDate: "February 2025",
    link: "/certificates/datascience.pdf"
  },
  {
    title: "Git Training",
    issuer: "Simplilearn",
    issuedDate: "April 2025",
    link: "/certificates/git.pdf"
  },
  {
    title: "Full Stack Developer",
    issuer: "devtown",
    issuedDate: "October 2024",
    link: "/certificates/fullstack.pdf"
  }
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {getInitialIcon(cert.issuer)}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
