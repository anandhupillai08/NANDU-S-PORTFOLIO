// ContinueWatching.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

// Props interface (you may still receive profile, but it's optional now)
interface ContinueWatchingProps {
  profile?: 'developer' | 'stalker'; // Optional if you want to keep it flexible
}

// Common content for all profiles
const continueWatchingItems = [
  {
    title: "ExtraCurricular",
    imgSrc: "https://picsum.photos/id/1025/300/200",
    link: "/extra-curricular"
  },
];

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching</h2>
      <div className="card-row">
        {continueWatchingItems.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
