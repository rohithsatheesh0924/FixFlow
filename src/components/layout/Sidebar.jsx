import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ projectName }) => {
    // List of issue filters to display in the project section
    const issueFilters = [
        { name: 'All issues', href: '#all' },
        { name: 'My open issues', href: '#my-open' },
        { name: 'Reported by me', href: '/reports' }, 
        { name: 'Open issues', href: '#open' },
        { name: 'Done issues', href: '#done' },
        { name: 'Viewed recently', href: '#viewed' },
        { name: 'Resolved recently', href: '#resolved' },
        { name: 'Updated recently', href: '#updated' },
    ];
    
    // Project icon component matching the design
    const ProjectIcon = () => (
        <div className="w-8 h-8 bg-purple-200 rounded-md flex items-center justify-center text-sm text-purple-800 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-600">
                <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm-1.5 15a.75.75 0 01-1.5 0V8a.75.75 0 011.5 0v9z"/>
                <path d="M12.5 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            </svg>
        </div>
    );

    const handleCreateProject = () => {
        console.log("Action: Launching modal/form for new project creation.");
    };

    return (
        <div className="w-56 bg-white border-r border-gray-200 h-screen sticky top-0 p-4 flex flex-col justify-between overflow-y-auto relative">
            <div>
                {/* Active Project Title and Icon - NOW WRAPPED IN LINK TO DASHBOARD */}
                <Link to="/dashboard" className="mb-6 flex items-center space-x-3 pb-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 rounded-md p-1 -mx-1 transition duration-100">
                    <ProjectIcon />
                    <span className="text-base font-semibold text-gray-900">{projectName}</span>
                </Link>

                {/* Issues Filter Section */}
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Issues</h4>
                <nav className="space-y-1 pb-4 mb-4 border-b border-gray-200">
                    {issueFilters.map(item => (
                        <Link 
                            key={item.name} 
                            to={item.href}
                            className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Additional Links */}
                <Link to="/filters" className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100 mb-2">
                    View all filters
                </Link>
                
                <Link to="/projects" className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100">
                    View all projects
                </Link>
            </div>
            
            {/* Footer */}
            <div className="text-xs text-gray-500 pt-4">
                <p className="mb-1">You're in a team-managed project</p>
                <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" />
                    </svg>
                    <span>Give feedback</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
