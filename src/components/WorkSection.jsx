import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function WorkSection() {
  const headingRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.05 });

  return (
    <>
      <div className="divider" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2.5rem' }}>
        <section style={{ padding: '4rem 0' }}>

          <div ref={headingRef} className="fade-up">
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#9B9890', textTransform: 'uppercase', marginBottom: 6 }}>
              Selected work
            </div>
            <h2 className="serif" style={{ fontSize: 32, letterSpacing: '-0.01em', marginBottom: '2.5rem', color: '#1a1917' }}>
              Every project in its own language.
            </h2>
          </div>

          <div ref={gridRef} className="fade-up projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>

            {/* Sacred Prints — featured */}
            <Link to="/projects/sacred-prints" className="project-card wide-card" style={{
              gridColumn: 'span 2',
              background: '#FFF8F5', border: '0.5px solid #F5C4B3',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center',
            }}>
              <div>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100, background: '#FAECE7', color: '#993C1D', marginBottom: 12 }}>E-commerce</span>
                <h3 className="serif" style={{ fontSize: 24, color: '#7A2E13', marginBottom: 8, letterSpacing: '-0.01em' }}>Sacred Prints</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: '#6B6860', marginBottom: 16 }}>Custom storefront with Stripe integration, Google Sheets inventory sync, and Vercel serverless functions. No platform fees, no templates.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {['HTML/CSS/JS', 'Stripe', 'Sheets API', 'Vercel'].map(t => (
                    <span key={t} className="stack-pill" style={{ borderColor: '#F0997B', color: '#D85A30' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{
                background: '#FFF0E8', border: '0.5px dashed #F0997B',
                borderRadius: 10, height: 160,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}>
                <div style={{ width: '55%', height: 8, background: '#F0997B', borderRadius: 4, opacity: 0.4 }} />
                <div style={{ width: '38%', height: 8, background: '#F0997B', borderRadius: 4, opacity: 0.25 }} />
                <div style={{ width: 80, height: 28, background: '#D85A30', borderRadius: 100, marginTop: 10, opacity: 0.65 }} />
              </div>
            </Link>

            {/* Obsidian */}
            <div className="project-card" style={{ background: '#1C1C1A', border: '0.5px solid #2e2e2b' }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100, background: '#2A2A27', color: '#C5B99A', marginBottom: 12 }}>Interactive</span>
              <h3 className="serif" style={{ fontSize: 22, color: '#F2EDD9', marginBottom: 8 }}>Obsidian</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#8A8678', marginBottom: 16 }}>Retro terminal menu for a coffee shop. Built for atmosphere as much as function.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['React', 'CSS animations'].map(t => (
                  <span key={t} className="stack-pill" style={{ borderColor: '#444', color: '#8A8678' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Our Bar */}
            <div className="project-card" style={{ background: '#FAEEDA', border: '0.5px solid #FAC775' }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100, background: '#F5DFB0', color: '#633806', marginBottom: 12 }}>Fundraising</span>
              <h3 className="serif" style={{ fontSize: 22, color: '#633806', marginBottom: 8 }}>Our Bar</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#7A5A30', marginBottom: 16 }}>Revival landing page for a community bar in Penfield, IL. Warm, analog, built to convert.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['HTML/CSS/JS', 'Vercel'].map(t => (
                  <span key={t} className="stack-pill" style={{ borderColor: '#EF9F27', color: '#854F0B' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Pedestrian Club */}
            <div className="project-card wide-card" style={{ gridColumn: 'span 2', background: '#EAF3DE', border: '0.5px solid #C0DD97' }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100, background: '#D5EAB7', color: '#27500A', marginBottom: 12 }}>Full-stack app</span>
              <h3 className="serif" style={{ fontSize: 22, color: '#27500A', marginBottom: 8 }}>Danville Pedestrian Club</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: '#3D6020', marginBottom: 16, maxWidth: 500 }}>Member management, route logging, and event tracking. Real auth, real database — an actual product, not a showcase.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Next.js', 'Supabase', 'Vercel', 'Tailwind'].map(t => (
                  <span key={t} className="stack-pill" style={{ borderColor: '#97C459', color: '#3B6D11' }}>{t}</span>
                ))}
              </div>
            </div>

          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/work" className="ghost-link">View all projects →</Link>
          </div>

        </section>
      </div>
    </>
  );
}
