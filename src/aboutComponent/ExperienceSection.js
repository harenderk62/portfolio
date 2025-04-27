// src/aboutComponent/ExperienceSection.js
import React from 'react';
import ExpCard from '../Components/expCard';

const calculateTotalDuration = (positions) => {
  // This is a simplified calculation - you might need more precise logic
  return positions.reduce((total, pos) => {
    const match = pos.duration.match(/(\d+)\s*(yr|mos)/);
    if (!match) return total;
    
    const value = parseInt(match[1]);
    const unit = match[2];
    
    return unit === 'yr' ? total + value * 12 : total + value;
  }, 0);
};

const formatDuration = (months) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  return [
    years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '',
    remainingMonths > 0 ? `${remainingMonths} mos` : ''
  ].filter(Boolean).join(' ');
};

const ExperienceSection = ({ experienceData }) => {
  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((company, index) => {
          const totalMonths = calculateTotalDuration(company.positions);
          const totalDuration = formatDuration(totalMonths);
          const showTimeline = company.positions.length > 1;
          
          return (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="company-card">
                  <div className="company-header">
                    <img className="company-logo" src={company.img} alt={`${company.company} logo`} />
                    <div className="company-info">
                      <h3>{company.company}</h3>
                      <p>{company.type} · {totalDuration}</p>
                      <p>{company.location}</p>
                    </div>
                  </div>
                  
                  <div className={`positions-container ${showTimeline ? 'with-timeline' : ''}`}>
                    {company.positions.map((position, posIndex) => (
                      <ExpCard
                        key={posIndex}
                        position={position.title}
                        from={position.from}
                        to={position.to}
                        duration={position.duration}
                        skills={position.skills}
                        isLast={posIndex === company.positions.length - 1}
                        showConnector={showTimeline && !position.isLast}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;