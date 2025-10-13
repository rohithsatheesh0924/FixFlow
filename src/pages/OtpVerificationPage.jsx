// src/pages/OtpVerificationPage.jsx
import React, { useState } from 'react';
import Button from '../components/ui/Button';
import VerificationCodeInput from '../components/VerificationCodeInput';
import { useNavigate } from 'react-router-dom';
// import JiraIcon from '../assets/JiraIcon.svg'; // Uncomment and replace with your logo

const OtpVerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const email = 'chnadashrestha@gmail.com'; // Dynamic data
  const naviagate = useNavigate();
  const handleVerificationComplete = (code) => {
    setVerificationCode(code);
    setIsCodeComplete(code.length === 6);
  };

  const handleVerify = () => {
    if (isCodeComplete) {
      console.log('Verifying code:', verificationCode);
      // Logic for API call to verify OTP goes here
      naviagate('/account-details' );
    }
  };

  return (
    // Centering the form on the page with maximum width constraint
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        
        {/* Logo and Name Section */}
        <div className="mb-8 flex flex-col items-center">
          {/* <img src={JiraIcon} alt="Jira Logo" className="h-8 mb-2" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-blue-600 mb-2 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
          </svg>
          <span className="text-xl font-semibold text-gray-800 tracking-tight">FIX FLOW</span> 
        </div>

        {/* Heading and Instructions */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          We've emailed you a code
        </h1>
        <p className="text-gray-600 mb-1">
          To complete your account setup, enter the code we've sent to:
        </p>
        <p className="text-gray-900 font-medium mb-8">
          {email}
        </p>

        {/* OTP Input Fields */}
        <VerificationCodeInput onComplete={handleVerificationComplete} />
        
        {/* Verify Button */}
        <div className="mt-6">
          <Button onClick={handleVerify} disabled={!isCodeComplete}>
            Verify
          </Button>
        </div>
        
        {/* Resend Link */}
        <div className="mt-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition duration-150"
            onClick={(e) => { e.preventDefault(); console.log('Resend email clicked'); }}
          >
            Didn't receive an email? Resend email
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;