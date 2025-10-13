import React from 'react';
import { Link } from 'react-router-dom';

const ReportCard = ({ title, subtitle, description, icon }) => (
    <Link 
        to={`/reports/configure/${encodeURIComponent(title)}`} 
        className="flex flex-col space-y-2 p-4 rounded-lg hover:bg-gray-50 transition duration-150 cursor-pointer border border-gray-200"
    >
        {/* Top Section: Icon/Chart and Title */}
        <div className="flex items-start space-x-4">
            <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="text-sm font-semibold text-blue-600 mb-1">{title}</h4>
                <p className="text-xs text-gray-800">{subtitle}</p>
            </div>
        </div>
        {/* Description */}
        <p className="text-xs text-gray-500 pt-2">
            {description}
        </p>
    </Link>
);

// SVGs to mock the visual appearance of the charts (Rest of ChartSVGs omitted for brevity)
const ChartSVGs = {
    Bar1: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-blue-500/80">
            <rect x="5" y="75" width="10" height="20" />
            <rect x="15" y="65" width="10" height="30" />
            <rect x="25" y="55" width="10" height="40" />
            <rect x="35" y="45" width="10" height="50" />
            <rect x="45" y="35" width="10" height="60" />
            <rect x="55" y="25" width="10" height="70" />
            <rect x="65" y="15" width="10" height="80" />
            <rect x="75" y="5" width="10" height="90" />
            <path d="M5 95 L 95 95" stroke="#ccc" strokeWidth="2" />
        </svg>
    ),
    Line: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-blue-500/80">
            <polyline points="5,90 25,60 45,70 65,40 85,10" fill="none" stroke="#4ade80" strokeWidth="4" />
            <path d="M5 95 L 95 95" stroke="#ccc" strokeWidth="2" />
        </svg>
    ),
    Pie: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="#4299e1" />
            <path d="M 50 50 L 50 10 A 40 40 0 0 1 84.64 30 Z" fill="#f56565" />
            <path d="M 50 50 L 84.64 30 A 40 40 0 0 1 50 90 Z" fill="#f6e05e" />
        </svg>
    ),
    Bar2: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <rect x="5" y="60" width="10" height="35" fill="#ef4444" />
            <rect x="15" y="50" width="10" height="45" fill="#22c55e" />
            <rect x="25" y="65" width="10" height="30" fill="#ef4444" />
            <rect x="35" y="70" width="10" height="25" fill="#22c55e" />
            <rect x="45" y="55" width="10" height="40" fill="#ef4444" />
            <rect x="55" y="45" width="10" height="50" fill="#22c55e" />
            <rect x="65" y="60" width="10" height="35" fill="#ef4444" />
            <rect x="75" y="50" width="10" height="45" fill="#22c55e" />
            <path d="M5 95 L 95 95" stroke="#ccc" strokeWidth="2" />
        </svg>
    ),
    Clock: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#60a5fa" strokeWidth="6" />
            <path d="M50 50 L 50 20" stroke="#f59e0b" strokeWidth="4" />
            <path d="M50 50 L 75 50" stroke="#4ade80" strokeWidth="4" />
            <path d="M10 70 L 90 70" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
            <path d="M10 80 L 90 80" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
        </svg>
    ),
    List: (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gray-400">
            <rect x="10" y="20" width="80" height="50" rx="5" ry="5" fill="#fff" stroke="#ccc" strokeWidth="2" />
            <rect x="20" y="30" width="60" height="5" rx="2" ry="2" fill="#ef4444" />
            <rect x="20" y="40" width="40" height="5" rx="2" ry="2" fill="#22c55e" />
            <rect x="20" y="50" width="50" height="5" rx="2" ry="2" fill="#ef4444" />
            <rect x="20" y="60" width="30" height="5" rx="2" ry="2" fill="#22c55e" />
        </svg>
    )
};


const REPORTS = [
    {
        title: "Average Age Report",
        subtitle: "Issue analysis",
        description: "Shows the average age of unresolved issues for a project or filter. This helps you see whether your backlog is being kept up to date.",
        icon: ChartSVGs.Bar1
    },
    {
        title: "Created vs. Resolved Issues Report",
        subtitle: "Issue analysis",
        description: "Maps created issues versus resolved issues over a period of time. This can help you understand whether your overall backlog is growing or shrinking.",
        icon: ChartSVGs.Line
    },
    {
        title: "Pie Chart Report",
        subtitle: "Issue analysis",
        description: "Shows a pie chart of the issues in a project/filter grouped by a specified field. This helps you see the breakdown of set of issues, at a glance.",
        icon: ChartSVGs.Pie
    },
    {
        title: "Recently Created Issues Report",
        subtitle: "Issue analysis",
        description: "Shows the number of issues created over a period of time for a project/filter, and how many were resolved. This helps you",
        icon: ChartSVGs.Bar2
    },
    {
        title: "Resolution Time Report",
        subtitle: "Issue analysis",
        description: "Shows the length of time taken to resolve a set of issues for a project/filter. This helps you identify friends and incidents",
        icon: ChartSVGs.Clock
    },
    {
        title: "Single Level Group By Report",
        subtitle: "Issue analysis",
        description: "Shows issues grouped by a particular field or filter. This helps you group search results by a filed and see the",
        icon: ChartSVGs.List
    },
];


const ReportsPage = () => {
    const projectName = 'Landing page'; 

    return (
        <div className="pb-8">
            {/* Breadcrumbs/Context */}
            <p className="text-sm text-gray-500 mb-6">
                Projects / {projectName}
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                All reports
            </h1>

            <h2 className="text-xl font-bold text-gray-900 mb-6">
                Issue analysis
            </h2>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {REPORTS.map((report) => (
                    <ReportCard
                        key={report.title}
                        title={report.title}
                        subtitle={report.subtitle}
                        description={report.description}
                        icon={report.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReportsPage;
