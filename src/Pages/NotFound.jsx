// Pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 text-lg text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
