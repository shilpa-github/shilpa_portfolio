import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navStyle = {
    background: 'rgba(13, 32, 32, 0.8)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    color: '#ffffff',
    letterSpacing: '-0.02em',
    cursor: 'pointer'
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    alignItems: 'center'
  };

  const navLinkStyle = {
    color: '#a1a1aa',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    position: 'relative',
    fontWeight: '500',
    background: 'transparent',
    cursor: 'pointer'
  };

  const mobileMenuStyle = {
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '1.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    gap: '1rem',
    borderRadius: '0 0 12px 12px'
  };

  const hamburgerStyle = {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    gap: '4px',
    padding: '0.5rem',
    borderRadius: '6px',
    background: 'rgba(207, 176, 176, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const hamburgerLineStyle = {
    width: '24px',
    height: '2px',
    background: '#a1a1aa',
    transition: 'all 0.3s ease',
    borderRadius: '1px'
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'skills', label: 'Skills', path: '/skills' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={navStyle}>
      <div style={navContainerStyle}>
        <Link to="/" style={logoStyle} className="text-gradient fade-in">
          SPM
        </Link>
        {/* Desktop Navigation */}
        <ul style={navLinksStyle} className="slide-in-right">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                style={navLinkStyle}
                onMouseEnter={e => {
                  e.target.style.color = '#3b82f6';
                  e.target.style.background = 'rgba(217, 224, 235, 0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#a1a1aa';
                  e.target.style.background = 'transparent';
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div
          style={hamburgerStyle}
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu card-hover"
        >
          <div style={hamburgerLineStyle}></div>
          <div style={hamburgerLineStyle}></div>
          <div style={hamburgerLineStyle}></div>
        </div>
        {/* Mobile Navigation */}
        <div style={mobileMenuStyle}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={navLinkStyle}
              className="card-hover"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu {
            display: flex !important;
          }
          ul[style*="display: flex"] {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 