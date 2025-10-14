import React, { useState } from 'react';
import Button from './ui/Button';

// Mock data for the issue details
const MOCK_ISSUE = {
    key: 'LP-5',
    title: 'UI design',
    status: 'TO DO',
    assignee: 'Unassigned',
    reporter: 'Sam Lee',
    priority: 'Highest',
    labels: 'None',
    description: 'Add a description...',
    activityTabs: ['All', 'Comments', 'History', 'Work log', 'Approvals'],
    fields: [
        { name: 'Assignee', value: 'Unassigned', detail: 'Assign to me', color: 'text-blue-600' },
        { name: 'Reporter', value: 'CS', detail: 'Sam Lee', color: 'text-gray-900' },
        { name: 'Priority', value: 'Highest', detail: null, color: 'text-red-600' },
        { name: 'Labels', value: 'None', detail: null },
        { name: 'Due date', value: 'None', detail: null },
        { name: 'Time tracking', value: 'No time logged', detail: null },
        { name: 'Start date', value: 'None', detail: null },
        { name: 'Category', value: 'None', detail: null },
        { name: 'Team', value: 'None', detail: null },
    ]
};

const IssueDetailModal = ({ isOpen, onClose, issue = MOCK_ISSUE }) => {
    const [activeTab, setActiveTab] = useState('Comments');

    // FIX: Guard clause to prevent crashing if isOpen is true but issue is null (e.g., during initialization)
    if (!isOpen || !issue) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-[999] flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden transform transition-all flex flex-col">
                
                {/* Header/Toolbar */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center space-x-3 text-sm font-semibold text-gray-500">
                        <span>{issue.key}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-blue-600 cursor-pointer text-sm">1 Watcher</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"><path fillRule="evenodd" d="M10 2c-3.79 0-7.164 2.115-8.544 5.253a.75.75 0 001.35 0C3.766 4.962 6.54 3.5 10 3.5c3.46 0 6.234 1.462 7.194 3.753a.75.75 0 001.35 0C17.164 4.115 13.79 2 10 2zM10 16.5c-3.46 0-6.234-1.462-7.194-3.753a.75.75 0 00-1.35 0C2.836 15.885 6.21 18 10 18c3.79 0 7.164-2.115 8.544-5.253a.75.75 0 00-1.35 0C16.234 14.962 13.46 16.5 10 16.5z" clipRule="evenodd" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"><path fillRule="evenodd" d="M12.5 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5z" /><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.25-4.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v3.25h3.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-3.25v3.25a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-3.25h-3.25a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h3.25V6.5z" clipRule="evenodd" /></svg>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
                
                {/* Main Content Body */}
                <div className="flex flex-1 overflow-y-auto">
                    
                    {/* Left Column: Description & Activity */}
                    <div className="w-2/3 p-6 space-y-6 border-r border-gray-200">
                        <div className="flex items-center space-x-4">
                             {/* Status Dropdown (To Do) */}
                            <div className="inline-flex items-center space-x-2 bg-gray-200 text-gray-700 font-semibold text-sm px-3 py-1 rounded-md cursor-pointer">
                                <span>{issue.status}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                            </div>
                            {/* Action Buttons */}
                            <Button className="!bg-gray-100 !text-gray-700 !py-1.5 !px-3 hover:!bg-gray-200 text-sm">Attach</Button>
                            <Button className="!bg-gray-100 !text-gray-700 !py-1.5 !px-3 hover:!bg-gray-200 text-sm">Add a child issue</Button>
                            <Button className="!bg-gray-100 !text-gray-700 !py-1.5 !px-3 hover:!bg-gray-200 text-sm">Link issue</Button>
                            <button className="text-gray-500 hover:text-gray-700">...</button>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900">{issue.title}</h1>

                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-gray-900">Description</h3>
                            <p className="text-gray-600 italic">{issue.description || 'Add a description...'}</p>
                        </div>
                        
                        {/* Activity Section */}
                        <div className="space-y-4 pt-4">
                            <h3 className="text-sm font-semibold text-gray-900">Activity</h3>
                            <div className="flex space-x-4 border-b border-gray-200">
                                {issue.activityTabs.map(tab => (
                                    <button 
                                        key={tab} 
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 text-sm font-medium transition duration-150 ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                                <div className="flex-1 text-right text-xs text-gray-500 flex items-center justify-end space-x-2">
                                    <span className="cursor-pointer hover:underline">Summarize</span>
                                    <span className="cursor-pointer hover:underline">Newest first</span>
                                </div>
                            </div>
                            
                            {/* Comment Box Area */}
                            {activeTab === 'Comments' && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-sm text-white font-semibold">CS</div>
                                    <textarea 
                                        className="flex-1 border border-gray-300 rounded-md p-2 text-sm resize-none focus:ring-blue-500 focus:border-blue-500" 
                                        rows="2" 
                                        placeholder="Add a comment..."
                                    />
                                </div>
                            )}
                            
                            {/* History Placeholder */}
                            {activeTab === 'History' && <p className="text-sm text-gray-500">No history found for this issue.</p>}
                        </div>
                    </div>
                    
                    {/* Right Column: Details & Fields */}
                    <div className="w-1/3 p-6 space-y-4 bg-gray-50/50 flex-shrink-0">
                        
                        {/* Pinned Fields */}
                        <div className="p-3 bg-gray-100 rounded-lg space-y-2">
                            <div className="flex justify-between items-center text-sm font-semibold text-gray-900">
                                <span>Pinned fields</span>
                                <button className="text-gray-400 hover:text-gray-600">×</button>
                            </div>
                            <p className="text-xs text-gray-500 italic">Click on the ⚿ next to a field label to start pinning.</p>
                        </div>

                        {/* Details Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-base font-semibold text-gray-900">Details</h3>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                            
                            {/* Dynamic Fields */}
                            {issue.fields.map((field) => (
                                <div key={field.name} className="flex justify-between items-start text-sm">
                                    <span className="text-gray-500">{field.name}</span>
                                    <div className="text-right">
                                        <p className={`font-medium ${field.color || 'text-gray-900'}`}>{field.value}</p>
                                        {field.detail && <span className={`text-xs ${field.color || 'text-blue-600'}`}>{field.detail}</span>}
                                    </div>
                                </div>
                            ))}
                            
                            <button className="text-xs text-gray-500 hover:text-gray-700">Hide empty fields</button>
                        </div>

                        {/* Footer Timestamps */}
                        <div className="text-xs text-gray-500 pt-4 border-t border-gray-200">
                            <p>Created 15 minutes ago</p>
                            <p>Updated 13 minutes ago</p>
                            <button className="text-blue-600 hover:underline mt-2">Configure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDetailModal;
