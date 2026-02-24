import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTeam = () => {
  const navigate = useNavigate();
  
  // --- Form State ---
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    privacy: 'open' // Default selection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      console.log('Team Created:', formData);
      setIsSubmitting(false);
      navigate('/teams'); // Redirect to directory on success
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Back Header */}
      <button 
        onClick={() => navigate('/teams')}
        className="flex items-center text-sm font-bold text-violet-400 hover:text-violet-700 transition-colors mb-8 group"
      >
        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Teams
      </button>

      {/* Main Form Card */}
      <div className="bg-white border border-violet-100 rounded-[2.5rem] p-10 shadow-2xl shadow-violet-500/5 relative overflow-hidden">
        
        {/* Submitting Overlay */}
        {isSubmitting && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-bold text-violet-950 uppercase tracking-widest">Building your team...</p>
            </div>
          </div>
        )}

        <div className="mb-10">
          <h1 className="text-3xl font-black text-violet-950 tracking-tight">Create a new team</h1>
          <p className="text-sm text-gray-500 font-medium mt-2">Structure your workspace by grouping your people together.</p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          
          {/* Team Name Input */}
          <div className="space-y-3">
            <label className="block text-[10px] font-black text-violet-400 uppercase tracking-widest ml-1">
              Team Name <span className="text-red-400">*</span>
            </label>
            <input 
              required
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Engineering Leads"
              className="w-full px-6 py-4 bg-violet-50/50 border border-violet-100 rounded-2xl text-base focus:ring-4 focus:ring-violet-500/10 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-semibold text-violet-950"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <label className="block text-[10px] font-black text-violet-400 uppercase tracking-widest ml-1">
              Mission Statement
            </label>
            <textarea 
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Define the core purpose of this team..."
              className="w-full px-6 py-4 bg-violet-50/50 border border-violet-100 rounded-2xl text-base focus:ring-4 focus:ring-violet-500/10 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-medium resize-none text-violet-950"
            ></textarea>
          </div>

          {/* Privacy Selectable Cards */}
          <div className="space-y-3">
            <label className="block text-[10px] font-black text-violet-400 uppercase tracking-widest ml-1">
              Privacy Level
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => setFormData(prev => ({...prev, privacy: 'open'}))}
                className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                  formData.privacy === 'open' 
                  ? 'border-violet-600 bg-violet-50/50' 
                  : 'border-violet-100 bg-white hover:border-violet-300'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-bold ${formData.privacy === 'open' ? 'text-violet-950' : 'text-gray-700'}`}>Open Team</span>
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.privacy === 'open' ? 'border-violet-600 bg-violet-600 ring-4 ring-violet-100' : 'border-gray-200'}`}></div>
                </div>
                <p className={`text-xs ${formData.privacy === 'open' ? 'text-violet-500' : 'text-gray-400'} font-medium`}>Anyone in FixFlow can discover and join.</p>
              </div>

              <div 
                onClick={() => setFormData(prev => ({...prev, privacy: 'private'}))}
                className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                  formData.privacy === 'private' 
                  ? 'border-violet-600 bg-violet-50/50' 
                  : 'border-violet-100 bg-white hover:border-violet-300'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-bold ${formData.privacy === 'private' ? 'text-violet-950' : 'text-gray-700'}`}>Private Team</span>
                  <div className={`w-4 h-4 rounded-full border-2 ${formData.privacy === 'private' ? 'border-violet-600 bg-violet-600 ring-4 ring-violet-100' : 'border-gray-200'}`}></div>
                </div>
                <p className={`text-xs ${formData.privacy === 'private' ? 'text-violet-500' : 'text-gray-400'} font-medium`}>Access only via invite-only membership.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              type="button"
              onClick={() => navigate('/teams')}
              className="text-sm font-bold text-gray-400 hover:text-violet-600 transition-colors uppercase tracking-widest"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={!formData.name}
              className={`w-full sm:w-auto px-12 py-4 rounded-2xl text-sm font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 ${
                formData.name 
                ? 'bg-violet-600 text-white shadow-violet-200 hover:bg-violet-700' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            >
              Confirm Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeam;