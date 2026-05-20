import useScrollReveal from '../hooks/useScrollReveal';

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")";

const tags = ['Chicago venues', 'Screen printing', 'AV engineering', 'M.S. Cybersecurity', 'Self-hosted infra'];

export default function AboutStrip() {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <div style={{ background: '#2C2A27', padding: '3.5rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: GRAIN, backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
      }} />
      <div ref={ref} className="fade-up about-grid" style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <h2 className="serif" style={{ fontSize: 30, color: '#F7F4EF', lineHeight: 1.25, letterSpacing: '-0.01em' }}>
          Built by someone who's{' '}
          <em style={{ color: '#B87A5A' }}>been in the room.</em>
        </h2>
        <div>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: '#9B9890', fontWeight: 300 }}>
            Fifteen years in Chicago venues, screen printing shops, and independent art spaces shaped how I think about design. I build for the creative economy because I came up in it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: '1.25rem' }}>
            {tags.map(t => <span key={t} className="about-tag">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
