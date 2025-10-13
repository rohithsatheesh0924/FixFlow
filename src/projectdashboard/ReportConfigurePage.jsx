import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SelectDropdown from '../components/ui/SelectDropdown';
import Button from '../components/ui/Button';

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
    'Recently Created Issues Report': {
        description: "Displays the number of issues created and resolved within a specific time period, grouped by a field of your choice.",
        staticType: 'Group By Field',
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
    const reportTitle = decodeURIComponent(reportName);
    const detail = REPORT_DETAILS[reportTitle] || { description: "Report details not found.", staticType: "Type" };

    const [selectedFilter, setSelectedFilter] = useState('Landing page');
    const [selectedType, setSelectedType] = useState('Assignee');

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
        // This is where you would finalize the configuration and navigate to the rendered chart page
        console.log(`Configuring report ${reportTitle} with filter: ${selectedFilter} and type: ${selectedType}`);
        // Action: Navigate to the generated report view (/reports/view/{reportName})
        alert(`Simulating generation of report: ${reportTitle}`);
    };

    return (
        <div className="pb-8 bg-white p-6 rounded-xl shadow-md">
            
            {/* Breadcrumbs */}
            <p className="text-sm text-gray-500 mb-2">
                Projects / Landing page / <Link to="/reports" className="text-blue-600 hover:underline">Reports</Link>
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Configure - {reportTitle}
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-base max-w-xl">
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
    );
};

export default ReportConfigurePage;
