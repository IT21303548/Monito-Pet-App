import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    alert(`Message from ${formData.name} sent successfully!`);
  };

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

      {/* Contact Section */}
      <section className="container mx-auto my-10 p-4 bg-white rounded-md shadow-md">
        <motion.h2 
          className="text-3xl font-bold mb-6" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10">
          <motion.h3 
            className="text-2xl font-bold mb-4" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Contact Details
          </motion.h3>
          <motion.p 
            className="text-gray-700" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Email: contact@onemorefriend.com
          </motion.p>
          <motion.p 
            className="text-gray-700" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Phone: +1 (234) 567-890
          </motion.p>
          <motion.p 
            className="text-gray-700" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Address: 123 Pet Street, Animal City, AS 12345
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>Register Now So You Don't Miss Our Programs</p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-md text-gray-800"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md ml-2">Subscribe Now</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
