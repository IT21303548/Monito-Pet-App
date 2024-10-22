
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to One More Friend!</h1>
      <p className="text-lg text-gray-700 text-center max-w-md mb-8">
        Discover and connect with your future furry friend. Explore a variety of pets waiting for a loving home and become part of our community.
      </p>
      <Link to="/">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Intro;
