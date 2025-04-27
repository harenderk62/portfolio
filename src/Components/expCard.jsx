// src/Components/expCard.js
import React from 'react';

const ExpCard = ({ position, from, to, duration, skills, showConnector }) => {
  // Split skills into chunks of 7 for table-like display
  const skillChunks = [];
  for (let i = 0; i < skills.length; i += 7) {
    skillChunks.push(skills.slice(i, i + 7));
  }

  return (
    <div className={`position-card ${showConnector ? 'with-connector' : ''}`}>
      <div className="position-header">
        <h4>{position}</h4>
        <p className="duration">
          {from} - {to} · {duration}
        </p>
      </div>
      
      <div className="skills-section">
        {skillChunks.map((chunk, index) => (
          <div key={index} className="skills-row">
            {chunk.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;