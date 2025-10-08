import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const AppLogo = () => (
  <div className="flex flex-col items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-blue-600 mb-1 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l7.59-7.59L20 9.5l-9 9z"/>
    </svg>
    <span className="text-xl font-semibold text-gray-800 tracking-tight">Fix Flow</span> 
  </div>
);
const getPasswordStrength = (password) => {
    if (!password || password.length < 8) return { level: 0, text: '', color: 'transparent' };
    
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;

    if (strength === 4) {
        return { level: 4, text: 'Very strong', color: 'bg-green-500' };
    } else if (strength >= 3) {
        return { level: 3, text: 'Strong', color: 'bg-yellow-500' };
    } else if (strength >= 1) {
        return { level: 2, text: 'Weak', color: 'bg-red-500' };
    }
    return { level: 1, text: 'Weak', color: 'bg-gray-300' };
};
const AccountDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const verifiedEmail = location.state?.email || 'chnadashrestha@gmail.com'; 

  // Initialize state to empty strings so the fields start empty
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const strength = getPasswordStrength(password);

  const handleContinue = (e) => {
    e.preventDefault();
    console.log('Final registration details:', { email: verifiedEmail, fullName, password });
    
    // Final API call logic goes here...
    
    // Upon success
    if (fullName && password) {
        navigate('/store-info'); 
    } else {
        console.error("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen max-w-full bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto text-center">
        <div className="mb-10">
          <AppLogo />
        </div>
        <div className="flex items-center justify-center mb-8">
            <span className="text-sm font-medium text-green-700 mr-2">Email address verified</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-500">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Add your account details
        </h1>

        <form onSubmit={handleContinue} className="space-y-6 text-left">
          
          {/* Email (Read-Only) */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900 text-base font-medium">{verifiedEmail}</p>
          </div>

          {/* Full Name Input */}
          <Input
            label="Full name"
            id="full-name"
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="focus:border-blue-500 focus:ring-blue-500"
          />

          {/* Password Input with Strength Indicator */}
          <div className="space-y-1">
            <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="8"
                className="focus:border-blue-500 focus:ring-blue-500"
            />
            {/* Password Strength Indicator (Matches new design) */}
            {password.length > 0 && (
                <div className="pt-1">
                    <div className="h-1 rounded-full bg-gray-200">
                        {/* Strength Bar */}
                        <div 
                            className={`h-full rounded-full transition-all duration-300 ${strength.color}`} 
                            style={{ width: `${(strength.level / 4) * 100}%` }}
                        />
                    </div>
                    {/* Strength Text */}
                    <p className={`text-xs mt-1 font-medium ${strength.level === 4 ? 'text-green-600' : 'text-gray-500'}`}>
                        {strength.text}
                    </p>
                </div>
            )}
          </div>
          
          {/* Legal and Continue Button */}
          <p className="text-xs text-gray-500 leading-relaxed pt-2">
            By signing up, I accept the Atlassian <a href="#" className="text-blue-600 hover:underline">Cloud Terms of Service</a> and
            acknowledge the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 shadow-md">
            Continue
          </Button>
        </form>

        {/* reCAPTCHA Footer Note */}
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> apply.
        </p>

      </div>
    </div>
  );
};

export default AccountDetailsPage;
