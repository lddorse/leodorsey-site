import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="snap-section" style={{
      minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      textAlign: 'center',
      padding: '5rem 1.5rem 4rem',
      scrollSnapAlign: 'start',
      background: '#F7F4EF',
      position: 'relative',
    }}>
      <div className={`fade-up ${visible ? 'in' : ''}`} style={{ maxWidth: 860, width: '100%' }}>

        <div style={{
          fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
          color: '#B87A5A', textTransform: 'uppercase',
          marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
          Web Design & Development
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
        </div>

        <h1 className="serif hero-h1" style={{
          fontSize: 'clamp(36px, 7vw, 72px)',
          lineHeight: 1.04,
          letterSpacing: '-0.03em', color: '#1a1917',
          marginBottom: '1.5rem',
        }}>
          Built for the places{' '}
          <em style={{ color: '#B87A5A' }}>worth</em>
          {' '}showing up to.
        </h1>

        <p style={{
          fontSize: 'clamp(14px, 2vw, 17px)', lineHeight: 1.75,
          color: '#6B6860', fontWeight: 300,
          maxWidth: 480, margin: '0 auto 2.25rem',
        }}>
          I build websites for bars, venues, artists, and independent operators — in your visual language, not mine.
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/work" style={{
            fontSize: 14, fontWeight: 500,
            color: '#F7F4EF', background: '#1a1917',
            padding: '13px 28px', borderRadius: 100,
            textDecoration: 'none', transition: 'background 0.2s',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            See the work
          </Link>
          <Link to="/contact" className="ghost-link">
            Get in touch →
          </Link>
        </div>

      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        opacity: 0.35,
      }}>
        <span style={{ fontSize: 10, letterSpacing: '0.1em', color: '#1a1917', fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 1, height: 28, background: '#1a1917', animation: 'scrollPulse 1.8s ease-in-out infinite' }} />
      </div>

    </div>
  );
}
