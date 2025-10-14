import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/LoginPage';
import Register from './pages/SignupForm';
import Verification from './pages/OtpVerificationPage';
import AccountDetails from './pages/AccountDetailsPage';
import StoreInfo from './pages/StoreInfoPage';
import WorkType from './pages/WorkTypePage';
import TemplateSelection from './pages/TemplateSelectionPage';
import CreateProject from './pages/ProjectCreationPage';

import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './projectdashboard/ProjectDashboard';
import ReportsPage from './projectdashboard/ReportsPage';
import ReportConfigurePage from './projectdashboard/ReportConfigurePage';
import YourWorkPage from './pages/YourWorkPage';
import FormsPage from './projectdashboard/FormsPage';
import AttachmentsPage from './projectdashboard/AttachmentsPage';
import SummaryPage from './projectdashboard/SummaryPage';
import ListPage from './projectdashboard/ListPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        
        {/* Public/Auth Flow */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/verification" element={<Verification />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/store-info" element={<StoreInfo />} />
        <Route path="/work-type" element={<WorkType />} />
        <Route path="/template-select" element={<TemplateSelection />} />
        <Route path="/create-project" element={<CreateProject />} />
        

        {/* Dashboard Flow (Uses fixed Header/Sidebar Layout) */}
        <Route element={<DashboardLayout />}>
            <Route path="/your-work" element={<YourWorkPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/reports/configure/:reportName" element={<ReportConfigurePage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route path="/attachments" element={<AttachmentsPage />} />
            <Route path="/dashboard/summary" element={<SummaryPage />} />
            <Route path="/dashboard/list" element={<ListPage />} />
        </Route>

        {/* Catch-all 404 */}
        <Route 
          path="*" 
          element={
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <h1 className="text-4xl font-extrabold text-red-600 mb-2">404</h1>
                <p className="text-xl text-gray-700">Page Not Found</p>
                <a href="/login" className="mt-6 text-blue-600 hover:text-blue-800 transition font-medium">
                  Go to Login Page
                </a>
            </div>
          } 
        />
      </Routes>
    </div>
  );
};

export default App;
