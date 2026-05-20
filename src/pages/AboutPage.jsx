import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const credentials = [
  { label: 'M.S. Cybersecurity', sub: 'Eastern Illinois University' },
  { label: 'B.S. Art Technology', sub: 'Illinois State University' },
  { label: 'CompTIA Security+', sub: 'Certified' },
];

const tags = [
  'Chicago venues', 'Screen printing', 'AV engineering',
  'Stained glass', 'Guitar', 'Home studio',
];

export default function AboutPage() {
  return (
    <div style={{ background: '#F7F4EF', minHeight: '100vh', position: 'relative' }}>
      <div className="grain-overlay" />
      <div className="page-content">

        {/* ── HERO ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-page-grid">

            {/* Left — photo */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 16,
                overflow: 'hidden',
                border: '0.5px solid #E0DDD5',
                aspectRatio: '1 / 1',
                maxWidth: 420,
              }}>
                <img
                  src="/leo.jpg"
                  alt="Leo Dorsey"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Offset label */}
              <div style={{
                position: 'absolute', bottom: -16, right: 16,
                background: '#1a1917', borderRadius: 100,
                padding: '8px 18px',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#B87A5A' }} />
                <span style={{ fontSize: 12, fontWeight: 500, color: '#F7F4EF', fontFamily: "'DM Sans', sans-serif" }}>
                  Based in Danville, IL
                </span>
              </div>
            </div>

            {/* Right — intro */}
            <div>
              <div style={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
                color: '#B87A5A', textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
                About
              </div>

              <h1 className="serif" style={{
                fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.025em',
                color: '#1a1917', marginBottom: '1.5rem',
              }}>
                I came up in the creative economy. Now I build for it.
              </h1>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#6B6860', fontWeight: 300, marginBottom: '1.25rem' }}>
                I grew up in East Central Illinois and spent fifteen years in Chicago — engineering audio at venues, running an art gallery, doing stained glass work, screen printing. I've always been drawn to the place where craft meets technology.
              </p>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#6B6860', fontWeight: 300, marginBottom: '2rem' }}>
                That curiosity eventually pulled me into web development and cybersecurity. I build websites for bars, artists, venues, and independent operators — people I understand, in an industry I came up in. My security background means the technical foundations are solid. My creative background means the result actually looks and feels right.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/work" style={{
                  fontSize: 14, fontWeight: 500,
                  color: '#F7F4EF', background: '#1a1917',
                  padding: '12px 24px', borderRadius: 100,
                  textDecoration: 'none', fontFamily: "'DM Sans', sans-serif",
                }}>
                  See the work
                </Link>
                <Link to="/contact" className="ghost-link">
                  Get in touch →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ── BACKGROUND STRIP ── */}
        <div style={{ borderTop: '0.5px solid #E0DDD5', borderBottom: '0.5px solid #E0DDD5' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3.5rem 2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="background-grid">

              <div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', color: '#B87A5A', textTransform: 'uppercase', marginBottom: '1rem' }}>Background</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {tags.map(t => (
                    <span key={t} style={{
                      fontSize: 12, color: '#6B6860',
                      border: '0.5px solid #D0CEC6',
                      padding: '5px 12px', borderRadius: 100,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', color: '#B87A5A', textTransform: 'uppercase', marginBottom: '1rem' }}>Credentials</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {credentials.map(c => (
                    <div key={c.label}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: '#1a1917', margin: '0 0 2px', fontFamily: "'DM Sans', sans-serif" }}>{c.label}</p>
                      <p style={{ fontSize: 12, color: '#9B9890', margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{c.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', color: '#B87A5A', textTransform: 'uppercase', marginBottom: '1rem' }}>When I'm not building</div>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: '#6B6860', fontWeight: 300, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                  Playing guitar, making things in my home studio, or hanging with Chewie (a high-energy mini Aussie) and Pio (my loyal terrier-pit mix). Usually with a good playlist running.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── CONTACT CTA ── */}
        <div style={{ padding: '5rem 2.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <h2 className="serif" style={{ fontSize: 34, letterSpacing: '-0.02em', marginBottom: 12, color: '#1a1917', lineHeight: 1.1 }}>
              Let's work together.
            </h2>
            <p style={{ fontSize: 15, color: '#6B6860', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 300 }}>
              If you're building something worth showing up to, I'd love to hear about it.
            </p>
            <Link to="/contact" className="cta-btn">Start a conversation</Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
