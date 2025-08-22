import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Django', 'REST APIs','Flask']
    },
    {
      title: 'Database & Tools',
      skills: ['MongoDB', 'MySQL', 'Git/GitHub']
    },
    {
      title: 'Data Analysis',
      skills: ['Python (Pandas)', 'SQL', 'Data Visualization', 'Machine Learning', 'Excel', 'Tableau', 'Power BI']
    }
  ];

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }} className="fade-in">
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }} className="text-gradient">
            My Skills
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#a1a1aa',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease'
            }} className="card-hover slide-in-up">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#3b82f6',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {category.title}
              </h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '20px',
                    color: '#3b82f6',
                    fontWeight: '500',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center'
        }} className="fade-in">
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '2rem'
          }}>
            Additional Skills
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              'Responsive Design', 'UI/UX Design', 'Agile/Scrum', 
              'Problem Solving', 'Team Collaboration', 'API Integration',
              'Performance Optimization', 'Testing & Debugging', 'Version Control',
              'Cross-browser Compatibility', 'SEO Optimization', 'Mobile Development'
            ].map((skill, index) => (
              <div key={index} style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '25px',
                color: '#a1a1aa',
                fontWeight: '500',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }} className="card-hover">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.2) !important;
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills; 