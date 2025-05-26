
import '../styles/HealthStatusCards.css';
import healthData from '../Data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      <h2 className="section-title">Health Status</h2>
      
      <div className="status-cards-container">
        {healthData.healthStatusCards.map(card => (
          <div key={card.id} className="status-card">
            <div className="status-card-header">
              <h3 className="card-title">{card.title}</h3>
              <span className="card-date">{card.date}</span>
            </div>
            
            <div className="status-indicator">
              <span className={`status-dot ${card.statusColor}`}></span>
              <span className="status-text">{card.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards;
