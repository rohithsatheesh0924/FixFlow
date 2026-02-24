import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// --- App Switcher Menu (The Workspace Drawer) ---
const AppSwitcherMenu = ({ onClose }) => {
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const apps = [
    { name: 'FixFlow Pro', color: 'bg-violet-600', icon: 'F', path: '/issues/all' },
    { name: 'Jira Indigo', color: 'bg-indigo-600', icon: 'J', path: '#' },
    { name: 'Confluence', color: 'bg-purple-500', icon: 'C', path: '#' },
  ];

  return (
    <div ref={menuRef} className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-violet-100 z-50 p-4 animate-in fade-in zoom-in duration-150">
      <h4 className="text-[10px] font-black text-violet-400 uppercase mb-3 px-1 tracking-[0.2em]">Workspace</h4>
      <div className="space-y-1">
        {apps.map(app => (
          <Link 
            key={app.name} 
            to={app.path} 
            onClick={onClose}
            className="w-full flex items-center p-3 hover:bg-violet-50 rounded-lg transition-colors group"
          >
            <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-white shadow-sm ${app.color}`}>
              {app.icon}
            </div>
            <span className="ml-3 text-sm font-semibold text-gray-800 group-hover:text-violet-700">{app.name}</span>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full py-2 text-xs font-bold text-violet-600 hover:bg-violet-50 rounded-lg border border-violet-200 uppercase tracking-wider transition-all">
          Manage Workspace
        </button>
      </div>
    </div>
  );
};

// --- Nav Dropdown Component ---
const NavDropdown = ({ name, path, onClose }) => {
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  return (
    <div ref={menuRef} className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-violet-100 z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="px-4 py-2 border-b border-violet-50">
        <p className="text-[10px] font-black text-violet-400 uppercase tracking-widest">{name}</p>
      </div>
      <div className="py-1">
        <Link to={path} onClick={onClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 font-medium">
          View all {name}
        </Link>
        {name === "Projects" && (
          <Link to="/projects/recent" onClick={onClose} className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 font-medium">
            Recent Projects
          </Link>
        )}
        <div className="my-1 border-t border-violet-50"></div>
        <button className="w-full text-left px-4 py-2 text-sm text-violet-600 font-bold hover:bg-violet-50">
          Create {name.slice(0, -1)}
        </button>
      </div>
    </div>
  );
};

// --- Main Header ---
const Header = ({ userInitials = "JD" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const navItems = [
    { name: 'Your work', path: '/your-work', type: 'simple' },
    { name: 'Projects', path: '/projects', type: 'dropdown' },
    { name: 'Filters', path: '/filters', type: 'dropdown' },
    { name: 'Dashboards', path: '/dashboards', type: 'dropdown' },
    { name: 'Teams', path: '/teams', type: 'dropdown' },
    { name: 'Apps', path: '/apps', type: 'appSwitcher' },
  ];

  return (
    <header className="flex items-center justify-between px-6 h-16 border-b border-violet-100 bg-white sticky top-0 z-40 shadow-sm shadow-violet-500/5">
      <div className="flex items-center space-x-6 h-full">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg shadow-violet-200 group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-black text-violet-950 tracking-tight">Fix<span className="text-violet-600">Flow</span></span>
        </Link>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center h-full space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative h-full flex items-center">
              <button
                onClick={() => {
                  if (item.type === 'simple') navigate(item.path);
                  else setOpenMenu(openMenu === item.name ? null : item.name);
                }}
                className={`flex items-center px-4 h-[70%] rounded-lg text-sm font-semibold transition-all ${
                  location.pathname.startsWith(item.path) || openMenu === item.name
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                    : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50'
                }`}
              >
                {item.name}
                {item.type !== 'simple' && (
                  <svg className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-200 ${openMenu === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* Conditional Menu Rendering */}
              {openMenu === item.name && (
                item.type === 'appSwitcher' 
                  ? <AppSwitcherMenu onClose={() => setOpenMenu(null)} />
                  : <NavDropdown name={item.name} path={item.path} onClose={() => setOpenMenu(null)} />
              )}
            </div>
          ))}
        </nav>

        {/* Global Create Button */}
        <button 
          onClick={() => navigate('/create-issue')}
          className="ml-2 bg-violet-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-violet-700 active:scale-95 transition-all shadow-lg shadow-violet-100"
        >
          Create
        </button>
      </div>

      {/* Right Tools Section */}
      <div className="flex items-center space-x-5">
        <div className="relative hidden md:block group">
           <input 
             type="text" 
             placeholder="Quick search..." 
             className="pl-10 pr-4 py-2 border border-violet-100 bg-violet-50/30 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-white w-56 transition-all"
           />
           <svg className="w-4 h-4 absolute left-3.5 top-2.5 text-violet-400 group-focus-within:text-violet-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" strokeLinecap="round"/>
           </svg>
        </div>
        
        {/* User Profile Avatar */}
        <div className="w-9 h-9 rounded-full bg-violet-900 border-2 border-violet-200 text-white flex items-center justify-center text-xs font-black cursor-pointer hover:ring-4 hover:ring-violet-50 transition-all shadow-sm">
          {userInitials}
        </div>
      </div>
    </header>
  );
};

export default Header;