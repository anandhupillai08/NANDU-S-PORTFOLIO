import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';

// Only 'developer' or 'stalker'
type ProfileType = 'developer' | 'stalker';

const validProfiles: ProfileType[] = ['developer', 'stalker'];

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { profileName } = useParams<{ profileName?: string }>();

  const backgroundGif =
    location.state?.backgroundGif ||
    'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif';

  // Validate and fallback to 'developer' if profileName is invalid or missing
  const profile: ProfileType = validProfiles.includes(profileName as ProfileType)
    ? (profileName as ProfileType)
    : 'developer';

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
