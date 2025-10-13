import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 👈 FIX: Import useNavigate

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [email, setEmail] = useState('');

  // Function to handle form submission and navigation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // NOTE: In a real app, you would verify credentials here.
    console.log(`Attempting login for: ${email}`);
    
    // FIX: Navigate to the Dashboard Home page
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back!</h1>
        <p className="text-gray-600 mb-8">
          Placeholder for Login Form.
        </p>
        
        {/* FIX: Link form submission to handleSubmit */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input 
            type="email" 
            placeholder="Email" 
            // Controlled input for demonstration
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {/* Added a placeholder password input for completeness */}
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          
          <button 
            type="submit" // Triggers the handleSubmit function
            className="w-full py-2.5 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition duration-150"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;