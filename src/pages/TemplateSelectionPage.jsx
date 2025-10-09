import React, { useState } from 'react';
import { useNavigate } from  'react-router-dom';
import Button from '../components/ui/Button';

const AppLogo = () => (
  <div className="flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-blue-600 mb-1 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
    </svg>
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">ATLASSIAN</span> 
    <span className="text-xl font-semibold text-gray-800 tracking-tight">Fix Flow</span> 
  </div>
);

const TemplateCard = ({ template, isSelected, onClick }) => {
    return (
        <div
            onClick={() => onClick(template.name)}
            className={`
                p-6 border-2 rounded-xl transition duration-200 cursor-pointer
                ${isSelected 
                    ? 'border-blue-600 shadow-xl ring-4 ring-blue-100' 
                    : 'border-gray-200 hover:border-gray-400'
                }
            `}
        >
            <div className="flex justify-center h-28 mb-4">
                {template.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {template.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">
                {template.description}
            </p>
        </div>
    );
};

// Placeholder SVGs to mimic the design's colorful shapes
const TemplateSVGs = {
    Kanban: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="25" y="25" width="50" height="40" fill="#FFF" stroke="#e5e7eb" strokeWidth="2" />
            <rect x="30" y="30" width="40" height="4" fill="#60a5fa" />
            <rect x="30" y="40" width="30" height="4" fill="#facc15" />
            <rect x="30" y="50" width="35" height="4" fill="#a78bfa" />
            <polygon points="10,20 90,20 80,70 20,70" fill="#f59e0b" style={{ transform: 'rotate(-5deg)', transformOrigin: 'center' }} />
            <rect x="15" y="40" width="70" height="40" fill="#a78bfa" style={{ transform: 'rotate(5deg)', transformOrigin: 'center' }} opacity="0.8" />
        </svg>
    ),
    WebDesign: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="25" y="25" width="50" height="40" fill="#FFF" stroke="#e5e7eb" strokeWidth="2" />
            <rect x="30" y="30" width="40" height="4" fill="#4ade80" />
            <rect x="30" y="40" width="30" height="4" fill="#3b82f6" />
            <rect x="30" y="50" width="35" height="4" fill="#3b82f6" />
            <rect x="30" y="60" width="40" height="4" fill="#3b82f6" />
            <polygon points="10,20 90,20 80,70 20,70" fill="#4ade80" style={{ transform: 'rotate(5deg)', transformOrigin: 'center' }} />
            <rect x="15" y="35" width="70" height="40" fill="#facc15" style={{ transform: 'rotate(-5deg)', transformOrigin: 'center' }} opacity="0.8" />
        </svg>
    ),
    Scrum: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="25" y="25" width="50" height="40" fill="#FFF" stroke="#e5e7eb" strokeWidth="2" />
            <rect x="30" y="30" width="40" height="4" fill="#e5e7eb" />
            <rect x="30" y="40" width="30" height="4" fill="#e5e7eb" />
            <rect x="30" y="50" width="35" height="4" fill="#e5e7eb" />
            <rect x="30" y="60" width="40" height="4" fill="#e5e7eb" />
            <polygon points="10,20 90,20 80,70 20,70" fill="#a78bfa" style={{ transform: 'rotate(-5deg)', transformOrigin: 'center' }} />
            <rect x="15" y="40" width="70" height="40" fill="#f59e0b" style={{ transform: 'rotate(5deg)', transformOrigin: 'center' }} opacity="0.8" />
        </svg>
    )
};


const TEMPLATES = [
    {
        name: 'Kanban',
        description: 'Manage design projects effectively, visualize tasks, and see team workload',
        icon: TemplateSVGs.Kanban,
    },
    {
        name: 'Web design process',
        description: 'Build web pages plus keep designers and developers on the same page.',
        icon: TemplateSVGs.WebDesign,
    },
    {
        name: 'Scrum',
        description: 'Plan, prioritize, and schedule sprints using scrum farmework',
        icon: TemplateSVGs.Scrum,
    },
];

const TemplateSelectionPage = () => {
    const navigate = useNavigate();
    const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[1].name);

    const handleContinue = () => {
        console.log(`Final template selected: ${selectedTemplate}`);
        // Final action: Navigate to the user's new dashboard/home page
        navigate('/projectcreation'); 
    };

    const handleBack = () => {
        navigate('/work-type'); 
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl mx-auto text-center">

                <div className="mb-8">
                    <AppLogo />
                </div>

                <div className="bg-white rounded-xl shadow-none p-6 sm:p-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">
                        Select a template to get started
                    </h1>
                    <p className="text-gray-600 mb-10 text-base">
                        You can always change this later. Selecting a template won't limit what you can do.
                    </p>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-8">
                        Design
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEMPLATES.map((template) => (
                            <TemplateCard
                                key={template.name}
                                template={template}
                                isSelected={selectedTemplate === template.name}
                                onClick={setSelectedTemplate}
                            />
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
                            disabled={!selectedTemplate}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSelectionPage;
