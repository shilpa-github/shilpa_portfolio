import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
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
          Get In Touch
        </h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for your message! I will get back to you soon.');
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginBottom: '0.5rem'
            }}>
              Name *
            </label>
            <input
              type="text"
              required
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              placeholder="Enter your name"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginBottom: '0.5rem'
            }}>
              Email *
            </label>
            <input
              type="email"
              required
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: '#3b82f6',
              marginBottom: '0.5rem'
            }}>
              Message *
            </label>
            <textarea
              required
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                transition: 'all 0.3s ease',
                outline: 'none',
                minHeight: '150px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              fontWeight: '600',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            className="modern-btn"
          >
            Send Message
          </button>
        </form>

        
      </div>
    </section>
  );
};

export default Contact; 