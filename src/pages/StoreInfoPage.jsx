import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button'; 

const AppLogo = () => (
  <div className="flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-blue-600 mb-1 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
    </svg>
    <span className="text-xl font-semibold text-gray-800 tracking-tight">Fix Flow</span> 
  </div>
);

const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
);

const StoreInfoPage = () => {
  const navigate = useNavigate();
  // Resetting to an empty string for development
  const [siteName, setSiteName] = useState(''); 
  const [isValid, setIsValid] = useState(false); 
  const siteDomain = '.atlassian.net'; 
  
  const handleContinue = (e) => {
    e.preventDefault();
    if (siteName && isValid) {
      navigate('/work-type'); 
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setSiteName(value);
    setIsValid(value.length > 3 && !value.includes('--'));
  };

  const inputBorderClass = isValid 
    ? 'border-green-500 focus:border-green-500 focus:ring-green-500' 
    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto text-center">

        <div className="mb-10">
          <AppLogo />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Let's name your site
        </h1>
        <p className="text-gray-600 mb-8 text-sm">
          Your site name is part of your Jira URL. Most People use 
          their team or company name.
        </p>

        <form onSubmit={handleContinue} className="space-y-6 text-left">
          
          <label className="block text-sm font-medium text-gray-700">Your site</label>

          <div className={`flex border-2 rounded-md transition duration-150 ${inputBorderClass}`}>
            
            <input
              type="text"
              id="site-name"
              placeholder="team-name"
              value={siteName}
              onChange={handleChange}
              required
              className="flex-grow min-w-0 px-3 py-2 text-base text-gray-900 
                         bg-white appearance-none focus:outline-none focus:ring-0 
                         border-none rounded-l-md"
              style={{ paddingRight: '0' }}
            />
            
            <span 
              className={`flex-shrink-0 px-2 py-2 text-base text-gray-500 font-medium 
                          bg-white border-l border-gray-200 flex items-center`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {siteDomain}
            </span>

            {siteName && (
              <div 
                className={`flex-shrink-0 px-2 py-2 flex items-center justify-center 
                            ${isValid ? 'bg-white rounded-r-md' : 'bg-gray-50 rounded-r-md'}`}
              >
                {isValid && <CheckmarkIcon />}
              </div>
            )}
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            This site name is just a suggestion. Feel free to change to 
            something your team will recognize.
          </p>

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 shadow-md" disabled={!isValid}>
            Continue
          </Button>
        </form>

      </div>
    </div>
  );
};

export default StoreInfoPage;
