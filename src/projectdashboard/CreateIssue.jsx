import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateIssue = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // --- Form State ---
  const [issue, setIssue] = useState({
    summary: '',
    description: '',
    type: 'Story',
    priority: 'Medium',
    assignee: 'Unassigned'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIssue(prev => ({ ...prev, [name]: value }));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!issue.summary) return;

    setIsSubmitting(true);
    // Simulate API Save
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/issues/all'); // Redirect back to list
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8 border-b border-violet-100 pb-6">
        <div>
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Create Issue</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">Add a new task to the FixFlow backlog.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm font-bold text-gray-400 hover:text-violet-600 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleCreate}
            disabled={!issue.summary || isSubmitting}
            className={`px-8 py-2.5 rounded-xl text-sm font-bold shadow-lg transition-all active:scale-95 ${
              issue.summary && !isSubmitting
              ? 'bg-violet-600 text-white shadow-violet-200 hover:bg-violet-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Creating...' : 'Create Issue'}
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Main Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Summary Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-violet-400 uppercase tracking-widest ml-1">Issue Summary</label>
            <input 
              name="summary"
              value={issue.summary}
              onChange={handleChange}
              placeholder="What needs to be done?"
              className="w-full px-5 py-4 bg-violet-50/30 border border-violet-100 rounded-2xl text-lg font-bold text-violet-950 placeholder:text-gray-300 focus:ring-4 focus:ring-violet-500/10 focus:bg-white outline-none transition-all"
            />
          </div>

          {/* Description Editor (Simplified Placeholder) */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-violet-400 uppercase tracking-widest ml-1">Description</label>
            <div className="border border-violet-100 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-violet-500/10 transition-all">
              <div className="bg-violet-50/50 px-4 py-2 border-b border-violet-100 flex space-x-4">
                <button type="button" className="text-sm font-bold text-violet-400 hover:text-violet-600">B</button>
                <button type="button" className="text-sm italic text-violet-400 hover:text-violet-600">I</button>
                <button type="button" className="text-sm underline text-violet-400 hover:text-violet-600">U</button>
              </div>
              <textarea 
                name="description"
                value={issue.description}
                onChange={handleChange}
                rows="8"
                placeholder="Add more details about this issue..."
                className="w-full px-5 py-4 text-sm text-gray-700 outline-none resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Right Column: Metadata / Sidebar */}
        <div className="bg-violet-50/30 rounded-[2rem] p-6 border border-violet-100 h-fit space-y-6">
          <h3 className="text-xs font-black text-violet-950 uppercase tracking-widest mb-4">Properties</h3>
          
          {/* Type Select */}
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Issue Type</label>
            <select 
              name="type"
              value={issue.type}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-violet-100 rounded-lg text-sm font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-violet-400"
            >
              <option>Story</option>
              <option>Bug</option>
              <option>Task</option>
              <option>Epic</option>
            </select>
          </div>

          {/* Priority Select */}
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Priority</label>
            <select 
              name="priority"
              value={issue.priority}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-violet-100 rounded-lg text-sm font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-violet-400"
            >
              <option>Highest</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Assignee Select */}
          <div className="space-y-2">
            <label className="text-[9px] font-black text-gray-400 uppercase tracking-wider">Assignee</label>
            <div className="flex items-center p-2 bg-white border border-violet-100 rounded-lg group cursor-pointer hover:border-violet-400 transition-colors">
              <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-[10px] font-bold mr-2">
                ?
              </div>
              <span className="text-xs font-semibold text-gray-500">Unassigned</span>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-violet-100">
             <p className="text-[9px] text-gray-400 font-medium leading-relaxed italic">
               Issues are created in the <span className="text-violet-600 font-bold">FixFlow Software</span> project by default.
             </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateIssue;