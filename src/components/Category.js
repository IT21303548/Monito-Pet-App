import React, { useState } from 'react';
import petImage from '../images/Pet.jpeg'; 
import petImage1 from '../images/Poodle Toy Yellow.jpeg';
import petImage2 from '../images/Poodle Toy Sepia.jpeg';
import petImage3 from '../images/Alaskan Malamute Grey.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion'; // Import Framer Motion

const Category = () => {
  const [pets] = useState([
    { id: 'K001', name: 'Poodle Toy Yellow', gender: 'Male', age: '3 months', breed: 'Small Dog', price: '$1000', image: petImage1, color: 'Yellow' },
    { id: 'M0102', name: 'Poodle Toy Sepia', gender: 'Male', age: '2 months', breed: 'Small Dog', price: '$1100', image: petImage2, color: 'Brown' },
    { id: 'M0512', name: 'Alaskan Malamute Grey', gender: 'Male', age: '2 months', breed: 'Small Dog', price: '$1200', image: petImage3, color: 'Black' },
    { id: 'MO502', name: 'Poodle Tiny Yellow', gender: 'Female', age: '2 months', breed: 'Small Dog', price: '$1300', image: petImage, color: 'White' },
  ]);

  // New state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    color: [],
    age: [],
    breed: [],
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email cannot be empty.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid.');
    } else {
      setEmailError('');
      console.log('Subscribing with email:', email);
    }
  };

  // Handle filter change
  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const newCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value) // Remove if already selected
        : [...prev[category], value]; // Add if not selected
      return { ...prev, [category]: newCategory };
    });
  };

  // Filter pets based on selected filters
  const filteredPets = pets.filter((pet) => {
    const matchesGender = selectedFilters.gender.length === 0 || selectedFilters.gender.includes(pet.gender);
    const matchesColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(pet.color);
    const matchesAge = selectedFilters.age.length === 0 || selectedFilters.age.includes(pet.age);
    const matchesBreed = selectedFilters.breed.length === 0 || selectedFilters.breed.includes(pet.breed);
    
    return matchesGender && matchesColor && matchesAge && matchesBreed;
  });

  // Pagination logic
  const petsPerPage = 2;
  const totalPages = Math.ceil(filteredPets.length / petsPerPage);
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar handleSearch={handleSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Filter and Pet List Section */}
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Filter Panel */}
        <aside className="w-full md:w-1/4 p-4 bg-white rounded-md shadow-md mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Filter</h3>
          <div>
            <h4 className="font-semibold">Gender</h4>
            <div>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('gender', 'Male')} /> Male
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('gender', 'Female')} /> Female
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Color</h4>
            <div>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('color', 'Brown')} /> Brown
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('color', 'Yellow')} /> Yellow
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('color', 'Black')} /> Black
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('color', 'White')} /> White
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Age</h4>
            <div>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('age', '3 months')} /> 3 months
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('age', '4 months')} /> 4 months
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('age', '5 months')} /> 5 months
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('age', '6 months')} /> 6 months
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Breed</h4>
            <div>
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('breed', 'Small Dog')} /> Small Dog
              </label>
              <br />
              <label>
                <input type="checkbox" onChange={() => handleFilterChange('breed', 'Poodle')} /> Poodle
              </label>
            </div>
          </div>
        </aside>

        {/* Pet List with Swiper */}
        <main className="w-full md:w-3/4 p-4">
          <h2 className="text-2xl font-semibold mb-4">Small Dogs</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Change to 1 for better mobile experience
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {currentPets.map((pet) => (
              <SwiperSlide key={pet.id} className="bg-white shadow-md rounded-md p-4">
                <motion.img 
                  src={pet.image} 
                  alt={pet.name} 
                  className="w-full h-40 object-cover rounded-md mb-4" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }} // Animation effect
                />
                <h3 className="text-xl font-semibold">{pet.name}</h3>
                <p>Gender: {pet.gender}</p>
                <p>Age: {pet.age}</p>
                <p>Breed: {pet.breed}</p>
                <p>Price: {pet.price}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Controls */}
          <div className="flex justify-center space-x-4 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {index + 1} Page
              </button>
            ))}
          </div>
        </main>
      </div>

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

      <Footer />
    </div>
  );
};

export default Category;
