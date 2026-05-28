import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ExperienceCenters from './pages/ExperienceCenters.jsx';
import InsuranceCategoryPage from './pages/InsuranceCategoryPage.jsx';
import AdvisorPage from './pages/AdvisorPage.jsx';

function DefaultLayout({ children, onHomeAuthModeChange, homeAuthMode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar
        onHomeAuthModeChange={onHomeAuthModeChange}
        homeAuthMode={homeAuthMode}
      />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  const [homeAuthMode, setHomeAuthMode] = useState('login');

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <Home
              authMode={homeAuthMode}
              onAuthModeChange={setHomeAuthMode}
            />
          </DefaultLayout>
        )}
      />
      <Route
        path="/articles"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <ArticlesPage />
          </DefaultLayout>
        )}
      />
      <Route
        path="/articles/:slug"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <InsuranceCategoryPage />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-motor-insurance-agent"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <AdvisorPage pageKey="motor-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-life-insurance-agent"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <AdvisorPage pageKey="life-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-health-insurance-agent"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <AdvisorPage pageKey="health-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-travel-insurance-agent"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <AdvisorPage pageKey="travel-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-home-insurance-agent"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <AdvisorPage pageKey="home-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-commercial-lines-insurance-agent"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <AdvisorPage pageKey="commercial-lines-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/experience-centers"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <ExperienceCenters />
          </DefaultLayout>
        )}
      />
      <Route
        path="/careers"
        element={(
          <DefaultLayout
            onHomeAuthModeChange={setHomeAuthMode}
            homeAuthMode={homeAuthMode}
          >
            <CareersPage />
          </DefaultLayout>
        )}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
