// src/Components/EduCard.js
import React from 'react';

const EduCard = ({ img, institution, degree, field, from, to, skills }) => {
  return (
    <div className="edu-card">
      <div className="edu-header">
        <img src={img} alt={`${institution} logo`} className="edu-logo" />
        <div className="edu-info">
          <h3 className="institution">{institution}</h3>
          <p className="degree">{degree}</p>
          <p className="field">{field}</p>
          <p className="duration">{from} - {to}</p>
        </div>
      </div>
      {skills && skills.length > 0 && (
        <div className="edu-skills">
          <div className="skills-icon">☞</div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EduCard;