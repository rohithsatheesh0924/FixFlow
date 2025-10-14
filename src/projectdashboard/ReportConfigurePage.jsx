import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import SelectDropdown from '../components/ui/SelectDropdown';
import Button from '../components/ui/Button';

// --- Sub-Navigation Bar Component (Reused from Dashboard structure) ---
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
        if (tabPath === '/dashboard') {
            return currentPath === tabPath;
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

// --- Report Details Mock Data ---
const REPORT_DETAILS = {
    'Pie Chart Report': {
        description: "Shows a a pie chart of issues for a project/filter grouped by a specified field. This helps you see the breakdown of a set of issues, at a glance.",
        staticType: 'Assignee',
    },
    'Average Age Report': {
        description: "Calculates the average time issues spend unresolved within a specified project or filter, helping you monitor backlog health.",
        staticType: 'Resolution Status',
    },
    'Created vs. Resolved Issues Report': {
        description: "Tracks the rate of issue creation versus issue resolution over a specified time, indicating if your workload is growing or shrinking.",
        staticType: 'Time Period',
    },
    'Resolution Time Report': {
        description: "Shows how long it takes, on average, to resolve issues, allowing you to identify bottlenecks in your workflow.",
        staticType: 'Priority',
    },
    'Single Level Group By Report': {
        description: "Groups search results based on a single field (like Component or Status) to give a summarized view of issue distribution.",
        staticType: 'Group By Field',
    },
};


const ReportConfigurePage = () => {
    const { reportName } = useParams(); 
    const location = useLocation();
    const reportTitle = decodeURIComponent(reportName);
    const detail = REPORT_DETAILS[reportTitle] || { description: "Report details not found.", staticType: "Type" };

    const [selectedFilter, setSelectedFilter] = useState('Landing page');
    const [selectedType, setSelectedType] = useState('Assignee');
    const projectName = 'Landing page'; 

    const projectOptions = [
        { value: 'Landing page', label: 'Landing page (LP)' },
        { value: 'Other Project', label: 'Other Project (OP)' },
    ];
    
    const typeOptions = [
        { value: 'Assignee', label: 'Assignee' },
        { value: 'Reporter', label: 'Reporter' },
        { value: 'Priority', label: 'Priority' },
        { value: 'Component', label: 'Component' },
        { value: 'Status', label: 'Status' },
    ];

    const handleNext = () => {
        console.log(`Configuring report ${reportTitle} with filter: ${selectedFilter} and type: ${selectedType}`);
        // Action: Finalize configuration and display the generated report
        alert(`Simulating generation of report: ${reportTitle}`);
    };

    return (
        <>
            {/* 1. PROJECT HEADER AND SUB-NAVBAR (STAYS STICKY) */}
            <SubNavTabs currentPath={location.pathname} projectName={projectName} />
            
            {/* 2. MAIN REPORTS CONFIGURATION CONTENT AREA */}
            <div className="pb-8 p-6 bg-white rounded-xl shadow-md">
                
                {/* Breadcrumbs */}
                <p className="text-sm text-gray-500 mb-2">
                    Projects / Landing page / <Link to="/reports" className="text-blue-600 hover:underline">Reports</Link>
                </p>

                {/* Title and Description */}
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Configure - {reportTitle}
                </h1>

                <p className="text-gray-600 mb-10 text-base max-w-xl">
                    {detail.description}
                </p>

                {/* Filter/Project Selection Form */}
                <div className="space-y-8 max-w-lg">
                    <h2 className="text-lg font-bold text-gray-900">Project or Saved filter</h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 text-sm">
                            Project or saved filter to use as the basis for the graph.
                        </p>
                        
                        <SelectDropdown
                            label={null}
                            icon={null} 
                            options={projectOptions}
                            value={selectedFilter}
                            onChange={(e) => setSelectedFilter(e.target.value)}
                            className="w-full"
                        />
                        
                        <a href="#" className="text-blue-600 hover:underline text-sm font-medium block pt-1">
                            Change Filter or Project...
                        </a>
                    </div>
                </div>

                {/* Static Type Selection */}
                <div className="space-y-4 pt-8">
                    <h2 className="text-lg font-bold text-gray-900">Static Type</h2>
                    <SelectDropdown
                        label={null}
                        icon={null} 
                        options={typeOptions}
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full max-w-sm"
                    />
                </div>
                
                {/* Action Button */}
                <div className="mt-10">
                    <Button 
                        onClick={handleNext}
                        className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 w-24"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ReportConfigurePage;
