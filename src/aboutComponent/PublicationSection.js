import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const PublicationSection = () => {
  return (
    <div className="publications-container">
      <h2 className="section-title">Publications</h2>
      <div className="publication-card">
        <div className="publication-header">
          <div className="publication-icon">
            <FaFilePdf />
          </div>
          <h3 className="publication-title">
            Extractive Text Summarization Using Natural Language Processing (NLP)
          </h3>
        </div>
        <div className="publication-content">
          <p className="publication-abstract">
            My research paper during my BTech studies primarily focused on the
            application of Natural Language Processing (NLP) techniques for
            extractive text summarization. This research aimed to develop a
            streamlined approach that efficiently summarizes large volumes of
            textual data.
          </p>
          <div className="publication-highlights">
            <div className="highlight-item">
              <span className="highlight-bullet">▹</span>
              <span>Developed NLP techniques for text summarization</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-bullet">▹</span>
              <span>Improved data accessibility through automated summarization</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-bullet">▹</span>
              <span>Published in IEEE Xplore (2022)</span>
            </div>
          </div>
          <button className="publication-link">
            Read Publication <i className="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicationSection;