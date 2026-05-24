import { useEffect, useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WorkPreview from '../components/WorkPreview';
import AboutTeaser from '../components/AboutTeaser';
import ContactCTA from '../components/ContactCTA';

export default function HomePage() {
  const isScrolling = useRef(false);
  const currentSection = useRef(0);
  const touchStartY = useRef(0);
  const [active, setActive] = useState(0);
  const totalSections = 5;

const goToSection = (index) => {
  if (index < 0 || index >= totalSections) return;
  if (isScrolling.current) return;
  const sections = document.querySelectorAll('.snap-section');
  console.log('sections found:', sections.length, 'going to:', index);
  const el = sections[index];
  if (!el) return;
  isScrolling.current = true;
  currentSection.current = index;
  setActive(index);
  el.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => { isScrolling.current = false; }, 1000);
};
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;
      if (e.deltaY > 20) goToSection(currentSection.current + 1);
      else if (e.deltaY < -20) goToSection(currentSection.current - 1);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 40) return;
      if (diff > 0) goToSection(currentSection.current + 1);
      else goToSection(currentSection.current - 1);
    };

    const handleKey = (e) => {
      if (isScrolling.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goToSection(currentSection.current + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goToSection(currentSection.current - 1);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.3); }
        }
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
        @media (max-width: 430px) {
          .dot-nav { display: none; }
        }
      `}</style>

      <div className="grain-overlay" />

      <nav className="dot-nav">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button key={i} className={`dot ${active === i ? 'active' : ''}`} onClick={() => goToSection(i)} />
        ))}
      </nav>

      <div>
        <HeroSection />
        <ServicesSection />
        <WorkPreview />
        <AboutTeaser />
        <ContactCTA />
      </div>
    </>
  );
}
