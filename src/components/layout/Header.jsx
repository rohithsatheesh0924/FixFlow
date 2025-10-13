import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

// --- App Switcher Menu (Defined globally) ---
const AppSwitcherMenu = ({ onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const APP_ITEMS = [
    { name: 'Atlassian Home', iconColor: 'bg-purple-600', iconShape: 'A' },
    { name: 'Jira', iconColor: 'bg-indigo-600', iconShape: 'J' },
    { name: 'Administrations', iconColor: 'bg-gray-600', iconShape: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
        <path fillRule="evenodd" d="M11.828 2.25c-.965-.224-1.944-.224-2.909 0v.093a2.25 2.25 0 013.938 1.637c.057.433.13.865.214 1.297v1.077c0 1.096.398 2.143 1.117 2.862a5.52 5.52 0 001.09.845 2.25 2.25 0 011.33 2.054v.244a5.25 5.25 0 01-1.071 3.398l-.75.862A1.875 1.875 0 0115 19.349v1.272a1.875 1.875 0 001.875 1.875c.965 0 1.892-.375 2.583-1.032a3.376 3.376 0 00.14-4.832 5.612 5.612 0 00-1.802-2.128c-.689-.472-1.353-.949-1.353-1.827v-1.077c.084-.432.157-.864.214-1.297a2.25 2.25 0 013.938-1.637V8.423a2.25 2.25 0 00-2.454-2.217 2.25 2.25 0 00-2.217 2.454zM11.828 2.25a.75.75 0 00-1.656 0v.093a2.25 2.25 0 013.938 1.637c.057.433.13.865.214 1.297v1.077c0 1.096.398 2.143 1.117 2.862a5.52 5.52 0 001.09.845 2.25 2.25 0 011.33 2.054v.244a5.25 5.25 0 01-1.071 3.398l-.75.862A1.875 1.875 0 0115 19.349v1.272a1.875 1.875 0 001.875 1.875c.965 0 1.892-.375 2.583-1.032a3.376 3.376 0 00.14-4.832 5.612 5.612 0 00-1.802-2.128c-.689-.472-1.353-.949-1.353-1.827v-1.077c.084-.432.157-.864.214-1.297a2.25 2.25 0 013.938-1.637V8.423a2.25 2.25 0 00-2.454-2.217 2.25 2.25 0 00-2.217 2.454zM12 4.5A7.5 7.5 0 004.5 12a.75.75 0 01-1.5 0A9 9 0 0112 3a.75.75 0 010 1.5z" clipRule="evenodd" />
      </svg>
    )},
  ];

  const RECOMMENDED_ITEMS = [
    { name: 'Confluence', description: 'Document collaboration', iconColor: 'bg-red-500', iconShape: 'C' },
    { name: 'Jira Product Discovery', description: 'Prioritize, collaborate, and deliver new i...', iconColor: 'bg-blue-600', iconShape: 'D' },
    { name: 'Jira Service Management', description: 'Collaborative IT service managemnt', iconColor: 'bg-cyan-400', iconShape: 'S' },
    { name: 'More Atlassian products', description: '', iconColor: 'bg-gray-400', iconShape: '...' },
  ];

  const MORE_ITEM = {
    name: 'Confluence',
    description: 'Document collaboration',
    iconColor: 'bg-gray-200',
    iconShape: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700">
        <path fillRule="evenodd" d="M10 1.5a.75.75 0 01.75.75V3h2.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V4.5h-1.75v14.25a.75.75 0 01-1.5 0V4.5h-1.75V3a.75.75 0 01.75-.75H10z" clipRule="evenodd" />
      </svg>
    )
  };

  const MenuItem = ({ name, description, iconColor, iconShape, isRecommended = false }) => (
    <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition duration-100">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm ${iconColor}`}>
          {typeof iconShape === 'string' ? <span className="text-white">{iconShape}</span> : iconShape}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      </div>
      {isRecommended && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
        </svg>
      )}
    </a>
  );

  return (
    <div ref={menuRef} className="absolute top-12 left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 z-50 p-4">
      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Your Apps</h4>
      <div className="space-y-1 border-b pb-4 mb-4">
        {APP_ITEMS.map(item => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>

      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Recommended for your team</h4>
      <div className="space-y-1 border-b pb-4 mb-4">
        {RECOMMENDED_ITEMS.map(item => (
          <MenuItem key={item.name} {...item} isRecommended={true} />
        ))}
      </div>

      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">More</h4>
      <MenuItem {...MORE_ITEM} />

      <div className="mt-4">
        <Button className="w-full bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-gray-300">
          Manage list
        </Button>
      </div>
    </div>
  );
};

// --- Dummy Dropdown Menu for generic links ---
const DummyDropdownMenu = ({ name, onClose }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) onClose();
    };
    setTimeout(() => document.addEventListener('mousedown', handler), 0);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  return (
    <div ref={menuRef} className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-3">
      <p className="text-sm font-semibold text-gray-800 mb-2">{name} Options</p>
      <a href="#" className="block text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100">
        View All {name}
      </a>
      <a href="#" className="block text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100">
        Configure {name}
      </a>
    </div>
  );
};

