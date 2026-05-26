import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorkPreview from '../components/WorkPreview';
import AboutTeaser from '../components/AboutTeaser';
import ContactCTA from '../components/ContactCTA';

export default function HomePage() {
  const [active, setActive] = useState(0);
  const totalSections = 5;

  useEffect(() => {
    const scrollRoot = document.getElementById('scroll-root');
    if (!scrollRoot) return;

    const sections = scrollRoot.querySelectorAll('.snap-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.5, root: scrollRoot }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goToSection = (index) => {
    const scrollRoot = document.getElementById('scroll-root');
    if (!scrollRoot) return;
    const sections = scrollRoot.querySelectorAll('.snap-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .dot-nav {
          position: fixed;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 50;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #9B9890;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          border: none;
          padding: 0;
        }
        .dot.active {
          background: #B87A5A;
          transform: scale(1.4);
        }
        @media (max-width: 768px) {
          .dot-nav { display: none; }
        }
      `}</style>

      <nav className="dot-nav">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            className={`dot ${active === i ? 'active' : ''}`}
            onClick={() => goToSection(i)}
          />
        ))}
      </nav>

      <HeroSection />
      <ServicesSection />
      <WorkPreview />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
