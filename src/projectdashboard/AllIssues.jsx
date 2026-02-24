import React, { useState } from 'react';

const AllIssues = () => {
  // Mock data for issues
  const [issues] = useState([
    { id: 'FF-101', summary: 'Initialize violet theme architecture', status: 'In Progress', priority: 'High', assignee: 'JD', type: 'Story' },
    { id: 'FF-102', summary: 'Fix sidebar navigation active state', status: 'To Do', priority: 'Medium', assignee: 'AS', type: 'Bug' },
    { id: 'FF-103', summary: 'Setup authentication middleware', status: 'Done', priority: 'High', assignee: 'JD', type: 'Task' },
    { id: 'FF-104', summary: 'Design classy issue table layout', status: 'In Progress', priority: 'Highest', assignee: 'MK', type: 'Story' },
    { id: 'FF-105', summary: 'Integrate violet color palette to charts', status: 'To Do', priority: 'Low', assignee: 'AS', type: 'Task' },
  ]);

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    const styles = {
      'To Do': 'bg-gray-100 text-gray-600',
      'In Progress': 'bg-violet-100 text-violet-700',
      'Done': 'bg-emerald-100 text-emerald-700',
    };
    return (
      <span className={`px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider ${styles[status]}`}>
        {status}
      </span>
    );
  };

  // Priority Icon Component
  const PriorityIcon = ({ priority }) => {
    const colors = {
      'Highest': 'text-red-600',
      'High': 'text-orange-500',
      'Medium': 'text-violet-500',
      'Low': 'text-blue-400',
    };
    return (
      <div className={`flex items-center space-x-1 ${colors[priority]}`}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-xs font-medium text-gray-600">{priority}</span>
      </div>
    );
  };

  return (
    <div className="max-w-full">
      {/* Header Section */}
      <div className="mb-6">
        <nav className="flex text-sm text-gray-500 mb-2">
          <span>Projects</span>
          <span className="mx-2">/</span>
          <span className="text-violet-600 font-medium">FixFlow Project</span>
        </nav>
        <h1 className="text-2xl font-bold text-violet-950">All Issues</h1>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search issues..." 
            className="pl-10 pr-4 py-2 bg-white border border-violet-100 rounded-lg text-sm focus:ring-2 focus:ring-violet-400 outline-none w-64 transition-all"
          />
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        
        <button className="px-3 py-2 bg-violet-50 text-violet-700 text-sm font-semibold rounded-lg hover:bg-violet-100 transition">
          Assignee: All
        </button>
        <button className="px-3 py-2 bg-violet-50 text-violet-700 text-sm font-semibold rounded-lg hover:bg-violet-100 transition">
          Status: All
        </button>
        <button className="px-3 py-2 bg-violet-50 text-violet-700 text-sm font-semibold rounded-lg hover:bg-violet-100 transition">
          Priority: All
        </button>
      </div>

      {/* Issues Table */}
      <div className="bg-white rounded-xl border border-violet-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-violet-50/50 border-b border-violet-100">
              <th className="px-4 py-3 text-[11px] font-bold text-violet-400 uppercase tracking-widest">Type</th>
              <th className="px-4 py-3 text-[11px] font-bold text-violet-400 uppercase tracking-widest">Key</th>
              <th className="px-4 py-3 text-[11px] font-bold text-violet-400 uppercase tracking-widest w-1/3">Summary</th>
              <th className="px-4 py-3 text-[11px] font-bold text-violet-400 uppercase tracking-widest">Assignee</th>
              <th className="px-4 py-3 text-[11px] font-bold text-violet-400 uppercase tracking-widest">Status</th>
              <th className="px-4 py-3 text-[11px] font-bold text-violet-400 uppercase tracking-widest">Priority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-50">
            {issues.map((issue) => (
              <tr key={issue.id} className="hover:bg-violet-50/30 transition-colors group">
                <td className="px-4 py-4">
                  <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white ${issue.type === 'Bug' ? 'bg-red-500' : issue.type === 'Story' ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                    {issue.type[0]}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-medium text-gray-500 group-hover:text-violet-600 transition-colors">
                    {issue.id}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {issue.summary}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-[10px] font-bold border border-violet-200">
                      {issue.assignee}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={issue.status} />
                </td>
                <td className="px-4 py-4">
                  <PriorityIcon priority={issue.priority} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination / Footer Info */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-500 font-medium px-2">
        <span>Showing {issues.length} issues</span>
        <div className="flex space-x-2">
          <button className="px-2 py-1 border border-violet-100 rounded hover:bg-violet-50 transition">Prev</button>
          <button className="px-2 py-1 bg-violet-600 text-white rounded shadow-sm shadow-violet-200">1</button>
          <button className="px-2 py-1 border border-violet-100 rounded hover:bg-violet-50 transition">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AllIssues;