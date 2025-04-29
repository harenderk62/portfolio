import React from 'react';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';


const AwardsSection = ({awardsData}) => {
  const getIcon = (category) => {
    switch(category) {
      case 'Academic Excellence': return <FaTrophy className="award-icon" />;
      case 'Science & Research': return <FaMedal className="award-icon" />;
      default: return <FaAward className="award-icon" />;
    }
  };

  return (
    <div className="awards-container">
      <h2 className="section-title">Honors & Awards</h2>
      <div className="awards-vertical">
        {awardsData.map((award) => (
          <div key={award.id} className="award-card">
            <div className="award-badge">
              {getIcon(award.category)}
            </div>
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <div className="award-meta">
                <span className="organization">{award.organization}</span>
                <span className="year">{award.year}</span>
              </div>
              <p className="award-description">{award.description}</p>
              <span className="award-category">{award.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;