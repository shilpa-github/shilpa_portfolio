import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Drug Dosing System',
      description: 'An innovative system that optimizes drug dosage for improved immune response. This project combines machine learning algorithms with medical data analysis to create personalized dosing recommendations, ensuring better treatment outcomes and reduced side effects.',
      image: '/drug.jpg',
      githubUrl: 'https://github.com/shilpa-github/smart-drug-dosage.git',
      technologies: ['Python', 'Machine Learning', 'Sqllite' ,'Reinforcement Learning']
    },
    {
      id: 2,
      title: 'Bus Reservation System',
      description: 'A comprehensive web-based bus reservation system that streamlines the booking process for passengers. Features include real-time seat availability, online payment integration, booking management, and admin dashboard for route management.',
      image: '/bus.jpg',
      githubUrl: 'https://github.com/shilpa-github/Bus-Reservation-System.git',
      technologies: ['DBMS','Python','Machine Learning']
    },
    {
      id: 3,
      title: 'Fashion Recommendation System',
      description: 'An intelligent fashion recommendation system that suggests personalized clothing and accessories based on user preferences, style analysis, and current trends. Uses collaborative filtering and content-based algorithms.',
      image: '/fashion.jpg',
      githubUrl: 'https://github.com/shilpa-github/Fashion-Recommendation-System.git',
      technologies: ['Python', 'Machine Learning', 'Recommendation Systems', 'Data Science']
    }
  ];

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#3b82f6',
          marginBottom: '3rem',
          textAlign: 'center'
        }} className="fade-in">
          My Projects
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              className={`${index === 0 ? 'slide-in-left' : index === 1 ? 'fade-in' : 'slide-in-right'} card-hover`}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  marginBottom: '1.5rem',
                  border: '2px solid rgba(59, 130, 246, 0.3)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none', textAlign: 'center', color: '#3b82f6', padding: '2rem' }}>
                Project Image Placeholder
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '1rem'
              }}>{project.title}</h3>
              
              <p style={{
                fontSize: '1rem',
                color: '#a1a1aa',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>{project.description}</p>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#3b82f6' }}>Technologies:</strong>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '0.5rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: 'rgba(59, 130, 246, 0.2)',
                        color: '#3b82f6',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#"
                onClick={() => window.open(project.githubUrl, '_blank')}
                style={{
                  padding: '0.8rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  borderRadius: '25px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                className="modern-btn"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 