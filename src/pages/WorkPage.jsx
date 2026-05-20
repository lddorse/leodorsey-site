import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import Footer from '../components/Footer';

const projects = [
  {
    id: 'sacred',
    type: 'E-commerce',
    title: 'Sacred Prints',
    desc: 'Custom storefront built around a non-technical client\'s real workflow. Stripe payments, Google Sheets inventory management, and Vercel serverless functions — no platform fees, no lock-in.',
    stack: ['HTML/CSS/JS', 'Stripe', 'Sheets API', 'Vercel'],
    url: 'https://sacred-prints.com',
    bg: '#FFF8F5', border: '#F5C4B3',
    tagBg: '#FAECE7', tagColor: '#993C1D',
    titleColor: '#7A2E13', descColor: '#6B6860',
    pillBorder: '#F0997B', pillColor: '#D85A30',
    featured: true,
  },
  {
    id: 'pedestrian',
    type: 'Full-stack app',
    title: 'Danville Pedestrian Club',
    desc: 'Member management, route logging, and event tracking for a local walking club. Built with real auth and a real database — designed for non-technical end users.',
    stack: ['Next.js', 'Supabase', 'Vercel', 'Tailwind'],
    url: 'https://danville-pedestrian-club.vercel.app',
    bg: '#EAF3DE', border: '#C0DD97',
    tagBg: '#D5EAB7', tagColor: '#27500A',
    titleColor: '#27500A', descColor: '#3D6020',
    pillBorder: '#97C459', pillColor: '#3B6D11',
  },
  {
    id: 'ourbar',
    type: 'Fundraising',
    title: 'Our Bar',
    desc: 'Revival landing page for a community bar in Penfield, IL. Warm, analog aesthetic built to convert visitors into supporters.',
    stack: ['HTML/CSS/JS', 'Vercel'],
    url: 'https://ourbarpenfield.com',
    bg: '#FAEEDA', border: '#FAC775',
    tagBg: '#F5DFB0', tagColor: '#633806',
    titleColor: '#633806', descColor: '#7A5A30',
    pillBorder: '#EF9F27', pillColor: '#854F0B',
  },
  {
    id: 'obsidian',
    type: 'Interactive',
    title: 'Obsidian',
    desc: 'Retro terminal coffee shop menu concept. Built for atmosphere as much as function — every detail serves the aesthetic.',
    stack: ['React', 'CSS animations'],
    url: 'https://obsidian-nu-coral.vercel.app',
    bg: '#1C1C1A', border: '#2e2e2b',
    tagBg: '#2A2A27', tagColor: '#C5B99A',
    titleColor: '#F2EDD9', descColor: '#8A8678',
    pillBorder: '#444', pillColor: '#8A8678',
    dark: true,
  },
  {
    id: 'elosec',
    type: 'Security / Infrastructure',
    title: 'Elo Sec Platform',
    desc: 'Self-hosted network security and infrastructure monitoring platform running on Raspberry Pi 4. Enterprise-grade cybersecurity implementation on resource-constrained hardware with production-level protection.',
    stack: ['Linux', 'Docker', 'Pi-hole', 'Grafana', 'WireGuard', 'Nginx'],
    url: 'https://elosec.tech',
    bg: '#EEF2F7', border: '#BFD0E8',
    tagBg: '#DDE7F5', tagColor: '#1A3A5C',
    titleColor: '#1A3A5C', descColor: '#4A6080',
    pillBorder: '#7FA8D4', pillColor: '#2A5C8A',
  },
];

function ProjectCard({ project, index }) {
  const ref = useScrollReveal({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className="fade-up"
      style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
        style={{
          background: project.bg,
          border: `0.5px solid ${project.border}`,
          display: 'block',
          textDecoration: 'none',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
          <span style={{
            display: 'inline-block', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: 100,
            background: project.tagBg, color: project.tagColor,
          }}>{project.type}</span>
          <span style={{
            fontSize: 12, color: project.descColor, opacity: 0.6,
            fontFamily: "'DM Sans', sans-serif",
          }}>↗</span>
        </div>

        <h3 className="serif" style={{ fontSize: 24, color: project.titleColor, marginBottom: 8, letterSpacing: '-0.01em' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: project.descColor, marginBottom: 16 }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.stack.map(t => (
            <span key={t} className="stack-pill" style={{ borderColor: project.pillBorder, color: project.pillColor }}>{t}</span>
          ))}
        </div>
      </a>
    </div>
  );
}

export default function WorkPage() {
  const headingRef = useScrollReveal();

  return (
    <div style={{ background: '#F7F4EF', minHeight: '100vh', position: 'relative' }}>
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
              Selected work
            </div>
            <h1 className="serif" style={{
              fontSize: 52, lineHeight: 1.06, letterSpacing: '-0.025em',
              color: '#1a1917', marginBottom: '1rem', maxWidth: 600,
            }}>
              Every project in its own language.
            </h1>
            <p style={{
              fontSize: 16, lineHeight: 1.75, color: '#6B6860',
              fontWeight: 300, maxWidth: 480,
            }}>
              A range of work across e-commerce, full-stack apps, fundraising, interactive experiences, and infrastructure.
            </p>
          </div>
        </div>

        <div style={{ height: '0.5px', background: '#E0DDD5', margin: '0 2.5rem' }} />

        {/* ── PROJECTS GRID ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="work-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ borderTop: '0.5px solid #E0DDD5', padding: '4rem 2.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <h2 className="serif" style={{ fontSize: 32, letterSpacing: '-0.02em', marginBottom: 12, color: '#1a1917' }}>
              Want to be next?
            </h2>
            <p style={{ fontSize: 15, color: '#6B6860', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 300 }}>
              Tell me what you're building and I'll tell you how I'd approach it.
            </p>
            <Link to="/contact" className="cta-btn">Start a conversation</Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
