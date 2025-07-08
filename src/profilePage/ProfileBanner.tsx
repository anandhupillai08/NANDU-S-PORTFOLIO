import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const profile = {
  name: "Anandhu Pillai",
  title: "Computer Engineer",
  summary: `A engineer committed to crafting influential solutions, prioritizing clean and efficient code. 
Collaborative team member dedicated to ongoing enhancement and the delivery of top-tier solutions.`,
  resumeLink: "/Anandhu_resume.pdf",
  linkedinLink: "https://www.linkedin.com/in/anandhu-pillai-799405250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
};

const ProfileBanner: React.FC = () => {
  const handleResumeClick = () => {
    window.open(profile.resumeLink, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(profile.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner no-background">
      <div className="banner-content">
        <h1 className="banner-title">{profile.name} - {profile.title}</h1>
        <p className="banner-summary">{profile.summary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
