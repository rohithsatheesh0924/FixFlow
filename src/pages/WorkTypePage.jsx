import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const AppLogo = () => (
  <div className="flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-blue-600 mb-1 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
    </svg>
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">ATLASSIAN</span> 
    <span className="text-xl font-semibold text-gray-800 tracking-tight">FIX FLOW</span> 
  </div>
);

const WORK_TYPES = [
    'Software development', 'Product management', 
    'Marketing', 'Design', 
    'Project management', 'Operations', 
    'IT support', 'Human resources', 
    'Customer service', 'Legal', 
    'Finance', 'Sales', 
    'Data science', 'Other'
];

const WorkTypePage = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState(null);

    const handleContinue = () => {
        if (selectedType) {
            navigate('/template-select');
        }
    };

    const handleBack = () => {
        navigate('/store-info'); 
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4 pt-16">
          
          <div className="mb-12">
            <AppLogo />
          </div>

          <div className="w-full max-w-xl mx-auto text-center">

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              What kind of work do you do?
            </h1>
            <p className="text-gray-600 mb-10 text-base">
              This helps us suggest templates that help you team do their best work.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {WORK_TYPES.map((type) => (
                    <button
                        key={type}
                        onClick={() => handleTypeClick(type)}
                        className={`
                            py-3 px-4 text-sm font-medium border rounded-lg transition-all duration-200
                            shadow-sm
                            ${selectedType === type
                                ? 'bg-blue-500 border-blue-500 text-white shadow-md'
                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400'
                            }
                        `}
                    >
                        {type}
                    </button>
                ))}
            </div>
            
            <div className="flex justify-center space-x-4 mt-12">
                <Button 
                    onClick={handleBack}
                    className=" text-gray-900 border border-gray-300 hover:bg-gray-200 focus:ring-gray-300 w-24"
                >
                    Back
                </Button>
                <Button 
                    onClick={handleContinue}
                    className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 w-24"
                    disabled={!selectedType}
                >
                    Continue
                </Button>
            </div>
            
          </div>
        </div>
    );
};

export default WorkTypePage;
