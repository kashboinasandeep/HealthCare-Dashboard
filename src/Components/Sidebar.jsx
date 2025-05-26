
import '../styles/Sidebar.css';
import navigationLinks from '../Data/navigationLinks';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h3>General</h3>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {navigationLinks.map(link => (
              <li key={link.id} className={link.active ? 'active' : ''}>
                <a href="#!">
                  <span className="nav-icon">{getIconForName(link.icon)}</span>
                  <span className="nav-text">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Helper function to return appropriate icon based on name
const getIconForName = (iconName) => {
  switch(iconName) {
    case 'dashboard': return '📊';
    case 'history': return '📜';
    case 'calendar': return '📅';
    case 'appointment': return '🕒';
    case 'statistics': return '📈';
    case 'test': return '🔬';
    case 'chat': return '💬';
    case 'support': return '🛟';
    case 'setting': return '⚙️';
    default: return '📋';
  }
};

export default Sidebar;
