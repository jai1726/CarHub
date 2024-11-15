import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-center h-[75vh] text-center px-6">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-snug tracking-wide">
            Find Your <span className="text-yellow-300">Dream Car</span>
          </h1>
          <p className="text-lg md:text-xl">Search and explore a wide range of cars.</p>
          <form
            onSubmit={handleSearch}
            className="bg-white p-6 rounded-lg shadow-2xl max-w-xl mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Search by model, brand, or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Explore Our Collection</h2>
          <p className="text-lg text-gray-700 mb-8">Discover the best cars available for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={`https://via.placeholder.com/400x250?text=Car+${index + 1}`}
                  alt={`Car ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Car {index + 1}</h3>
                  <p className="text-gray-700 text-sm">Description of the car</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-4 mt-auto">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p>&copy; 2024 CarHub. All rights reserved.</p>
          <p>Built with 💜 for car lovers</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
