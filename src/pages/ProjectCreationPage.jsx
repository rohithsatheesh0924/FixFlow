import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/ui/Input'; 
import Button from '../components/ui/Button'; 

const TemplateSelector = ({ selected }) => (
    <div className="border border-gray-300 rounded-lg p-3 cursor-pointer hover:border-blue-500 transition duration-150">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 border border-yellow-300 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.03V6a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v10.03L15.454 9.87a1.5 1.5 0 00-2.213-.194l-.834.605a1.5 1.5 0 01-1.803 0l-.659-.659a1.5 1.5 0 00-1.803 0l-2.072 2.072z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
                <span className="text-sm font-medium text-gray-900 block">
                    {selected}
                </span>
                <span className="text-xs text-gray-500 block">
                    For designers and developers...
                </span>
            </div>
        </div>
    </div>
);

const ProjectTypeDropdown = ({ label, value }) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:border-blue-500">
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-600">
                    <path fillRule="evenodd" d="M18.685 19.01V21.75a.75.75 0 01-.75.75h-11.43a.75.75 0 01-.75-.75V19.01C2.868 18.006 1.5 15.829 1.5 12c0-5.65 5.093-10.25 11.378-10.493 2.03.35 3.963.993 5.684 1.859 2.062 1.01 3.504 2.89 3.504 5.034 0 3.829-1.368 6.006-4.317 7.01zM11.878 3.5C6.985 3.738 3 7.424 3 12c0 3.754 1.054 5.75 3.125 6.471l.625.21V16.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.188l.58-.232c2.09-.836 3.167-2.613 3.167-4.706V12.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.868l.625.21c2.07 1.016 3.125 2.95 3.125 5.032V19.5c0-3.754-1.054-5.75-3.125-6.471l-.625-.21V11.25a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.868z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-900">{value}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
);

const AccessDropdown = ({ label, value }) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:border-blue-500">
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-700">
                    <path d="M12 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V8.25A.75.75 0 0112 7.5z" />
                    <path fillRule="evenodd" d="M12 1.5A.75.75 0 0112.75 3v.75H16.5a1.5 1.5 0 011.5 1.5v3.626a.75.75 0 01-.416.671L14.75 11.25l-.371.213a1.5 1.5 0 01-1.554 0l-.371-.213-2.834-1.996a.75.75 0 01-.416-.671V5.25a1.5 1.5 0 011.5-1.5h3.75V3A.75.75 0 0112 1.5zM12.75 12a.75.75 0 00-1.5 0v3.75c0 .092-.047.172-.11.223l-3.25 2.438a.75.75 0 00.916 1.217l3.75-2.813 3.75 2.813a.75.75 0 00.916-1.217l-3.25-2.438a.75.75 0 00-.11-.223V12z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-900">{value}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
);

const ProjectCreationPage = () => {
    // CHANGE 1: Initial state for 'name' is now an empty string.
    const [name, setName] = useState('');
    const [key, setKey] = useState('LP');
    const navigate = useNavigate();

    const handleCreateProject = (e) => {
        e.preventDefault();
        // Since we are now using empty state, you might want to add validation here
        if (name && key) {
            navigate('/'); 
        } else {
            console.error("Project Name and Key are required.");
        }
    };

    return (
        <div className="min-h-screen bg-white p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Link */}
                <div className="mb-10">
                    {/* The Link component handles navigation to /template-select */}
                    <Link to="/template-select" className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.088l-5.5-5.25a.75.75 0 010-1.088l5.5-5.25a.75.75 0 111.04 1.088L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                        </svg>
                        Back to project template
                    </Link>
                </div>

                {/* Main Content: Two Columns */}
                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Create project
                        </h1>
                        <p className="text-gray-600 mb-6 text-base">
                            Explore what's possible when you collaborate with your team. Edit project details anytime in project settings.
                        </p>
                        <p className="text-gray-500 text-sm mb-6">
                            Required fields are marked with an asterisk*
                        </p>

                        <form onSubmit={handleCreateProject} className="space-y-6 max-w-md">
                            
                            <Input
                                label="Name *"
                                id="project-name"
                                type="text"
                                value={name}
                                // The placeholder text is handled by the Input component logic, 
                                // which is separate from the default state value.
                                placeholder="Landing Page"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Template</label>
                                <div className="flex justify-between items-center text-blue-600 text-sm font-medium">
                                    <span className="text-purple-600 font-semibold">RECOMMENDED</span>
                                    <Link to="/template-select">More templates</Link>
                                </div>
                                <TemplateSelector selected="Web design process" />
                            </div>

                            <ProjectTypeDropdown label="Project type" value="Team-managed" />

                            <Input
                                label="Key *"
                                id="project-key"
                                type="text"
                                value={key}
                                onChange={(e) => setKey(e.target.value.toUpperCase().slice(0, 3))}
                                required
                            />

                            <AccessDropdown label="Access *" value="Limited" />

                            <div className="pt-4">
                                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 w-auto px-6">
                                    Create Project
                                </Button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Right Column: Image/Illustration */}
                    <div className="hidden lg:flex lg:w-1/2 items-start justify-center pt-16">
                        <img 
                            src="/RightPanel.svg" 
                            alt="Project Dashboard Illustration" 
                            className="w-full h-full max-w-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCreationPage;
