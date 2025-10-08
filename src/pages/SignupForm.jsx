import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Button from '../components/ui/Button'; 
import Input from '../components/ui/Input'; 
import SocialSignInButton from '../components/SocialSignInButton'; 

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up with email:', email);
  
    if (email) {
      navigate('/verification', { state: { email } });
    }
  };
  const handleSocialSignIn = (provider) => {
    console.log(`Initiating sign-in with ${provider}`);

  };

  return (
 
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 w-full max-w-lg lg:max-w-xl mx-auto">
        <div className="text-center mb-10">
          {/* Logo and App Name */}
          <div className="mx-auto h-10 w-10 bg-purple-600 rounded-lg flex items-center justify-center mb-2 shadow-lg">
            <span className="font-bold text-white text-lg">FF</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">FixFlow</h1>
          <p className="text-gray-700 mt-4 text-xl font-semibold">Let's Start Fixing your projects flow</p>
          <p className="text-gray-500 text-sm mt-2">
            It's free for up to 10 users - no credit card needed.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <Input
              label="Work Email"
              id="work-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              // Custom styling for the purple input field
              className="bg-purple-50 border-purple-200 focus:border-purple-500 focus:ring-purple-500 placeholder-purple-300"
            />
            <p className="mt-2 text-sm text-gray-500">
              Find teammates, plus keep work and life separate by using your work email.
            </p>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            I agree to the <a href="#" className="text-blue-600 hover:underline">Atlassian Customer Agreement</a>,
            which incorporates by reference the <a href="#" className="text-blue-600 hover:underline">AI Product-Specific Terms</a>,
            and acknowledge the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>

          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 focus:ring-purple-300">
            Sign up
          </Button>
        </form>

        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Responsive Social Buttons: Stacks on mobile, 2 columns on small screens and up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SocialSignInButton provider="Microsoft" onClick={() => handleSocialSignIn('Microsoft')} />
          <SocialSignInButton provider="Google" onClick={() => handleSocialSignIn('Google')} />
          <SocialSignInButton provider="Apple" onClick={() => handleSocialSignIn('Apple')} />
          <SocialSignInButton provider="Slack" onClick={() => handleSocialSignIn('Slack')} />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have Jira?{' '}
          {/* Link to the Login page as defined in App.jsx */}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
