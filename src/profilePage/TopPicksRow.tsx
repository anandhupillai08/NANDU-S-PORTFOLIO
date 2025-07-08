// TopPicksRow.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope } from 'react-icons/fa';

// Props (optional)
interface TopPicksRowProps {
  profile?: 'developer' | 'stalker'; // profile is now optional and unused
}

// Shared content for all profiles
const topPicksItems = [
  {
    title: "Projects",
    imgSrc: "https://picsum.photos/seed/projects/250/200",
    route: "/projects",
    icon: <FaProjectDiagram />
  },
  {
    title: "Experience",
    imgSrc: "https://picsum.photos/seed/experience/250/200",
    route: "/work-experience",
    icon: <FaBriefcase />
  },
  {
    title: "Certifications",
    imgSrc: "https://picsum.photos/seed/certifications/250/200",
    route: "/certifications",
    icon: <FaCertificate />
  },
  {
    title: "Contact Me",
    imgSrc: "https://picsum.photos/seed/contact/250/200",
    route: "/contact-me",
    icon: <FaEnvelope />
  }
];

const TopPicksRow: React.FC<TopPicksRowProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks</h2>
      <div className="card-row">
        {topPicksItems.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
