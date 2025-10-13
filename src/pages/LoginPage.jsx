import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome Back!</h1>
        <p className="text-gray-600 mb-8">
          Placeholder for Login Form.
        </p>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled
          />
          <button 
            className="w-full py-2.5 rounded-md text-white font-medium bg-blue-600 opacity-50 cursor-not-allowed"
            disabled
          >
            Log In
          </button>
        </div>

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
