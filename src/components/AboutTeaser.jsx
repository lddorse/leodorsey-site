import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")";

export default function AboutTeaser() {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="snap-section" style={{
      minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '4rem 2rem',
      background: '#2C2A27',
      scrollSnapAlign: 'start',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: GRAIN, backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
      }} />

      <div
        ref={ref}
        className="fade-up about-teaser-grid"
        style={{
          maxWidth: 1100, margin: '0 auto', width: '100%',
          display: 'grid', gridTemplateColumns: '280px 1fr',
          gap: '3.5rem', alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}
      >
        <div style={{
          borderRadius: 14, overflow: 'hidden',
          border: '0.5px solid #3a3835',
          aspectRatio: '1 / 1',
          maxWidth: 280,
        }}>
          <img
            src="/leo.jpg"
            alt="Leo Dorsey"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div>
          <div style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
            color: '#B87A5A', textTransform: 'uppercase',
            marginBottom: '1rem',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
            About
          </div>

          <h2 className="serif" style={{
            fontSize: 'clamp(26px, 4vw, 38px)', lineHeight: 1.08,
            letterSpacing: '-0.02em', color: '#F7F4EF', marginBottom: '1.25rem',
          }}>
            I came up in the creative economy. Now I build for it.
          </h2>

          <p style={{
            fontSize: 'clamp(13px, 1.5vw, 15px)', lineHeight: 1.8,
            color: '#9B9890', fontWeight: 300, marginBottom: '1.75rem', maxWidth: 480,
          }}>
            Fifteen years in Chicago — engineering audio at venues, running an art gallery, screen printing. That same curiosity pulled me into web development. I build for independents because I am one.
          </p>

          <Link to="/about" className="ghost-link" style={{ color: '#6B6860' }}>
            More about me →
          </Link>
        </div>
      </div>
    </div>
  );
}

