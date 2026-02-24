import React from 'react';

const ReportedByMe = () => {
  const reportedIssues = [
    { id: 'FF-201', summary: 'Login API returning 500 error on mobile', created: '2 days ago', status: 'Fixing', priority: 'Highest', votes: 12 },
    { id: 'FF-184', summary: 'Request for new violet-themed icon set', created: '5 days ago', status: 'Under Review', priority: 'Medium', votes: 4 },
    { id: 'FF-152', summary: 'Sidebar overlaps on small tablet screens', created: '1 week ago', status: 'In Progress', priority: 'High', votes: 2 },
    { id: 'FF-140', summary: 'Update privacy policy for 2026 compliance', created: '2 weeks ago', status: 'Done', priority: 'Low', votes: 0 },
  ];

  return (
    <div className="max-w-6xl mx-auto py-4">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex text-[11px] font-bold text-violet-400 uppercase tracking-widest mb-2">
            <span>User Profile</span>
            <span className="mx-2 text-gray-300">/</span>
            <span>Activity</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-violet-950 tracking-tight">Reported by me</h1>
        </div>
        <div className="flex space-x-3">
            <div className="text-right mr-4 hidden md:block">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Impact Score</p>
                <p className="text-lg font-black text-violet-600">84%</p>
            </div>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-violet-200 transition-all">
                Report New Issue
            </button>
        </div>
      </div>

      {/* Stats Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Total Reported', value: '24', color: 'bg-violet-600' },
          { label: 'Resolved', value: '18', color: 'bg-emerald-500' },
          { label: 'Pending Action', value: '6', color: 'bg-amber-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-violet-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-3xl font-black text-violet-950">{stat.value}</span>
              <div className={`w-2 h-8 rounded-full ${stat.color}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Reported Issues List */}
      <div className="space-y-3">
        <div className="grid grid-cols-12 px-6 py-2 text-[10px] font-black text-violet-300 uppercase tracking-widest">
            <div className="col-span-1">Key</div>
            <div className="col-span-6">Summary & Status</div>
            <div className="col-span-2">Created</div>
            <div className="col-span-2">Priority</div>
            <div className="col-span-1 text-right">Votes</div>
        </div>

        {reportedIssues.map((issue) => (
          <div 
            key={issue.id} 
            className="grid grid-cols-12 items-center bg-white border border-violet-50 px-6 py-5 rounded-xl hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 transition-all cursor-pointer group"
          >
            {/* ID */}
            <div className="col-span-1 text-sm font-bold text-violet-400 group-hover:text-violet-600">
              {issue.id}
            </div>

            {/* Summary & Status */}
            <div className="col-span-6">
              <p className="text-sm font-bold text-gray-800 mb-2 group-hover:text-violet-950">{issue.summary}</p>
              <div className="flex items-center space-x-2">
                <span className={`h-1.5 w-1.5 rounded-full ${issue.status === 'Done' ? 'bg-emerald-500' : 'bg-violet-500'}`}></span>
                <span className="text-[10px] font-bold uppercase text-gray-500 tracking-tighter">{issue.status}</span>
              </div>
            </div>

            {/* Created Date */}
            <div className="col-span-2 text-xs font-medium text-gray-400">
              {issue.created}
            </div>

            {/* Priority Badge */}
            <div className="col-span-2">
              <span className={`text-[10px] font-black px-2 py-1 rounded-md border ${
                issue.priority === 'Highest' 
                ? 'bg-red-50 border-red-100 text-red-600' 
                : 'bg-violet-50 border-violet-100 text-violet-600'
              }`}>
                {issue.priority}
              </span>
            </div>

            {/* Votes */}
            <div className="col-span-1 text-right">
              <div className="inline-flex flex-col items-center justify-center bg-violet-50 rounded-lg px-3 py-1 border border-violet-100 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <span className="text-xs font-black">{issue.votes}</span>
                <span className="text-[8px] uppercase font-bold opacity-70">Votes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportedByMe;