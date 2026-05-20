import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ContactCTA() {
  const ref = useScrollReveal();

  return (
    <div style={{ padding: '5rem 2.5rem', textAlign: 'center' }}>
      <div ref={ref} className="fade-up" style={{ maxWidth: 520, margin: '0 auto' }}>
        <h2 className="serif" style={{ fontSize: 38, letterSpacing: '-0.02em', marginBottom: 14, color: '#1a1917', lineHeight: 1.1 }}>
          Let's build something.
        </h2>
        <p style={{ fontSize: 15, color: '#6B6860', lineHeight: 1.75, marginBottom: '2.25rem', fontWeight: 300 }}>
          Tell me about your project — what it is, when you need it, and roughly what you're working with. I'll get back to you within a day.
        </p>
        <Link to="/contact" className="cta-btn">Start a conversation</Link>
      </div>
    </div>
  );
}
