import React from 'react';

const SkillsSection = ({ skills }) => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-columns">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <div className="card-header">
              <h3 className="category-title">{category}</h3>
            </div>
            <div className="skills-horizontal-list">
              {items.map((skill, index) => (
                <span className="skill-pill" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;