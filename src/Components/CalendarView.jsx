import React from 'react';
import '../styles/CalendarView.css';
import calendarData from '../Data/calendarData';

const CalendarView = () => {
  // Helper function to generate calendar grid
  const generateCalendarDays = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add weekday headers
    weekdays.forEach(day => {
      days.push(
        <div key={`header-${day}`} className="calendar-day-header">
          {day}
        </div>
      );
    });
    
    // Add empty cells for days before the 1st of the month (assuming Oct 1 2021 is a Friday)
    for (let i = 0; i < 5; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add actual days
    calendarData.days.forEach(day => {
      const hasAppointment = day.appointments.length > 0;
      
      days.push(
        <div key={`day-${day.day}`} className={`calendar-day ${hasAppointment ? 'has-appointment' : ''}`}>
          <span className="day-number">{day.day}</span>
          
          {hasAppointment && (
            <div className="appointment-times">
              {day.appointments.map((apt, index) => (
                <div key={index} className="appointment-time">{apt.time}</div>
              ))}
            </div>
          )}
        </div>
      );
    });
    
    return days;
  };

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2 className="section-title">{calendarData.month}</h2>
        <div className="calendar-controls">
          <button className="calendar-nav-btn">◀</button>
          <button className="calendar-nav-btn">▶</button>
        </div>
      </div>
      
      <div className="calendar-grid">
        {generateCalendarDays()}
      </div>
      
      <div className="upcoming-appointments">
        <h3 className="subsection-title">Upcoming Appointments</h3>
        
        <div className="appointment-cards">
          {calendarData.upcomingAppointments.map(apt => (
            <div key={apt.id} className="appointment-card">
              <div className="appointment-card-content">
                <h4 className="appointment-title">{apt.title}</h4>
                <p className="appointment-doctor">{apt.doctor}</p>
                <div className="appointment-time-info">
                  <span className="appointment-time">{apt.time}</span>
                  <span className="appointment-date">{apt.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
