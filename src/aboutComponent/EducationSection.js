// src/aboutComponent/EducationSection.js
import React from 'react';
import EduCard from '../Components/EduCard';

const EducationSection = ({ educationData }) => {
  return (
    <div className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <EduCard
                img={item.img}
                institution={item.company}
                degree={item.position}
                field={item.type}
                from={item.from}
                to={item.to}
                skills={item.skills}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;