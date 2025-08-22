import React from 'react';

const About = () => {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1000px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '3rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }} className="slide-in-left">
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#3b82f6',
          marginBottom: '3rem',
          textAlign: 'center'
        }} className="fade-in">
          About Me
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem'
          }} className="slide-in-left">
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solidrgb(84, 115, 164)',
                boxShadow: '0 0 30px rgba(173, 227, 159, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none', textAlign: 'center', color: '#3b82f6' }}>
              Profile Image Placeholder
            </div>
            
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg,rgb(59, 216, 64) 0%, #1d4ed8 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
              className="modern-btn"
            >
              📄 Download Resume
            </button>
          </div>

          <div style={{
            background: 'rgba(74, 223, 74, 0.05)',
            borderRadius: '15px',
            padding: '2rem',
            border: '1px solid rgba(226, 228, 233, 0.1)'
          }} className="slide-in-right">
            <div style={{
              fontSize: '1.1rem',
              color: '#a1a1aa',
              lineHeight: '1.8',
              padding: '1.5rem',
              background: 'rgba(229, 232, 238, 0.05)',
              borderRadius: '10px',
            }}>
              I am a passionate and dedicated Computer Science Engineering student with a strong 
              foundation in full-stack development and data analysis. My journey in technology 
              has been driven by curiosity and a desire to create innovative solutions that make 
              a real impact. I specialize in web development using modern frameworks, Python 
              programming for backend systems, and data analysis to extract meaningful insights 
              from complex datasets.
              <br /><br />
              My academic background has provided me with a solid theoretical foundation, while 
              my personal projects have given me hands-on experience in building real-world 
              applications. I'm constantly learning and adapting to new technologies, always 
              eager to take on challenging projects that push my boundaries and help me grow 
              as a developer.
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 