import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button'; // Assuming this component exists

// --- Dummy Menu Component for visualization (Unchanged) ---
const DummyDropdownMenu = ({ name, onClose }) => {
    const menuRef = useRef(null);

    // Click outside to close logic
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

    return (
        <div 
            ref={menuRef} 
            className="absolute top-0 left-0 mt-10 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-3"
        >
            <p className="text-sm font-semibold text-gray-800 mb-2">{name} Details</p>
            <a href="#" className="block text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100">
                View Recent
            </a>
            <a href="#" className="block text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100">
                Manage {name}
            </a>
        </div>
    );
};
// --- AppSwitcherMenu (You would include its full definition here) ---
const AppSwitcherMenu = ({ onClose }) => {
    const menuRef = useRef(null);
    const navigate = useNavigate(); 
    const location = useLocation();

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
    
    // Mock Data (Assuming it's available)
    const APP_ITEMS = [
        { name: 'Atlassian Home', iconColor: 'bg-purple-600', iconShape: 'A', path: '/app/home' },
        { name: 'Jira', iconColor: 'bg-indigo-600', iconShape: 'J', path: '/app/jira' },
    ];
    const RECOMMENDED_ITEMS = [
        { name: 'Confluence', description: 'Document collaboration', iconColor: 'bg-red-500', iconShape: 'C', path: '/app/confluence' },
    ];
    const MORE_ITEM = { name: 'More products', description: 'Explore more apps', iconColor: 'bg-gray-400', iconShape: '...', path: '/app/more' };
    
    const MenuItem = ({ name, description, iconColor, iconShape, path }) => (
        // FIX: Using Link to navigate on item click
        <Link to={path} onClick={onClose} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition duration-100">
            <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm ${iconColor}`}>
                    {typeof iconShape === 'string' ? <span className="text-white">{iconShape}</span> : iconShape}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    {description && <p className="text-xs text-gray-500">{description}</p>}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
        </Link>
    );

    return (
        <div ref={menuRef} className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 z-50 p-4">
            
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Your Apps</h4>
            <div className="space-y-1 border-b pb-4 mb-4">
                {APP_ITEMS.map(item => (<MenuItem key={item.name} {...item} onClose={onClose} />))}
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Recommended for your team</h4>
            <div className="space-y-1 border-b pb-4 mb-4">
                {RECOMMENDED_ITEMS.map(item => (<MenuItem key={item.name} {...item} isRecommended={true} onClose={onClose} />))}
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">More</h4>
            <MenuItem {...MORE_ITEM} onClose={onClose} />
            
            <div className="mt-4">
                <button className="w-full bg-gray-100 text-gray-700 border border-gray-300 py-1.5 rounded-md text-sm hover:bg-gray-200">
                    Manage list
                </button>
            </div>
        </div>
    );
};
// --- End AppSwitcherMenu ---


// --- Main Header Component ---
const Header = ({ userInitials }) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // State to manage which dropdown is open (e.g., 'projects', 'filters', 'none')
    const [openMenu, setOpenMenu] = useState('none');

    // Array of navigation items for the header bar
    const headerNavItems = [
        { name: 'Your work', path: '/your-work', type: 'simple' },
        { name: 'Projects', path: '/projects', type: 'projects' }, // Complex menu
        { name: 'Filters', path: '/filters', type: 'dummy' },
        { name: 'Dashboards', path: '/dashboards', type: 'dummy' },
        { name: 'Teams', path: '/teams', type: 'dummy' },
        { name: 'Plans', path: '/plans', type: 'dummy' },
        { name: 'Apps', path: '/apps', type: 'dummy' },
    ];
    
    // Function to check if a link is active (for header styling)
    const isActive = (path) => location.pathname.includes(path) && path !== '/'; 

    const handleCreateAction = () => {
        navigate('/products/add'); // Navigates to the Add Product page
    };
    
    // FIX: Function to handle the click on any main navigation link
    const handleNavClick = (e, item) => {
        // Prevent default navigation for all menu items
        e.preventDefault();

        // Toggle the menu state based on the item type
        setOpenMenu(openMenu === item.type ? 'none' : item.type);
    };

    // Function to render the correct dropdown menu based on state
    const renderDropdown = () => {
        if (openMenu === 'projects') {
            return <AppSwitcherMenu onClose={() => setOpenMenu('none')} />;
        }
        // Render a dummy menu for the other links to show the effect
        const item = headerNavItems.find(i => i.type === openMenu);
        if (item) {
             return <DummyDropdownMenu name={item.name} onClose={() => setOpenMenu('none')} />;
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
                
                {/* Header Navigation (Desktop view) */}
                <nav className="hidden md:flex space-x-4 text-sm text-gray-700 relative">
                    {headerNavItems.map(item => {
                        const isMenuTrigger = item.type !== 'simple'; // All except 'Your work' are triggers
                        const isOpen = openMenu === item.type;
                        
                        return (
                            <div key={item.name} className="relative">
                                {/* Trigger element: Button or <a> with onClick handler */}
                                <a 
                                    href={isMenuTrigger ? "#" : item.path} // Use # for menu triggers
                                    onClick={isMenuTrigger ? (e) => handleNavClick(e, item) : undefined}
                                    className={`py-1 px-2 rounded-md flex items-center transition-colors 
                                                ${isActive(item.path) || isOpen ? 'text-blue-600 bg-blue-50/50' : 'hover:text-blue-600'}`}
                                >
                                    {item.name}
                                    {/* Show dropdown arrow for ALL links */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                
                                {/* Render Menu below the active link */}
                                {isOpen && renderDropdown()}
                            </div>
                        );
                    })}
                </nav>
            </div>

            {/* Right side controls */}
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