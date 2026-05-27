import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import ExperienceCenters from './pages/ExperienceCenters.jsx';
import InsuranceCategoryPage from './pages/InsuranceCategoryPage.jsx';
import AdvisorPage from './pages/AdvisorPage.jsx';

function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        )}
      />
      <Route
        path="/articles"
        element={(
          <DefaultLayout>
            <ArticlesPage />
          </DefaultLayout>
        )}
      />
      <Route
        path="/articles/:slug"
        element={(
          <DefaultLayout>
            <InsuranceCategoryPage />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-motor-insurance-agent"
        element={(
          <DefaultLayout>
            <AdvisorPage pageKey="motor-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-life-insurance-agent"
        element={(
          <DefaultLayout>
            <AdvisorPage pageKey="life-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-health-insurance-agent"
        element={(
          <DefaultLayout>
            <AdvisorPage pageKey="health-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-travel-insurance-agent"
        element={(
          <DefaultLayout>
            <AdvisorPage pageKey="travel-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-home-insurance-agent"
        element={(
          <DefaultLayout>
            <AdvisorPage pageKey="home-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/how-to-become-a-commercial-lines-insurance-agent"
        element={(
          <DefaultLayout>
            <AdvisorPage pageKey="commercial-lines-insurance-agent" />
          </DefaultLayout>
        )}
      />
      <Route
        path="/experience-centers"
        element={(
          <DefaultLayout>
            <ExperienceCenters />
          </DefaultLayout>
        )}
      />
      <Route
        path="/careers"
        element={(
          <DefaultLayout>
            <CareersPage />
          </DefaultLayout>
        )}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
