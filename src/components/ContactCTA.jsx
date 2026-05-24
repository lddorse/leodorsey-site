import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactCTA() {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="snap-section" style={{
      minHeight: '100dvh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      textAlign: 'center',
      padding: '4rem 2rem',
      background: '#F7F4EF',
      scrollSnapAlign: 'start',
    }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 520, width: '100%' }}>
        <div style={{
          fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
          color: '#B87A5A', textTransform: 'uppercase',
          marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
          Get in touch
          <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
        </div>

        <h2 className="serif" style={{
          fontSize: 'clamp(36px, 6vw, 52px)',
          letterSpacing: '-0.025em',
          lineHeight: 1.06, marginBottom: 16, color: '#1a1917',
        }}>
          Let's build something.
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 1.8vw, 16px)',
          color: '#6B6860', lineHeight: 1.75,
          marginBottom: '2.5rem', fontWeight: 300,
        }}>
          Tell me about your project — what it is, when you need it, and roughly what you're working with. I'll get back to you within a day.
        </p>
        <Link to="/contact" className="cta-btn">Start a conversation</Link>
      </div>
    </div>
  );
}
