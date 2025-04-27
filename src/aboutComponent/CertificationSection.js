import React from 'react';
import CertiCard from '../Components/certiCard';

const CertificationSection = ({ certificationData, onShowAllClick }) => {
  // Sort by date and get latest 3
  const latestCertifications = [...certificationData]
    .sort((a, b) => new Date(b.issued) - new Date(a.issued))
    .slice(0, 3);

  return (
    <div className="certification-container">
      <h2 className="section-title">Licenses & Certifications</h2>
      <div className="certification-grid">
        {latestCertifications.map((item, index) => (
          <CertiCard
            key={index}
            img={item.img}
            Source={item.Source}
            title={item.title}
            issued={item.issued}
            link={item.link}
          />
        ))}
      </div>
      {certificationData.length > 3 && (
        <button className="view-all-btn" onClick={onShowAllClick}>
          View All Certifications <i className="fas fa-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export default CertificationSection;