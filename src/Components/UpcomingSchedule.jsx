import React from 'react';
import '../styles/UpcomingSchedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import appointmentData from '../Data/appointmentData';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>
      
      <div className="schedule-content">
        {appointmentData.upcomingSchedule.map(daySchedule => (
          <div key={daySchedule.id} className="day-schedule">
            <h3 className="day-title">On {daySchedule.day}</h3>
            
            <div className="day-appointments">
              {daySchedule.appointments.map(appointment => (
                <SimpleAppointmentCard 
                  key={appointment.id} 
                  appointment={appointment} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
