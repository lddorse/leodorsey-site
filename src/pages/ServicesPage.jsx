import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import Footer from '../components/Footer';

const services = [
  {
    n: '01',
    title: 'Design & Build',
    tagline: 'A custom site that looks and feels like you.',
    price: 'From $600',
    timeline: '2–3 weeks',
    who: 'Bars, venues, artists, musicians, small local businesses, nonprofits.',
    desc: 'A fully custom designed website — no themes, no templates, no page builders. Before anything gets built, we talk about how you work, what you already use, and what you actually need. Sometimes that conversation changes the scope. Sometimes it saves you money. Either way, you get something built for your situation, not a generic one.',
    deliverables: [
      'Custom design and full build',
      'Up to 5 pages',
      'Mobile responsive',
      'Contact form wired to your email',
      'Deployed on your own Vercel account',
      'Your domain, your code, your hosting',
      '2 rounds of revisions',
      '30 days of post-launch support',
    ],
    example: 'Elo Sec',
    exampleDesc: 'Custom platform site for a self-hosted security infrastructure project.',
    exampleUrl: 'https://elosec.tech',
    bg: '#EEF2F7', border: '#BFD0E8',
    tagBg: '#DDE7F5', tagColor: '#1A3A5C',
    titleColor: '#1A3A5C',
    accentColor: '#2A5C8A',
  },
  {
    n: '02',
    title: 'E-commerce & Fundraising',
    tagline: 'Sell things or raise money — without the platform tax.',
    price: 'From $1,500',
    timeline: '3–5 weeks',
    who: 'Independent makers, artists selling prints or merch, nonprofits running campaigns, bars running fundraisers.',
    desc: 'Stripe integration, inventory management, and donation or checkout flows built around whatever you already use — not whatever\'s easiest to build. If you manage inventory in a spreadsheet, we build around that. No platform fees, no lock-in, no monthly subscription to a store builder.',
    deliverables: [
      'Custom storefront or fundraising page design and build',
      'Stripe payment integration',
      'Inventory or campaign management built around your workflow',
      'Order or donation confirmation emails',
      'Mobile responsive',
      'Deployed on your own accounts',
      'Your code, your data, your customers',
      '2 rounds of revisions',
      '30 days of post-launch support',
    ],
    examples: [
      { name: 'Sacred Prints', desc: 'Custom e-commerce storefront with Google Sheets inventory sync.', url: 'https://sacred-prints.com' },
      { name: 'Our Bar', desc: 'Donation and fundraising platform for a community bar revival.', url: 'https://ourbarpenfield.com' },
    ],
    bg: '#FAEEDA', border: '#FAC775',
    tagBg: '#F5DFB0', tagColor: '#633806',
    titleColor: '#633806',
    accentColor: '#EF9F27',
  },
  {
    n: '03',
    title: 'Full-stack & Technical',
    tagline: 'A real app, built for real people to actually use.',
    price: 'From $3,000',
    timeline: '5–10 weeks',
    who: 'Organizations that need user accounts, member portals, dashboards, or anything that requires a database.',
    desc: 'When you need more than a website — user authentication, a real database, admin dashboards, automated workflows. Built for non-technical end users who shouldn\'t need to think about the technology. Security-aware by default, because that\'s my background.',
    deliverables: [
      'Full-stack application design and build',
      'User authentication and account management',
      'Database design and implementation',
      'Admin dashboard or management interface',
      'API integrations as needed',
      'Mobile responsive',
      'Deployed on your own accounts',
      'Documentation so you can manage it yourself',
      '60 days of post-launch support',
    ],
    example: 'Danville Pedestrian Club',
    exampleDesc: 'Member management, route logging, and event tracking for a local walking club.',
    exampleUrl: 'https://danville-pedestrian-club.vercel.app',
    bg: '#EAF3DE', border: '#C0DD97',
    tagBg: '#D5EAB7', tagColor: '#27500A',
    titleColor: '#27500A',
    accentColor: '#639922',
  },
];

const process = [
  {
    n: '01',
    title: 'Tell me about your project',
    body: 'Fill out the contact form or email me directly. Tell me what you\'re building, who it\'s for, and when you need it. I\'ll get back to you within a day.',
  },
  {
    n: '02',
    title: 'We figure out what you actually need',
    body: 'Before I write a line of code, I want to understand your situation — what tools you use, what you\'re comfortable with, what would fit your life. Sometimes that changes the scope. Sometimes I recommend something simpler. Either way, you get the right solution.',
  },
  {
    n: '03',
    title: '50% upfront, work begins',
    body: 'Once we agree on scope and price, you pay 50% to kick things off. This keeps both sides accountable and means I\'m fully committed to your project from day one.',
  },
  {
    n: '04',
    title: 'Build, review, refine',
    body: 'I build in the open — you\'ll see progress early and often. Two rounds of revisions are included so we can get it right before launch.',
  },
  {
    n: '05',
    title: '50% on launch, everything is yours',
    body: 'Final payment on launch day. The code, the domain, the hosting — all under your name. You could never talk to me again and your site keeps running.',
  },
];

