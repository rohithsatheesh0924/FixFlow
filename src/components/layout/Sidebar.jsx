import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = ({ projectName = "FixFlow Project" }) => {
    // List of issue filters
    const issueFilters = [
        { name: 'All issues', href: '/issues/all' },
        { name: 'My open issues', href: '/issues/my-open' },
        { name: 'Reported by me', href: '/issues/reported' }, 
        { name: 'Open issues', href: '/issues/open' },
        { name: 'Done issues', href: '/issues/done' },
        { name: 'Viewed recently', href: '/issues/recent' },
    ];
    
    // Classic Jira-style Project Icon
    const ProjectIcon = () => (
        <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm">
            FF
        </div>
    );

    return (
        <aside className="w-64 bg-[#F4F5F7] border-r border-gray-200 h-full flex flex-col overflow-hidden">
            {/* Top Section: Project Info */}
            <div className="p-4 pt-6">
                <Link to="/dashboard" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200 transition-colors duration-100 group">
                    <ProjectIcon />
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-bold text-gray-800 truncate">{projectName}</span>
                        <span className="text-[11px] text-gray-500 font-medium">Software project</span>
                    </div>
                </Link>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto px-3">
                <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider px-3 mb-2 mt-4">
                    Issues and Filters
                </h4>
                
                <nav className="space-y-[2px]">
                    {issueFilters.map(item => (
                        <NavLink 
                            key={item.name} 
                            to={item.href}
                            className={({ isActive }) => `
                                flex items-center px-3 py-2 text-sm rounded transition-all duration-100
                                ${isActive 
                                    ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-700 -ml-3 pl-6' 
                                    : 'text-gray-700 hover:bg-gray-200'}
                            `}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-gray-200">
                    <Link to="/filters" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded">
                        View all filters
                    </Link>
                    <Link to="/projects" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-200 rounded">
                        View all projects
                    </Link>
                </div>
            </div>
            
            {/* Footer Section */}
            <div className="p-4 border-t border-gray-200 bg-[#EBECF0]/50">
                <p className="text-[10px] text-gray-500 font-medium mb-2 uppercase tracking-tight">
                    Team-managed project
                </p>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold">Give feedback</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;