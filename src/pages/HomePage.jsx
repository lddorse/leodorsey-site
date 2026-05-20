import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';
import AboutTeaser from '../components/AboutTeaser';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div style={{ background: '#F7F4EF', minHeight: '100vh', position: 'relative' }}>
      <div className="grain-overlay" />
      <div className="page-content">
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <AboutTeaser />
        <ContactCTA />
        <Footer />
      </div>
    </div>
  );
}
