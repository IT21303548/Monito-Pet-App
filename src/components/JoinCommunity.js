
import React from 'react';

const JoinCommunity = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Join Our Community</h1>
        <p className="text-gray-700 mb-6">
          Become a part of our amazing community and connect with fellow pet lovers!
        </p>
        
        <form>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinCommunity;
