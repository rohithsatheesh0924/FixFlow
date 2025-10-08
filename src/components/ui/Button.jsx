// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full py-2.5 rounded-md text-white font-medium transition duration-150 ease-in-out 
        bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 
        disabled:bg-blue-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;