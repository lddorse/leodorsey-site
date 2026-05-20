const links = [
  { label: 'GitHub', href: 'https://github.com/lddorse' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Resume', href: '/resume' },
];

export default function Footer() {
  return (
    <footer style={{
      padding: '1.5rem 2.5rem',
      borderTop: '0.5px solid #E0DDD5',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <p style={{ fontSize: 12, color: '#9B9890', margin: 0 }}>© 2026 Leo Dorsey</p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: 12, color: '#9B9890', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#1a1917'}
            onMouseLeave={e => e.target.style.color = '#9B9890'}
          >{l.label}</a>
        ))}
      </div>
    </footer>
  );
}
