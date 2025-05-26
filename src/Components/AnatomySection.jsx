import React from 'react';
import '../styles/AnatomySection.css';
import healthData from '../Data/healthData';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h2 className="section-title">Body Status</h2>
      
      <div className="anatomy-visualization">
        <div className="human-body-container">
          {/* Placeholder for human body illustration */}
          <div className="human-body-placeholder">
            <div className="body-silhouette"></div>
            
            {/* Health indicators positioned on the body */}
            {healthData.anatomyParts.map(part => (
              <div 
                key={part.id}
                className={`health-indicator ${part.statusColor}`}
                style={{
                  top: part.position.top,
                  left: part.position.left
                }}
              >
                <span className="indicator-dot"></span>
                <div className="indicator-label">
                  <span className="part-name">{part.name}</span>
                  <span className="part-status">{part.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
