import React from 'react';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const awardsData = [
  {
    id: 1,
    title: "National Standard Examination in Physics (IAPT)",
    description: "Achieved rank 3 within my Center and consistently ranked among the Top 10% of participants",
    year: "2017",
    organization: "Indian Association of Physics Teachers",
    icon: "🏆", // or import an icon component
    category: "Academic Excellence"
  },
  {
    id: 2,
    title: "National Children's Science Congress",
    description: "Represented my school at the regional level and received recognition for an outstanding presentation",
    year: "2016",
    organization: "NCSC",
    icon: "🔬", // or import an icon component
    category: "Science & Research"
  },
  {
    id: 3,
    title: "JEE Mains Top Performer",
    description: "Scored in the top 98 percentile where over 13 lakh students appeared",
    year: "2018",
    organization: "NTA",
    icon: "📚", // or import an icon component
    category: "Academic Excellence"
  },
];

const AwardsSection = () => {
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