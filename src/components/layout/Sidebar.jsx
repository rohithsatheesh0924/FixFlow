import React, { useState, useRef, useEffect } from 'react';
// Assuming ProjectIssuesMenu is a component in the same file or imported

// --- ProjectIssuesMenu Component (Remains Unchanged) ---
const ProjectIssuesMenu = ({ projectName, onClose }) => {
    const menuRef = useRef(null);

    // Ensure menu closes when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click happened outside the menu container, close it.
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };
        // Use a slight delay to ensure the click event has fully propagated
        setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const issues = [
        'All issues', 'My open issues', 'Reported by me', 'Open issues',
        'Done issues', 'Viewed recently', 'Resolved recently', 'Updated recently',
    ];

    const ProjectIcon = () => (
        <div className="w-6 h-6 bg-purple-200 rounded-md flex items-center justify-center text-sm text-purple-800 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#a78bfa" className="w-5 h-5">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" clipRule="evenodd" />
            </svg>
        </div>
    );

    return (
        <div 
            ref={menuRef} 
            className="ProjectIssuesMenu absolute top-0 left-full ml-1 w-64 bg-white rounded-lg shadow-2xl border border-gray-100 z-40 p-4"
        >
            <div className="flex items-center space-x-3 pb-3 mb-4 border-b border-gray-200">
                <ProjectIcon />
                <span className="text-base font-semibold text-gray-900">{projectName}</span>
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Issues</h4>
            <nav className="space-y-1 pb-4 mb-4 border-b border-gray-200">
                {issues.map(item => (
                    <a 
                        key={item} 
                        href="#" 
                        className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100"
                    >
                        {item}
                    </a>
                ))}
            </nav>

            <a href="#" className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100 mb-4">
                View all filters
            </a>
            
            <a href="#" className="block text-sm text-gray-700 p-2 rounded-lg hover:bg-blue-50 transition duration-100">
                View all projects
            </a>
        </div>
    );
};
// --- End ProjectIssuesMenu Component ---


// --- Sidebar Component (Updated) ---
const Sidebar = ({ projectName }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Handler for creating a new project
    const handleCreateProject = () => {
        // Here, you would implement the logic:
        // 1. Collect basic project details (e.g., Project Name, Key)
        // 2. Open a modal or navigate to a dedicated creation page (e.g., using useNavigate('/projects/create'))
        console.log("Action: Launching modal/form for new project creation with basic details.");
        alert("Simulating creation of a new project with basic details.");
    };
    
    // Simple function to toggle the ProjectIssuesMenu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="w-56 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 p-4 flex flex-col justify-between overflow-y-auto relative">
            <div>
                {/* 1. CREATE PROJECT BUTTON (New Specification) */}
                <div className="mb-6">
                    <button
                        className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        onClick={handleCreateProject}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 0110 3z" clipRule="evenodd" />
                        </svg>
                        <span>Create Project</span>
                    </button>
                </div>
                
                <h3 className="text-xs font-semibold uppercase text-gray-500 mb-2">Recent</h3>

                {/* 2. RECENT PROJECT/ISSUES MENU TRIGGER */}
                <div className="relative">
                    <div 
                        className="flex items-center space-x-2 bg-blue-100/50 p-2 rounded-lg text-gray-900 border border-blue-200 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <div className="w-4 h-4 bg-purple-200 rounded-sm flex items-center justify-center text-xs text-purple-800 font-bold">L</div>
                        <span className="text-sm font-medium">{projectName}</span>
                    </div>
                    <a href="#" className="text-xs text-gray-600 mt-3 block hover:underline">View all projects</a>
                    
                    {/* Render the menu if state is true */}
                    {isMenuOpen && <ProjectIssuesMenu projectName={projectName} onClose={() => setIsMenuOpen(false)} />}
                </div>
            </div>
            
            {/* 3. Footer Feedback */}
            <div className="text-xs text-gray-500 mt-8 border-t border-gray-200 pt-4">
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