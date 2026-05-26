import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

function ScrollRoot({ children }) {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div
      ref={ref}
      id="scroll-root"
      style={{
        height: 'calc(100dvh - 64px)',
        overflowY: 'scroll',
        scrollSnapType: location.pathname === '/' ? 'y mandatory' : 'none',
        WebkitOverflowScrolling: 'touch',
        position: 'fixed',
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollRoot>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ScrollRoot>
    </Router>
  );
}

export default App;
