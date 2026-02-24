import React, { useState } from 'react';

const MyOpenIssues = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const myIssues = [
    { id: 'FF-104', summary: 'Design classy issue table layout', status: 'In Progress', priority: 'Highest', type: 'Story', desc: 'The table needs to follow the new violet branding guidelines with consistent padding.' },
    { id: 'FF-101', summary: 'Initialize violet theme architecture', status: 'In Progress', priority: 'High', type: 'Story', desc: 'Set up Tailwind config with custom violet-950 and indigo-600 colors.' },
    { id: 'FF-102', summary: 'Fix sidebar navigation active state', status: 'To Do', priority: 'Medium', type: 'Bug', desc: 'The blue border is still showing instead of violet on some browsers.' },
    { id: 'FF-107', summary: 'Update documentation for API', status: 'To Do', priority: 'Low', type: 'Task', desc: 'Ensure all endpoints are documented in the Confluence workspace.' },
  ];

  // Auto-select first issue if none selected
  const activeIssue = selectedIssue || myIssues[0];

  return (
    <div className="h-full flex flex-col -m-6"> {/* Negative margin to bleed into the Layout padding */}
      {/* Sub-Header */}
      <div className="px-6 py-4 border-b border-violet-100 flex justify-between items-center bg-white">
        <div>
          <h1 className="text-xl font-bold text-violet-950">My Open Issues</h1>
          <p className="text-xs text-gray-500 font-medium">Displaying {myIssues.length} issues assigned to you</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1.5 text-xs font-bold text-violet-600 hover:bg-violet-50 rounded transition">Export</button>
          <button className="px-3 py-1.5 text-xs font-bold text-violet-600 hover:bg-violet-50 rounded transition">Share</button>
        </div>
      </div>

      {/* Split View Container */}
      <div className="flex flex-1 overflow-hidden bg-[#F4F5F7]/30">
        
        {/* Left: Issue List */}
        <div className="w-1/3 border-r border-violet-100 bg-white overflow-y-auto">
          {myIssues.map((issue) => (
            <div 
              key={issue.id}
              onClick={() => setSelectedIssue(issue)}
              className={`p-4 border-b border-violet-50 cursor-pointer transition-all ${
                activeIssue.id === issue.id 
                ? 'bg-violet-50 border-l-4 border-l-violet-600' 
                : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${issue.type === 'Bug' ? 'bg-red-500' : 'bg-violet-500'}`}></span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">{issue.id}</span>
              </div>
              <p className={`text-sm font-semibold truncate ${activeIssue.id === issue.id ? 'text-violet-900' : 'text-gray-800'}`}>
                {issue.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Issue Detail */}
        <div className="flex-1 bg-white overflow-y-auto p-8">
          <div className="max-w-3xl">
            {/* Breadcrumbs & Actions */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">{activeIssue.id}</span>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-violet-50 rounded text-gray-400 hover:text-violet-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                <button className="p-2 hover:bg-violet-50 rounded text-gray-400 hover:text-violet-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-violet-950 mb-6">{activeIssue.summary}</h2>

            {/* Status & Priority Ribbon */}
            <div className="flex items-center space-x-4 mb-8">
               <div className="group relative">
                  <button className="bg-violet-600 text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider flex items-center hover:bg-violet-700">
                    {activeIssue.status}
                    <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
               </div>
               <div className="flex items-center text-sm font-semibold text-gray-600">
                 <span className="mr-2">Priority:</span>
                 <span className={`${activeIssue.priority === 'Highest' ? 'text-red-600' : 'text-violet-600'}`}>{activeIssue.priority}</span>
               </div>
            </div>

            {/* Description Section */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-tight">Description</h3>
              <div className="p-4 bg-violet-50/50 border border-violet-100 rounded-lg text-gray-700 text-sm leading-relaxed">
                {activeIssue.desc}
              </div>
            </div>

            {/* Comments Placeholder */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-tight">Activity</h3>
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-full bg-violet-900 text-white flex items-center justify-center text-[10px] font-bold">JD</div>
                <div className="flex-1">
                   <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    className="w-full border border-violet-100 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-violet-400 outline-none transition-all"
                   />
                   <p className="mt-2 text-[10px] text-gray-400"><strong>Pro-tip:</strong> press <kbd className="bg-gray-100 px-1 rounded">M</kbd> to comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyOpenIssues;