import Hero from '../components/Hero.jsx';
import Products from '../components/Products.jsx';
import WhyUsSection from '../components/WhyUsSection.jsx';
import JoinUsSection from '../components/JoinUsSection.jsx';
import FaqsSection from '../components/FaqsSection.jsx';
import HappyPartnersSection from '../components/HappyPartnersSection.jsx';
// import ExperienceCenters from './ExperienceCenters.jsx';

export default function Home({ authMode, onAuthModeChange }) {
  return (
    <>
      <Hero authMode={authMode} onAuthModeChange={onAuthModeChange} />
      <Products />
      <WhyUsSection />
      <JoinUsSection />
      <FaqsSection />
      <HappyPartnersSection />
      {/* <ExperienceCenters /> */}
    </>
  );
}