const faqs = [
  {
    q: 'What if I don\'t know what I need?',
    a: 'That\'s actually where I\'m most useful. Tell me what problem you\'re trying to solve and I\'ll figure out the right approach. Sometimes that\'s a custom build. Sometimes it\'s a simpler tool that costs you nothing. I\'d rather give you the right answer than sell you a project you don\'t need.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Every project includes 30–60 days of post-launch support for bug fixes and small adjustments. After that, I offer ongoing support at an hourly rate, or I can hand off the code and documentation so you or someone else can manage it.',
  },
  {
    q: 'Do I need to know anything technical?',
    a: 'No. The whole point is that the end result fits how you actually work — not how a developer thinks you should work. I\'ve built for people who had never heard of a CMS and for people who run their own servers.',
  },
  {
    q: 'What if my budget is smaller than your starting prices?',
    a: 'Reach out anyway and tell me what you\'re working with. I\'d rather have an honest conversation than have you assume it won\'t work. Nonprofits and community projects sometimes get different treatment.',
  },
  {
    q: 'How does the 50/50 payment split work?',
    a: '50% is due when we agree on scope and I start work. The remaining 50% is due on launch day. I accept bank transfer, Venmo, or PayPal. No hidden fees.',
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: '0.5px solid #E0DDD5', padding: '1.25rem 0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: '#1a1917', fontFamily: "'DM Sans', sans-serif" }}>{item.q}</span>
        <span style={{
          fontSize: 18, color: '#B87A5A', flexShrink: 0, marginLeft: 16,
          transition: 'transform 0.2s',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          display: 'inline-block',
        }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: 14, lineHeight: 1.75, color: '#6B6860', margin: '0.875rem 0 0', fontWeight: 300, fontFamily: "'DM Sans', sans-serif" }}>
          {item.a}
        </p>
      )}
    </div>
  );
}

