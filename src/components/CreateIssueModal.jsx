import React, { useState } from 'react';
import SelectDropdown from './ui/SelectDropdown';
import Button from './ui/Button';

const CreateIssueModal = ({ isOpen, onClose, onCreate }) => {
    if (!isOpen) return null;

    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState('LP');
    const [issueType, setIssueType] = useState('Task');

    const projectOptions = [
        { value: 'LP', label: 'Landing Page (LP)' },
        { value: 'PD', label: 'Product Discovery (PD)' },
    ];

    const issueTypeOptions = [
        { value: 'Task', label: 'Task' },
        { value: 'Bug', label: 'Bug' },
        { value: 'Story', label: 'Story' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (summary.trim()) {
            onCreate({ project, issueType, summary, description });
            onClose();
        }
    };

    const ProjectIcon = <div className="w-4 h-4 bg-blue-200 rounded-sm"></div>;
    const IssueIcon = <div className="w-4 h-4 bg-green-200 rounded-full"></div>;

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-start justify-center pt-10">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto transform transition-all">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                    <h2 className="text-xl font-bold text-gray-900">Create issue</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" /></svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="flex space-x-4">
                        <SelectDropdown
                            label="Project"
                            icon={ProjectIcon}
                            options={projectOptions}
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            className="w-1/2"
                        />
                        <SelectDropdown
                            label="Issue Type"
                            icon={IssueIcon}
                            options={issueTypeOptions}
                            value={issueType}
                            onChange={(e) => setIssueType(e.target.value)}
                            className="w-1/2"
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                        <input
                            id="summary"
                            type="text"
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="What needs to be done?"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            placeholder="Add a detailed description..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
                        />
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                        <Button
                            type="button"
                            onClick={onClose}
                            className="!bg-gray-100 !text-gray-700 !border !border-gray-300 hover:!bg-gray-200"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="!bg-blue-600 hover:!bg-blue-700 focus:!ring-blue-300"
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateIssueModal;
