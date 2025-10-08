// src/components/VerificationCodeInput.jsx
import React, { useState, useRef } from 'react';

const NUM_DIGITS = 6;

const VerificationCodeInput = ({ onComplete }) => {
  const [otp, setOtp] = useState(new Array(NUM_DIGITS).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    // Update the state array
    const newOtp = [...otp];
    newOtp[index] = element.value.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Focus next input
    if (element.value !== '' && index < NUM_DIGITS - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current is empty
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
      e.preventDefault(); // Prevent double deletion
    }
  };
  
  // Assign refs on render
  const setRef = (el, index) => {
    inputRefs.current[index] = el;
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((data, index) => (
        <input
          key={index}
          className="w-10 h-12 text-center text-xl border-2 border-gray-300 rounded-md 
                     focus:border-blue-600 focus:ring-0 transition duration-150"
          type="text"
          maxLength="1"
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => e.target.select()}
          ref={(el) => setRef(el, index)}
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;