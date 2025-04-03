// src/components/CommonLayout/Button.jsx
import React from 'react';

export const Button = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-colors';
  const variantClasses = {
    primary: 'bg-dark-800 text-white hover:bg-dark-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`} 
      {...props}
    >
      {children}
    </button>
  );
};