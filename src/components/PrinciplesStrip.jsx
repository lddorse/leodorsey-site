import { principles } from '../data/principles';

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")";

export default function PrinciplesStrip() {
  return (
    <div style={{ background: '#1a1917', padding: '4rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
        backgroundImage: GRAIN, backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="principles-grid">
          {principles.map((p) => (
            <div key={p.n} style={{ borderTop: '0.5px solid #2e2d2a', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: '#B87A5A', letterSpacing: '0.1em', marginBottom: '1rem' }}>{p.n}</div>
              <p style={{
                fontSize: 18, fontWeight: 400, color: '#F7F4EF', lineHeight: 1.4,
                marginBottom: '0.75rem', margin: '0 0 0.75rem',
                fontFamily: "'DM Serif Display', Georgia, serif", letterSpacing: '-0.01em',
              }}>{p.heading}</p>
              <p style={{ fontSize: 13, color: '#6B6860', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
