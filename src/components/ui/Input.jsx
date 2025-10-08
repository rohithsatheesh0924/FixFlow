// src/components/ui/Input.jsx
import React, { useState } from 'react';

const EyeIcon = ({ isVisible, onClick }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-5 w-5 text-gray-400 hover:text-gray-600 transition cursor-pointer"
    onClick={onClick}
  >
    {isVisible ? (
      <>
        {/* Eye open */}
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        {/* Eye slash */}
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a1.17 1.17 0 0 1 1.06-.82" />
        <path d="M22 13s-3 7-10 7a9.78 9.78 0 0 1-2.91-.45" />
        <path d="M6.08 6.08A10.15 10.15 0 0 0 12 4c7 0 10 7 10 7a1.31 1.31 0 0 1-.37.52" />
        <path d="m2 2 20 20" />
      </>
    )}
  </svg>
);


const Input = ({ label, id, className = '', type = 'text', ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  // Determine input type based on current visibility state
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          id={id}
          className={`block w-full px-4 py-2.5 text-base text-gray-900 bg-white
                      border border-gray-300 rounded-md shadow-sm appearance-none
                      focus:outline-none focus:ring-blue-500 focus:border-blue-500
                      placeholder-gray-400 disabled:bg-gray-100 disabled:text-gray-500 ${className}`}
          {...props}
        />
        {/* Show password toggle only if the input type is 'password' */}
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <EyeIcon 
              isVisible={isPasswordVisible} 
              onClick={() => setIsPasswordVisible(!isPasswordVisible)} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
