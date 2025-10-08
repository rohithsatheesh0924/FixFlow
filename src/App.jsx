import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Register from './pages/SignupForm';
import Verification from './pages/OtpVerificationPage';
import AccountDetails from './pages/AccountDetailsPage';
import StoreInfo from './pages/StoreInfoPage';
import WorkType from './pages/WorkTypePage';
import TemplateSelection from './pages/TemplateSelectionPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        
        {/* Auth and Setup Flow */}
        <Route path="/" element={<Navigate to="/register" replace />} />

        <Route path="/register" element={<Register />} /> 
        <Route path="/verification" element={<Verification />} />
        <Route path="/accountdetails" element={<AccountDetails />} />
        <Route path="/store-info" element={<StoreInfo />} />
        <Route path="/work-type" element={<WorkType />} />
        <Route path="/templateselect" element={<TemplateSelection />} />

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