// --- Main Header Component ---
const Header = ({ userInitials }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Track which menu is open by its name (e.g., 'Filters', 'Dashboards')
  const [openMenu, setOpenMenu] = useState(null);

  const handleCreateAction = () => {
    navigate('/create-project');
  };

  const headerNavItems = [
    { name: 'Your work', path: '/your-work', type: 'simple' },
    { name: 'Projects', path: '/projects', type: 'projects' },
    { name: 'Filters', path: '/filters', type: 'dummy' },
    { name: 'Dashboards', path: '/dashboards', type: 'dummy' },
    { name: 'Teams', path: '/teams', type: 'dummy' },
    { name: 'Plans', path: '/plans', type: 'dummy' },
    { name: 'Apps', path: '/apps', type: 'dummy' },
  ];

  const isActive = (path) => location.pathname.includes(path) && path !== '/';

  const renderDropdown = () => {
    if (openMenu === 'Projects') {
      return <AppSwitcherMenu onClose={() => setOpenMenu(null)} />;
    }
    if (['Filters', 'Dashboards', 'Teams', 'Plans', 'Apps'].includes(openMenu)) {
      return <DummyDropdownMenu name={openMenu} onClose={() => setOpenMenu(null)} />;
    }
    return null;
  };

  return (
    <header className="flex items-center justify-between p-3 border-b border-gray-200 bg-white sticky top-0 z-20 shadow-sm">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
          </svg>
          <span>FixFlow</span>
        </div>

        <nav className="hidden md:flex space-x-4 text-sm text-gray-700 relative">
          {headerNavItems.map(item => {
            const isOpen = openMenu === item.name;
            const isMenuTrigger = item.type !== 'simple';

            const onClickHandler = (e) => {
              if (isMenuTrigger) {
                e.preventDefault();
                setOpenMenu(isOpen ? null : item.name); // Toggle by name
              } else {
                navigate(item.path);
              }
            };

            return (
              <div key={item.name} className="relative">
                <a
                  href={isMenuTrigger ? "#" : item.path}
                  onClick={onClickHandler}
                  className={`py-1 px-2 rounded-md flex items-center transition-colors ${
                    isActive(item.path) || isOpen ? 'text-blue-600 bg-blue-50/50' : 'hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </a>

                {isOpen && renderDropdown()}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center space-x-3">
        <button
          className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-700"
          onClick={handleCreateAction}
        >
          Create
        </button>
        <span className="text-xs font-semibold text-gray-500 border border-gray-300 px-2 py-1 rounded-full">
          30 days left
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-sm">
          {userInitials}
        </div>
      </div>
    </header>
  );
};

export default Header;
