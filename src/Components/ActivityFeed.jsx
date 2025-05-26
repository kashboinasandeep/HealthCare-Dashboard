import React from 'react';
import '../styles/ActivityFeed.css';
import appointmentData from '../Data/appointmentData';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h2 className="section-title">Activity</h2>
      
      <div className="activity-summary">
        <span className="appointment-count">
          {appointmentData.activityData.weeklyAppointments} appointments on this week
        </span>
      </div>
      
      <div className="activity-chart">
        {appointmentData.activityData.activityChart.map((item, index) => (
          <div key={index} className="chart-column">
            <div 
              className="chart-bar" 
              style={{ height: `${item.value}%` }}
            ></div>
            <div className="chart-label">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
