import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2.5rem' }}>
      <section style={{ padding: '7rem 0 6rem', textAlign: 'center' }}>
        <div className={`fade-up ${visible ? 'in' : ''}`} style={{ transitionDelay: '0.05s' }}>

          <div style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
            color: '#B87A5A', textTransform: 'uppercase',
            marginBottom: '1.75rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}>
            <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
            Web Design & Development
            <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
          </div>

          <h1 className="serif hero-h1" style={{
            fontSize: 72, lineHeight: 1.04,
            letterSpacing: '-0.03em', color: '#1a1917',
            marginBottom: '1.75rem',
          }}>
            Built for the places{' '}
            <em style={{ color: '#B87A5A' }}>worth</em>
            {' '}showing up to.
          </h1>

          <p style={{
            fontSize: 17, lineHeight: 1.75,
            color: '#6B6860', fontWeight: 300,
            maxWidth: 520, margin: '0 auto 2.5rem',
          }}>
            I build websites for bars, venues, artists, and independent operators — in your visual language, not mine.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', justifyContent: 'center' }}>
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
      </section>
    </div>
  );
}
