import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    console.log("1");
    e.preventDefault();
 const token = localStorage.getItem('jwtToken');
 console.log(token);
 if(!token){
  navigate('/login');
  return ;
 }
if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <>
    
    <div className="flex flex-col min-h-screen bg-gray-100">
    <Navbar />
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center h-[75vh] text-center px-6">
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
              className="w-full bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Search
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-4 mt-auto">
        <div className="container mx-auto flex justify-between items-center px-6">
          <p>&copy; 2024 CarHub. All rights reserved.</p>
      
        </div>
      </footer>
      </div>
    </div>
    </>
  );
};

export default HomePage;
