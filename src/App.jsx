import React from 'react';
import './styles/App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
}

export default App;
