import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [

    'Python Developer',
    'Full Stack Developer',
    'Web Developer',
    'Data Analyst'
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (isDeleting) {
        if (currentText.length > 0) {
          setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      } else {
        if (currentText.length < currentTitle.length) {
          setTimeout(() => {
            setCurrentText(currentTitle.slice(0, currentText.length + 1));
          }, typingSpeed);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: 'fab fa-linkedin', 
      url: 'https://linkedin.com/in/shilpa-pm',
      tooltip: 'Connect on LinkedIn'
    },
    { 
      name: 'GitHub', 
      icon: 'fab fa-github', 
      url: 'https://github.com/shilpa-github',
      tooltip: 'View GitHub Profile'
    },
    { 
      name: 'Email', 
      icon: 'fas fa-envelope', 
      url: 'mailto:shilpapm795@gmail.com',
      tooltip: 'Send Email'
    }
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: '3rem',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }} className="fade-in">
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#ffffff',
          letterSpacing: '-0.02em'
        }} className="text-gradient">
          Shilpa P M
        </h1>
        
        <div style={{
          fontSize: '2rem',
          fontWeight: '500',
          color: '#3b82f6',
          marginBottom: '2rem',
          minHeight: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} className="slide-in-left">
          <span>{currentText}</span>
          <span style={{
            borderRight: '3px solid #3b82f6',
            animation: 'blink 1s infinite',
            marginLeft: '8px',
            height: '2rem'
          }}></span>
        </div>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#a1a1aa',
          maxWidth: '600px',
          margin: '0 auto 3rem auto',
          lineHeight: '1.7'
        }} className="slide-in-right">
          Passionate about creating innovative solutions through full-stack development 
          and data analysis. Transforming ideas into reality with cutting-edge technology.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '3rem'
        }} className="fade-in">
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
              className="modern-btn"
            >
              View My Work
            </button>
          </Link>
          
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: '2px solidrgb(17, 11, 96)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#ffffff'
              }}
            >
              Learn More
            </button>
          </Link>
        </div>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center'
        }} className="fade-in">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              onClick={() => handleSocialClick(link.url)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#a1a1aa',
                textDecoration: 'none',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              title={link.tooltip}
              className="card-hover"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home; 