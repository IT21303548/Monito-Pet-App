import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-blue-600">
            <a href="/" className="hover:text-blue-800 transition duration-200">One More Friend</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-lg">
            <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-200">Home</a>
            <a href="/category" className="text-gray-700 hover:text-blue-500 transition duration-200">Category</a>
            <a href="/product" className="text-gray-700 hover:text-blue-500 transition duration-200">Product Details</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500 transition duration-200">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500 transition duration-200">Contact</a>
          </div>

          {/* Search and Join Button */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search something here!"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Join the Community
            </button>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="container mx-auto my-10 p-4 bg-white rounded-md shadow-md">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We are passionate about connecting pet lovers with their perfect furry companions. Our goal is to create a platform where adopting pets becomes easy and enjoyable. We believe every pet deserves a loving home and strive to make that happen for as many pets as possible.
        </motion.p>
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Mission
        </motion.h3>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our mission is to promote responsible pet ownership and make pet adoption more accessible to everyone. We provide a platform that allows potential pet owners to find a variety of pets from different breeds and sizes. We aim to bring joy and happiness to every home by adding one more friend to the family.
        </motion.p>
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Our Team
        </motion.h3>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our team is made up of animal enthusiasts, veterinarians, and tech experts who are dedicated to improving the pet adoption experience. We work tirelessly to ensure that our platform is user-friendly and that every pet's profile is as detailed and accurate as possible.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>Register Now So You Don't Miss Our Programs</p>
          <div className="flex flex-col md:flex-row justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-md text-gray-800 mb-2 md:mb-0 md:mr-2"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Subscribe Now</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
