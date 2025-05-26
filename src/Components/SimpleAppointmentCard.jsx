
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-icon">
        {getIconForType(appointment.icon)}
      </div>
      
      <div className="appointment-info">
        <h4 className="appointment-title">{appointment.title}</h4>
        <span className="appointment-time">{appointment.time}</span>
      </div>
    </div>
  );
};

// Helper function to return appropriate icon based on type
const getIconForType = (iconType) => {
  switch(iconType) {
    case 'checkup': return '✓';
    case 'dental': return '🦷';
    case 'eye': return '👁️';
    case 'heart': return '❤️';
    case 'brain': return '🧠';
    default: return '🏥';
  }
};

export default SimpleAppointmentCard;
