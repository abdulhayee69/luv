// src/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/message');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-white text-center">Hello, POOKSSSSS!</h1>
      <button
        onClick={handleClick}
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Click me!
      </button>
    </div>
  );
};

export default HomePage;
