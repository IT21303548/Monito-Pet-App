import React, { useState, useEffect } from 'react';
import petImageMain from '../images/Shiba Inu Sepia.jpg';
import petImage1 from '../images/Shiba Inu Sepia 02.jpg';
import petImage2 from '../images/Shiba Inu Sepia 03.jpg';
import petImage3 from '../images/Shiba Inu Sepia.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import customerImage1 from '../images/Pet.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(petImageMain);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);
  const [relatedPets, setRelatedPets] = useState([]);

  // Fetch customer data from the API
  const fetchCustomers = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    }
  };

  // Fetch related pets from the API
  const fetchRelatedPets = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      const data = await response.json();
      setRelatedPets(data);
    } catch (err) {
      console.error('Failed to fetch related pets:', err);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchCustomers();
    fetchRelatedPets();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email cannot be empty.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid.');
    } else {
      setEmailError('');
      setEmail('');
      console.log('Subscribing with email:', email);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm); // Implement search logic as needed
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        handleSearch={handleSearch} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />

      {/* Product Details Section */}
      <motion.section 
        className="container mx-auto my-10 p-4 bg-white rounded-md shadow-md"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Main Image Section */}
          <div className="w-full md:w-1/2">
            <motion.img 
              src={selectedImage} 
              alt="Selected Pet" 
              className="w-full h-96 object-cover rounded-md" 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5 }} 
            />
            <div className="flex mt-4 space-x-4">
              {[petImage1, petImage2, petImage3].map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setSelectedImage(image)}
                  whileHover={{ scale: 1.1 }} // Add hover effect
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">Shiba Inu Sepia</h2>
            <p className="text-xl text-blue-500 mb-4">$3,000.00 USD</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 mb-4">
              <Link to="/contact" className="text-white">Contact Us</Link>
            </button>
            <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-gray-100 ml-2">Chat with an Advisor</button>
            <div className="mt-6">
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="font-semibold">Age:</td>
                    <td>4 months</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Gender:</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Color:</td>
                    <td>Sepia</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Breed:</td>
                    <td>Shiba Inu</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">Size:</td>
                    <td>Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Lovely Customers Section */}
      <motion.section 
        className="container mx-auto my-10 p-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6">Our Lovely Customers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customers.map((customer, index) => (
            <motion.img 
              key={index}
              src={customer.image || customerImage1} // Fallback to a default image if customer image is not available
              alt={`Customer ${index + 1}`}
              className="w-full h-64 object-cover rounded-md"
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered animation
            />
          ))}
        </div>
      </motion.section>

      {/* Related Products Section */}
      <motion.section 
        className="container mx-auto my-10 p-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6">See More Puppies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPets.map((pet) => (
            <motion.div 
              key={pet.id} 
              className="bg-white rounded-lg shadow-md p-4"
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.3 }} 
            >
              <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold">{pet.name}</h4>
              <p className="text-blue-500 font-bold mt-2">{pet.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Subscribe Section */}
      <section className="bg-blue-500 text-white py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe Now</h3>
          <p className="mb-6">Get the latest updates and special offers.</p>
          <form onSubmit={handleSubscribe} className="flex justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="px-4 py-2 rounded-l-md border-2 border-white bg-transparent text-white placeholder-white"
            />
            <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
          {emailError && <p className="mt-2 text-red-200">{emailError}</p>}
        </div>
      </section>

      <Footer 
        email={email} 
        setEmail={setEmail} 
        emailError={emailError} 
        handleSubscribe={handleSubscribe} 
      />
    </div>
  );
};

export default ProductDetails;
