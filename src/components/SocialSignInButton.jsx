// src/components/SocialSignInButton.jsx
import React from 'react';

const SocialSignInButton = ({ provider, icon: Icon, onClick }) => {
  // Example for rendering an SVG icon or a simple placeholder div
  const renderIcon = () => {
    switch (provider.toLowerCase()) {
      case 'microsoft':
        // <img src="/path/to/microsoft-logo.svg" alt="Microsoft" className="h-4 w-4 mr-2" />
        return <div className="h-4 w-4 mr-2 bg-red-500 rounded-sm"></div>;
      case 'google':
        // <img src="/path/to/google-logo.svg" alt="Google" className="h-4 w-4 mr-2" />
        return <div className="h-4 w-4 mr-2 bg-blue-500 rounded-full"></div>;
      case 'apple':
        // <img src="/path/to/apple-logo.svg" alt="Apple" className="h-4 w-4 mr-2" />
        return <div className="h-4 w-4 mr-2 bg-gray-700 rounded-full"></div>;
      case 'slack':
        // <img src="/path/to/slack-logo.svg" alt="Slack" className="h-4 w-4 mr-2" />
        return <div className="h-4 w-4 mr-2 bg-purple-600 rounded-md"></div>;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 rounded-md 
                 bg-white text-gray-700 text-sm font-medium shadow-sm
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                 transition duration-150 ease-in-out"
    >
      {renderIcon()}
      {provider}
    </button>
  );
};

export default SocialSignInButton;