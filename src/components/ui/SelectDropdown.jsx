import React from 'react';

const SelectDropdown = ({ label, icon, options, value, onChange, className = '' }) => {
    return (
        <div className={`space-y-1 ${className}`}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="relative">
                <select
                    value={value}
                    onChange={onChange}
                    className="block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 text-base text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {icon}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SelectDropdown;
