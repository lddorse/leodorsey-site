import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setAtTop(currentScroll <= 10);
      if (currentScroll <= 0) {
        setNavbarVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const navLink = (to, label) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className="nav-link-item"
        style={{
          fontSize: 14,
          fontWeight: isActive ? 500 : 400,
          color: isActive ? '#1a1917' : '#6B6860',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
          fontFamily: "'DM Sans', sans-serif",
          position: 'relative',
          paddingBottom: 2,
        }}
      >
        {label}
        {isActive && (
          <span style={{
            position: 'absolute',
            bottom: 0, left: 0,
            width: '100%', height: '1px',
            background: '#B87A5A',
          }} />
        )}
      </Link>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #B87A5A;
          transition: width 0.25s ease;
        }
        .nav-link-item:hover { color: #1a1917 !important; }
        .nav-link-item:hover::after { width: 100%; }
        .nav-cta {
          font-size: 13px;
          font-weight: 500;
          color: #1a1917;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
        }
        .nav-cta:hover { color: #B87A5A; }
        .nav-cta .arrow { display: inline-block; transition: transform 0.2s ease; }
        .nav-cta:hover .arrow { transform: translateX(3px); }

        @media (max-width: 600px) {
          .nav-links { display: none !important; }
        }
      `}</style>

      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transform: navbarVisible ? 'translateY(0)' : 'translateY(-100%)',
        borderBottom: atTop ? '0.5px solid transparent' : '0.5px solid #E0DDD5',
        background: atTop ? 'transparent' : 'rgba(247, 244, 239, 0.94)',
        backdropFilter: atTop ? 'none' : 'blur(14px)',
        WebkitBackdropFilter: atTop ? 'none' : 'blur(14px)',
        transition: 'transform 0.3s ease, background 0.4s ease, border-color 0.4s ease',
        height: 64,
        display: 'flex', alignItems: 'center',
      }}>
        <nav style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <Link to="/" style={{
            fontSize: 15,
            fontWeight: 500,
            color: '#1a1917',
            textDecoration: 'none',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '-0.015em',
          }}>
            Leo
          </Link>

          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLink('/work', 'Work')}
            {navLink('/services', 'Services')}
            {navLink('/about', 'About')}
            {navLink('/contact', 'Contact')}
          </div>

          <Link to="/contact" className="nav-cta">
            Let's talk <span className="arrow">→</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
