
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Healthcare.</h1>
        </div>
        
        <div className="header-search">
          <div className="search-container">
            <i className="search-icon">🔍</i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        
        <div className="header-actions">
          <div className="notification-icon">
            <i>🔔</i>
          </div>
          
          <div className="user-profile">
            <div className="avatar">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            </div>
            <span className="user-name">Sandeep</span>
          </div>
          
          <button className="add-button">+</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
