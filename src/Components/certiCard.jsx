import React from 'react';

const CertiCard = ({ img, Source, title, issued, link }) => {
  const redirectHandler = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <div className="certi-card">
      <div className="card-content">
        <div className="card-header">
          <img className="provider-logo" src={img} alt={`${Source} logo`} />
          <div className="provider-info">
            <span className="provider-name">{Source}</span>
            <span className="issue-date">{issued}</span>
          </div>
        </div>
        <h3 className="certi-title">{title}</h3>
        <button className="credential-btn" onClick={redirectHandler}>
          Show Credential <i className="fas fa-external-link-alt"></i>
        </button>
      </div>
      <div className="card-ribbon"></div>
    </div>
  );
};

export default CertiCard;