function ServiceCard({ s }) {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      className="fade-up service-lane-grid"
      style={{
        background: s.bg,
        border: `0.5px solid ${s.border}`,
        borderRadius: 16,
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
      }}
    >
      {/* Left */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: s.accentColor, letterSpacing: '0.1em' }}>{s.n}</span>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 100, background: s.tagBg, color: s.tagColor }}>{s.title}</span>
        </div>
        <h2 className="serif" style={{ fontSize: 26, color: s.titleColor, marginBottom: 8, letterSpacing: '-0.01em' }}>{s.tagline}</h2>
        <p style={{ fontSize: 13, lineHeight: 1.75, color: '#6B6860', marginBottom: '1.25rem', fontWeight: 300 }}>{s.desc}</p>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: s.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Starting at</div>
            <div style={{ fontSize: 20, fontWeight: 500, color: s.titleColor, fontFamily: "'DM Serif Display', Georgia, serif" }}>{s.price}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, color: s.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Timeline</div>
            <div style={{ fontSize: 20, fontWeight: 500, color: s.titleColor, fontFamily: "'DM Serif Display', Georgia, serif" }}>{s.timeline}</div>
          </div>
        </div>

        <div style={{ fontSize: 12, color: '#9B9890', marginBottom: '1.5rem', fontStyle: 'italic' }}>
          Good for: {s.who}
        </div>

        {s.examples ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: s.accentColor, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>Examples</div>
            {s.examples.map(ex => (
              <a key={ex.name} href={ex.url} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 12, color: s.accentColor, textDecoration: 'none', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                {ex.name} ↗ <span style={{ color: '#9B9890', fontWeight: 300 }}>— {ex.desc}</span>
              </a>
            ))}
          </div>
        ) : (
          <a href={s.exampleUrl} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 12, color: s.accentColor, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500,
          }}>
            {s.example} ↗ <span style={{ color: '#9B9890', fontWeight: 300 }}>— {s.exampleDesc}</span>
          </a>
        )}
      </div>

      {/* Right — deliverables */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', color: s.accentColor, textTransform: 'uppercase', marginBottom: '1rem' }}>
          What's included
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {s.deliverables.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ color: s.accentColor, fontSize: 14, flexShrink: 0, marginTop: 1 }}>✦</span>
              <span style={{ fontSize: 13, color: '#4a4845', lineHeight: 1.5 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const headingRef = useScrollReveal();
  const consultingRef = useScrollReveal({ threshold: 0.1 });
  const processRef = useScrollReveal({ threshold: 0.05 });
  const faqRef = useScrollReveal({ threshold: 0.05 });

  return (
    <div style={{ background: '#F7F4EF', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
      <div className="grain-overlay" />
      <div className="page-content">

        {/* ── HEADER ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2.5rem 4rem' }}>
          <div ref={headingRef} className="fade-up">
            <div style={{
              fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
              color: '#B87A5A', textTransform: 'uppercase',
              marginBottom: '1.25rem',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ display: 'inline-block', width: 20, height: 1, background: '#B87A5A' }} />
              Services
            </div>
            <h1 className="serif" style={{
              fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.06,
              letterSpacing: '-0.025em', color: '#1a1917',
              marginBottom: '1rem', maxWidth: 700,
            }}>
              Built around the person, not just the project.
            </h1>
            <p style={{
              fontSize: 16, lineHeight: 1.75, color: '#6B6860',
              fontWeight: 300, maxWidth: 560, marginBottom: '1rem',
            }}>
              Before I write a line of code, I want to understand how you work — what tools you use, what you're comfortable with, what would actually fit your life. Everything follows from that.
            </p>
            <p style={{
              fontSize: 16, lineHeight: 1.75, color: '#6B6860',
              fontWeight: 300, maxWidth: 560,
            }}>
              Sometimes the right solution isn't a custom build at all. I'll tell you that too.
            </p>
          </div>
        </div>

        <div style={{ height: '0.5px', background: '#E0DDD5', margin: '0 2.5rem' }} />

        {/* ── SERVICE LANES ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {services.map(s => <ServiceCard key={s.n} s={s} />)}
          </div>
        </div>

        {/* ── CONSULTING STRIP ── */}
        <div style={{ height: '0.5px', background: '#E0DDD5', margin: '0 2.5rem' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 2.5rem' }}>
          <div ref={consultingRef} className="fade-up" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center',
          }} className="fade-up consulting-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#B87A5A', textTransform: 'uppercase', marginBottom: 8 }}>Not sure what you need?</div>
              <h2 className="serif" style={{ fontSize: 28, color: '#1a1917', letterSpacing: '-0.01em', marginBottom: 12 }}>
                Sometimes a conversation is the right first step.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: '#6B6860', fontWeight: 300, margin: 0 }}>
                If you're not sure what you need — or you're using something old and wondering if there's a better way — I'm happy to just talk through it. No pitch, no pressure. I'll give you an honest read on your situation and what I'd recommend, whether that's working with me or not.
              </p>
            </div>
            <div style={{
              background: '#fff', border: '0.5px solid #E0DDD5',
              borderRadius: 14, padding: '1.75rem',
            }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: '#B87A5A', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Strategy & Consulting</div>
              <div style={{ fontSize: 28, fontFamily: "'DM Serif Display', Georgia, serif", color: '#1a1917', marginBottom: 8 }}>$100 / hr</div>
              <p style={{ fontSize: 13, color: '#6B6860', lineHeight: 1.7, marginBottom: '1.25rem', fontWeight: 300 }}>
                A focused 1-hour call where I assess your current setup, understand your goals, and give you a clear recommendation — what to build, what to change, or what to leave alone.
              </p>
              <Link to="/contact" className="ghost-link" style={{ fontSize: 13 }}>
                Book a call →
              </Link>
            </div>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div style={{ background: '#2C2A27', padding: '4rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none',
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
          }} />
          <div ref={processRef} className="fade-up" style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#B87A5A', textTransform: 'uppercase', marginBottom: 8 }}>How it works</div>
            <h2 className="serif" style={{ fontSize: 32, color: '#F7F4EF', letterSpacing: '-0.01em', marginBottom: '2.5rem' }}>
              No surprises. No handoffs. No nonsense.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }} className="process-grid">
              {process.map(p => (
                <div key={p.n} style={{ borderTop: '0.5px solid #3a3835', paddingTop: '1.25rem' }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: '#B87A5A', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{p.n}</div>
                  <h3 className="serif" style={{ fontSize: 16, color: '#F7F4EF', marginBottom: 8, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: '#6B6860', fontWeight: 300, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2.5rem' }}>
          <div ref={faqRef} className="fade-up">
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', color: '#9B9890', textTransform: 'uppercase', marginBottom: 8 }}>FAQ</div>
            <h2 className="serif" style={{ fontSize: 32, color: '#1a1917', letterSpacing: '-0.01em', marginBottom: '2rem' }}>
              Questions I get asked a lot.
            </h2>
            <div>
              {faqs.map((f, i) => <FAQItem key={i} item={f} />)}
              <div style={{ borderTop: '0.5px solid #E0DDD5' }} />
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ borderTop: '0.5px solid #E0DDD5', padding: '4rem 2.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <h2 className="serif" style={{ fontSize: 34, letterSpacing: '-0.02em', marginBottom: 12, color: '#1a1917' }}>
              Ready to get started?
            </h2>
            <p style={{ fontSize: 15, color: '#6B6860', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 300 }}>
              Tell me about your project and I'll tell you how I'd approach it.
            </p>
            <Link to="/contact" className="cta-btn">Start a conversation</Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
