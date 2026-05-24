import { Link } from 'react-router-dom';
import { services } from '../data/services';
import useScrollReveal from '../hooks/useScrollReveal';

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")";

export default function ServicesSection() {
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

      <div ref={ref} className="fade-up" style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#B87A5A', textTransform: 'uppercase', marginBottom: 8 }}>
              What I do
            </div>
            <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 36px)', letterSpacing: '-0.02em', color: '#F7F4EF', margin: 0 }}>
              Three ways to work together.
            </h2>
          </div>
          <Link to="/services" className="ghost-link" style={{ color: '#6B6860' }}>
            See full services →
          </Link>
        </div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map(s => (
            <div key={s.n} style={{ borderTop: '0.5px solid #3a3835', paddingTop: '1.75rem' }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: '#B87A5A', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>{s.n}</div>
              <h3 className="serif" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: '#F7F4EF', marginBottom: 8, letterSpacing: '-0.01em' }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: '#6B6860', fontWeight: 300, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
