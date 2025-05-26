import React from 'react';
import '../styles/DashboardMainContent.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="main-content">
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <div className="anatomy-container">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <div className="calendar-container">
            <CalendarView />
          </div>
        </div>
        <div className="dashboard-right">
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
