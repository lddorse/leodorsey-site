import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const preview = [
  {
    id: 'sacred',
    type: 'E-commerce',
    title: 'Sacred Prints',
    desc: 'Custom storefront built around a non-technical client\'s real workflow. Stripe, Google Sheets, no platform fees.',
    url: 'https://sacred-prints.com',
    bg: '#FFF8F5', border: '#F5C4B3',
    tagBg: '#FAECE7', tagColor: '#993C1D',
    titleColor: '#7A2E13', descColor: '#6B6860',
  },
  {
    id: 'obsidian',
    type: 'Interactive',
    title: 'Obsidian',
    desc: 'Retro terminal coffee shop menu. Built for atmosphere as much as function.',
    url: 'https://obsidian-nu-coral.vercel.app',
    bg: '#1C1C1A', border: '#2e2e2b',
    tagBg: '#2A2A27', tagColor: '#C5B99A',
    titleColor: '#F2EDD9', descColor: '#8A8678',
  },
  {
    id: 'pedestrian',
    type: 'Full-stack app',
    title: 'Pedestrian Club',
    desc: 'Member management and route logging for a local walking club. Real auth, real database.',
    url: 'https://danville-pedestrian-club.vercel.app',
    bg: '#EAF3DE', border: '#C0DD97',
    tagBg: '#D5EAB7', tagColor: '#27500A',
    titleColor: '#27500A', descColor: '#3D6020',
  },
];

export default function WorkPreview() {
  const headingRef = useScrollReveal({ threshold: 0.1 });
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <div className="snap-section" style={{
      minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '4rem 2rem',
      background: '#F7F4EF',
      scrollSnapAlign: 'start',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        <div ref={headingRef} className="fade-up" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#9B9890', textTransform: 'uppercase', marginBottom: 6 }}>
              Selected work
            </div>
            <h2 className="serif" style={{ fontSize: 'clamp(26px, 4vw, 36px)', letterSpacing: '-0.02em', color: '#1a1917', margin: 0 }}>
              Every project in its own language.
            </h2>
          </div>
          <Link to="/work" className="ghost-link">See all work →</Link>
        </div>

        <div ref={gridRef} className="fade-up work-preview-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
        }}>
          {preview.map(p => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ background: p.bg, border: `0.5px solid ${p.border}`, textDecoration: 'none', display: 'block' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{
                  fontSize: 11, fontWeight: 500, letterSpacing: '0.06em',
                  textTransform: 'uppercase', padding: '3px 10px', borderRadius: 100,
                  background: p.tagBg, color: p.tagColor,
                }}>{p.type}</span>
                <span style={{ fontSize: 12, color: p.descColor, opacity: 0.5 }}>↗</span>
              </div>
              <h3 className="serif" style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: p.titleColor, marginBottom: 6, letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: p.descColor, margin: 0 }}>
                {p.desc}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

