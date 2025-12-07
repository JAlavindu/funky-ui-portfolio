import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      // Removed initial y: -100 to ensure visibility
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(10, 25, 47, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
        JD<span style={{ color: '#00d9ff' }}>.</span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <button 
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'white', 
                fontSize: '1rem', 
                cursor: 'pointer',
                opacity: 0.8,
                transition: 'opacity 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
