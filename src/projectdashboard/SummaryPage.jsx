import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

// --- Sub-Navigation Bar Component (Integrated for consistency) ---
const SubNavTabs = ({ currentPath, projectName }) => {
    const tabs = [
        { name: 'Summary', path: '/dashboard/summary' },
        { name: 'Board', path: '/dashboard' },
        { name: 'List', path: '/dashboard/list' },
        { name: 'Calendar', path: '/dashboard/calendar' },
        { name: 'Timeline', path: '/dashboard/timeline' },
        { name: 'Approvals', path: '/dashboard/approvals' },
        { name: 'Forms', path: '/forms' },
        { name: 'Pages', path: '/dashboard/pages' },
        { name: 'Attachments', path: '/attachments' },
        { name: 'Issues', path: '/dashboard/issues' },
        { name: 'Reports', path: '/reports' },
        { name: 'Archived Iss', path: '/dashboard/archived' },
    ];

    const isActive = (tabPath) => {
        // This is necessary because both /dashboard and /dashboard/summary might need to highlight 'Summary'
        if (tabPath === '/dashboard/summary') {
            return currentPath.endsWith('/summary');
        }
        if (tabPath === '/dashboard') {
            return currentPath === '/dashboard' || currentPath === '/dashboard/summary';
        }
        return currentPath.startsWith(tabPath);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md mb-6 sticky top-0 z-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center space-x-3 text-2xl font-bold text-gray-900">
                    <div className="w-5 h-5 bg-purple-200 rounded-sm flex items-center justify-center text-sm text-purple-800 font-bold">LP</div>
                    <span>{projectName}</span>
                </h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Project settings</button>
            </div>
            
            <nav className="flex space-x-6 overflow-x-auto border-b border-gray-200 pb-2">
                {tabs.map(tab => (
                    <Link 
                        key={tab.name} 
                        to={tab.path} 
                        className={`
                            whitespace-nowrap text-sm font-medium pb-2 transition duration-150
                            ${isActive(tab.path)
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                            }
                        `}
                    >
                        {tab.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

// --- Helper Components for the Dashboard Cards ---

const MetricCard = ({ icon, count, description, color }) => (
    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4 ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-2xl font-bold text-gray-900">{count}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </div>
);

const SectionHeader = ({ title, linkText, linkUrl = '#' }) => (
    <div className="flex justify-between items-baseline mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <a href={linkUrl} className="text-blue-600 hover:underline text-sm">{linkText}</a>
    </div>
);

// --- Main Page Component ---
const SummaryPage = () => {
    const location = useLocation(); 
    const projectName = 'Landing page'; 
    const userName = 'Sam Lee';

    const metricData = [
        { icon: '0', count: '0', description: 'done in the last 7 days', color: 'bg-green-500' },
        { icon: '12', count: '12', description: 'updated in the last 7 days', color: 'bg-blue-600' },
        { icon: '12', count: '12', description: 'created in the last 7 days', color: 'bg-purple-600' },
        { icon: '1', count: '1', description: 'due in the last 7 days', color: 'bg-red-500' },
    ];
    
    // Mock data for recent activity
    const recentActivity = [
        { user: 'SL', time: '19 minutes ago', text: 'changed the status of', issue: 'UI Design' },
        { user: 'SL', time: '20 minutes ago', text: 'updated the Rank of', issue: 'Creating Wireframe' },
        { user: 'SL', time: '22 minutes ago', text: 'commented on', issue: 'UI Design' },
    ];

    return (
        <div className="pb-8">
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (Sticky) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN SUMMARY CONTENT AREA */}
            <div className="space-y-8">
                
                {/* Greeting and Project Detail Header */}
                <div className="p-4 bg-white rounded-xl shadow-md space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900">Good morning, {userName}</h1>
                    <p className="text-gray-600">Here's where you'll view a summary of {projectName} status, priorities, workload, and more.</p>
                    
                    {/* Project Detail Block */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="font-semibold">Project detail</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                    </div>
                    
                    <div className="flex space-x-6 items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-purple-200 rounded-sm flex items-center justify-center text-xs font-bold text-purple-800">SL</div>
                            <span className="text-sm font-medium">Sam Lee</span>
                        </div>
                        <div className="text-sm text-gray-600">| Project key: LP</div>
                    </div>
                </div>

                {/* Metric Cards Grid */}
                <div className="grid grid-cols-4 gap-4">
                    {metricData.map((data, index) => (
                        <MetricCard key={index} {...data} />
                    ))}
                </div>

                {/* Two-Column Dashboard (Status/Activity vs. Workload/Related) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* LEFT COLUMN: Status and Priority */}
                    <div className="space-y-6">
                        
                        {/* Status Overview */}
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <SectionHeader title="Status overview" linkText="View all items" />
                            <div className="flex space-x-6 items-center">
                                {/* Donut Chart Placeholder */}
                                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-purple-600">
                                    67%
                                </div>
                                {/* Legend */}
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center"><span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>To Do</div>
                                    <div className="flex justify-between items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Concepting</div>
                                    <div className="flex justify-between items-center"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>Design</div>
                                    <div className="flex justify-between items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>Testing</div>
                                    <div className="flex justify-between items-center"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>Launch</div>
                                    <p className="font-bold pt-2 border-t mt-3">Total 12</p>
                                </div>
                            </div>
                        </div>

                        {/* Priority Breakdown */}
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <SectionHeader title="Priority breakdown" linkText="See what your team's been focusing on" />
                            <div className="h-40 bg-gray-100 rounded-lg flex items-end p-2">
                                {/* Bar Chart Placeholder */}
                                <div className="flex items-end justify-around w-full h-full pb-2">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-red-500" style={{ height: '50%' }}></div>
                                        <span className="text-xs mt-1">Highest</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-orange-400" style={{ height: '65%' }}></div>
                                        <span className="text-xs mt-1">High</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-yellow-400" style={{ height: '85%' }}></div>
                                        <span className="text-xs mt-1">Medium</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-blue-500" style={{ height: '70%' }}></div>
                                        <span className="text-xs mt-1">Low</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-gray-400" style={{ height: '30%' }}></div>
                                        <span className="text-xs mt-1">Lowest</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Workload */}
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <SectionHeader title="Team workload" linkText="Re-assign tasks across your team" />
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm">
                                    <span>Unassigned</span>
                                    <div className="w-3/4 bg-gray-200 rounded-full h-2">
                                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                    <span className="font-semibold">8</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-cyan-200"></div>
                                        <span>Sam Lee</span>
                                    </div>
                                    <div className="w-3/4 bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                    <span className="font-semibold">4</span>
                                </div>
                                <div className="text-blue-600 text-sm mt-3 cursor-pointer">Invite teammate</div>
                            </div>
                        </div>
                        
                    </div>

                    {/* RIGHT COLUMN: Activity and Related Projects */}
                    <div className="space-y-6">
                        
                        {/* Recent Activity */}
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <SectionHeader title="Recent activity" linkText="Stay up to date with what's happening across the project." />
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-start space-x-3 text-sm">
                                        <div className="w-6 h-6 rounded-full bg-cyan-200 flex items-center justify-center text-xs font-semibold flex-shrink-0">{activity.user}</div>
                                        <div>
                                            <p className="text-gray-900">
                                                <span className="font-medium">{activity.user}</span> {activity.text} **{activity.issue}**
                                            </p>
                                            <p className="text-xs text-gray-500">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Types of Work (Simple Breakdown) */}
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <SectionHeader title="Types of work" linkText="View all items" />
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-700">Task</span>
                                    <div className="w-1/2 bg-gray-200 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                    <span className="font-semibold">9</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-700">Sub-task</span>
                                    <div className="w-1/2 bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                    <span className="font-semibold">3</span>
                                </div>
                                <div className="text-blue-600 text-sm mt-3 cursor-pointer">Manage types</div>
                            </div>
                        </div>
                        
                        {/* Related Projects */}
                        <div className="p-6 bg-white rounded-xl shadow-md">
                            <SectionHeader title="Related projects" linkText="View all projects" />
                            <div className="flex justify-center pt-4">
                                {/* Illustration Placeholder */}
                                <div className="w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400">
                                        <path d="M12 2A10 10 0 102 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm-1.5 15a.75.75 0 01-1.5 0V8a.75.75 0 011.5 0v9z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4 mt-6">
                                <Button className="bg-blue-600 hover:bg-blue-700 w-auto px-4 text-sm">Create a project</Button>
                                <Button className="bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 w-auto px-4 text-sm">View all projects</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
