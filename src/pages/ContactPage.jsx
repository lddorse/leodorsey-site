import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import Footer from '../components/Footer';

const FORMSPREE = 'https://formspree.io/f/xvzykwqo';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.7)',
  border: '0.5px solid #E0DDD5',
  borderRadius: 10,
  padding: '12px 16px',
  fontSize: 14,
  color: '#1a1917',
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  boxSizing: 'border-box',
};

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 500,
  color: '#6B6860',
  letterSpacing: '0.04em',
  marginBottom: 8,
  fontFamily: "'DM Sans', sans-serif",
};

export default function ContactPage() {
  const formRef = useScrollReveal({ threshold: 0.05 });
  const infoRef = useScrollReveal({ threshold: 0.05 });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({
    name: '', email: '', type: '', timeline: '', budget: '', message: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', type: '', timeline: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const focusStyle = key => ({
    ...inputStyle,
    borderColor: focused === key ? '#B87A5A' : '#E0DDD5',
    background: focused === key ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)',
  });

  return (
    <div style={{ background: '#F7F4EF', minHeight: '100vh', position: 'relative' }}>
      <div className="grain-overlay" />
      <div className="page-content">

        {/* ── HEADER ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem 4rem' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '5rem', alignItems: 'flex-start',
          }} className="contact-grid">

            {/* Left — info */}
            <div ref={infoRef} className="fade-up">
              <div style={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
                color: '#B87A5A', textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
                Contact
              </div>

              <h1 className="serif" style={{
                fontSize: 48, lineHeight: 1.06, letterSpacing: '-0.025em',
                color: '#1a1917', marginBottom: '1.5rem',
              }}>
                Let's build something.
              </h1>

              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#6B6860', fontWeight: 300, marginBottom: '2.5rem' }}>
                Tell me about your project — what it is, who it's for, and when you need it. I'll get back to you within a day.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { label: 'Email', value: 'lddorse@gmail.com', href: 'mailto:lddorse@gmail.com' },
                  { label: 'GitHub', value: 'github.com/lddorse', href: 'https://github.com/lddorse' },
                  { label: 'Based in', value: 'Danville, IL', href: null },
                ].map(item => (
                  <div key={item.label} style={{ borderTop: '0.5px solid #E0DDD5', paddingTop: '1rem' }}>
                    <div style={{ fontSize: 11, fontWeight: 500, color: '#B87A5A', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: 14, color: '#1a1917', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = '#B87A5A'}
                        onMouseLeave={e => e.target.style.color = '#1a1917'}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize: 14, color: '#1a1917', fontFamily: "'DM Sans', sans-serif" }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div ref={formRef} className="fade-up" style={{ transitionDelay: '0.15s' }}>
              {status === 'success' ? (
                <div style={{
                  background: '#EAF3DE', border: '0.5px solid #C0DD97',
                  borderRadius: 16, padding: '3rem 2rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>✦</div>
                  <h3 className="serif" style={{ fontSize: 26, color: '#27500A', marginBottom: 8 }}>Got it, thanks.</h3>
                  <p style={{ fontSize: 14, color: '#3D6020', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
                    I'll take a look and get back to you within a day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{ fontSize: 13, color: '#3D6020', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your name"
                        style={focusStyle('name')}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        style={focusStyle('email')}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  {/* Project type */}
                  <div>
                    <label style={labelStyle}>Project type</label>
                    <select
                      name="type" value={form.type} onChange={handleChange} required
                      style={{ ...focusStyle('type'), appearance: 'none', cursor: 'pointer' }}
                      onFocus={() => setFocused('type')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="" disabled>Select one</option>
                      <option>Website / Landing page</option>
                      <option>E-commerce store</option>
                      <option>Full-stack app</option>
                      <option>Fundraising / Campaign page</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Timeline + Budget */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <div>
                      <label style={labelStyle}>Timeline</label>
                      <select
                        name="timeline" value={form.timeline} onChange={handleChange}
                        style={{ ...focusStyle('timeline'), appearance: 'none', cursor: 'pointer' }}
                        onFocus={() => setFocused('timeline')}
                        onBlur={() => setFocused(null)}
                      >
                        <option value="" disabled>When do you need it?</option>
                        <option>ASAP</option>
                        <option>Within a month</option>
                        <option>1–3 months</option>
                        <option>No rush</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Budget range</label>
                      <select
                        name="budget" value={form.budget} onChange={handleChange}
                        style={{ ...focusStyle('budget'), appearance: 'none', cursor: 'pointer' }}
                        onFocus={() => setFocused('budget')}
                        onBlur={() => setFocused(null)}
                      >
                        <option value="" disabled>Roughly</option>
                        <option>Under $500</option>
                        <option>$500 – $1,500</option>
                        <option>$1,500 – $3,000</option>
                        <option>$3,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Tell me about your project</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required
                      placeholder="What are you building, who is it for, what do you need..."
                      rows={5}
                      style={{ ...focusStyle('message'), resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontSize: 13, color: '#993C1D', margin: 0, fontFamily: "'DM Sans', sans-serif" }}>
                      Something went wrong — try emailing me directly at lddorse@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      fontSize: 15, fontWeight: 500,
                      color: '#F7F4EF',
                      background: status === 'sending' ? '#6B6860' : '#1a1917',
                      padding: '14px 32px', borderRadius: 100,
                      border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s, transform 0.15s',
                      fontFamily: "'DM Sans', sans-serif",
                      alignSelf: 'flex-start',
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send it →'}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
