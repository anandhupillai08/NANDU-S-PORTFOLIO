import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import ExtraCurricular from './pages/ExtraCurricular';
import Certifications from './pages/Certifications';

const App: React.FC = () => { 
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} /> {/* show profile card here */}
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/extra-curricular" element={<Layout><ExtraCurricular /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
    </Routes>
  );
};

export default App;
