import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const FormCreationIllustration = () => (
    <svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Yellow Form Section */}
        <rect x="180" y="50" width="130" height="150" rx="5" fill="#fdbd03" opacity="0.8" transform="rotate(3, 245, 125)"/>
        <rect x="190" y="60" width="110" height="130" rx="3" fill="#fff" stroke="#ccc" strokeWidth="1" transform="rotate(3, 245, 125)"/>
        <text x="210" y="80" fontSize="8" fill="#333" fontFamily="Arial">Add Job name</text>
        <line x1="210" y1="90" x2="270" y2="90" stroke="#ccc" strokeWidth="1" />

        {/* Share Icon */}
        <g transform="translate(250, 160) scale(0.6)">
            <rect x="0" y="0" width="50" height="20" rx="3" fill="#9333ea"/>
            <text x="25" y="13" fontSize="10" fill="#fff" textAnchor="middle" fontFamily="Arial">Share</text>
            <path d="M10 10l5-5-5-5" fill="none" stroke="#fff" strokeWidth="2" transform="translate(5, 5)" />
        </g>
        
        {/* Blue Issues Chart Section */}
        <rect x="330" y="50" width="120" height="150" rx="5" fill="#d0e2ff" opacity="0.9" transform="rotate(-2, 390, 125)"/>
        <rect x="340" y="60" width="100" height="130" rx="3" fill="#fff" stroke="#ccc" strokeWidth="1" transform="rotate(-2, 390, 125)"/>
        <text x="350" y="75" fontSize="8" fill="#333" fontFamily="Arial">Summary</text>
        <rect x="350" y="100" width="80" height="4" fill="#a78bfa"/>
        <rect x="350" y="110" width="60" height="4" fill="#34d399"/>
        <rect x="350" y="120" width="70" height="4" fill="#f87171"/>
        
        {/* Plus/Dots icons */}
        <circle cx="450" cy="50" r="10" fill="#4ade80" opacity="0.7"/>
        <circle cx="470" cy="50" r="10" fill="#facc15" opacity="0.7"/>
        <circle cx="430" cy="30" r="8" fill="#f87171" opacity="0.7"/>
    </svg>
);

const TemplateItem = ({ title, description, icon }) => (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-100 rounded-lg transition duration-150 cursor-pointer">
        <div className="w-6 h-6 flex-shrink-0">
            {icon}
        </div>
        <div>
            <p className="text-sm font-semibold text-gray-800">{title}</p>
            <p className="text-xs text-gray-500">{description}</p>
        </div>
    </div>
);

const TemplateIcons = {
    marketing: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ef4444" className="w-5 h-5"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" /></svg>,
    content: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#10b981" className="w-5 h-5"><path fillRule="evenodd" d="M3 6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm1.5 5.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM5.25 9.25a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>,
    event: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#f59e0b" className="w-5 h-5"><path fillRule="evenodd" d="M18 5.25a.75.75 0 01-.75.75H2.75a.75.75 0 01-.75-.75V3a2.25 2.25 0 012.25-2.25h11.5A2.25 2.25 0 0118 3v2.25zm-2.25-2.5a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 7.5h14a1 1 0 011 1v6.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-6.5a1 1 0 011-1z" clipRule="evenodd" /></svg>,
    social: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3b82f6" className="w-5 h-5"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.385 14.86a.75.75 0 01-.832-.08C4.16 14.337 3.5 13 3.5 10c0-3.313 2.15-5.698 5.613-6.195a.75.75 0 01.124 1.492c-2.88.397-4.113 2.25-4.113 4.703 0 2.215 1.05 3.633 2.65 4.316a.75.75 0 01.124 1.492z" /></svg>,
    graphic: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#6366f1" className="w-5 h-5"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.329 15.696A6.974 6.974 0 0110 13a6.974 6.974 0 015.671 2.696c-1.34-1.258-3.08-2.096-4.996-2.096s-3.656.838-4.996 2.096z" clipRule="evenodd" /></svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#374151" className="w-5 h-5"><path d="M3.5 2.5a.5.5 0 00-.5.5v14a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5h-13zm0 1h13v13h-13V3.5z" /></svg>,
};


const FormsPage = () => {
    const navigate = useNavigate();

    const templates = [
        { title: 'Marketing campaign', description: 'Request a campaign and management plan.', icon: TemplateIcons.marketing },
        { title: 'Content creation', description: 'Request a content for a blog or website.', icon: TemplateIcons.content },
        { title: 'Event Planning', description: 'Request and organize an event.', icon: TemplateIcons.event },
        { title: 'Social media post', description: 'Request social media posts and scheduling.', icon: TemplateIcons.social },
        { title: 'Graphic design', description: 'Request designs for a website or email.', icon: TemplateIcons.graphic },
        { title: 'Email marketing', description: 'Request an email campaign and scheduling.', icon: TemplateIcons.email },
    ];

    const handleCreateForm = (templateTitle) => {
        console.log(`Creating new form using template: ${templateTitle}`);
        // Action: Navigate to a form builder/creation page
        // navigate(`/forms/create?template=${encodeURIComponent(templateTitle)}`); 
        alert(`Navigating to form creator for: ${templateTitle}`);
    };
    
    return (
        <div className="pb-8 flex min-h-[calc(100vh-100px)]">
            
            {/* Left Column: Form Introduction and Core Concept */}
            <div className="flex-1 p-6 bg-white rounded-xl shadow-md mr-6">
                <div className="max-w-3xl">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Simplify your work intake with forms
                    </h1>
                    <p className="text-gray-600 mb-10 text-base">
                        Share a form, collect info, and track work requests from stakeholders. 
                        <a href="#" className="text-blue-600 hover:underline ml-1 font-medium">Learn more about forms</a>
                    </p>

                    {/* Central Diagram/Illustration */}
                    <div className="relative mb-12">
                        <FormCreationIllustration />
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-center transform -translate-x-1/2">
                            <p className="text-base font-semibold text-gray-800">Create and share</p>
                            <p className="text-sm text-gray-500">Customize forms to get the details you need</p>
                        </div>
                        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 text-center transform translate-x-1/2">
                            <p className="text-base font-semibold text-gray-800">Receive requests</p>
                            <p className="text-sm text-gray-500">View and prioritize issues right here in your project.</p>
                        </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-12">
                         <Button 
                            onClick={() => handleCreateForm('Blank')} 
                            className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 w-auto px-6 text-base"
                        >
                            Create form
                        </Button>
                        <Button 
                            onClick={() => handleCreateForm('Template')} 
                            className="bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-gray-300 w-auto px-6 text-base"
                        >
                            Templates
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Column: Template Sidebar (Sticky) */}
            <div className="w-80 flex-shrink-0 bg-gray-50 rounded-xl shadow-md p-6 relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Templates</h2>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Preview a Template for Your Next Request</h3>

                <div className="space-y-1">
                    {templates.map((template, index) => (
                        <TemplateItem key={index} {...template} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormsPage;
