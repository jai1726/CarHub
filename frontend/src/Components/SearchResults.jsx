import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = new URLSearchParams(location.search).get('query') || searchQuery;


  useEffect(() => {
    setSearchQuery(query);
  }, [query]);  

 
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery.trim()) return;

      setLoading(true);
      try {
        const token = localStorage.getItem('jwtToken');
        const { data } = await axios.get(`https://car-hub-api.vercel.app/api/car/search`, {
          params: { query: searchQuery },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); 
  };

  const handleCardClick = (car) => {
    navigate(`/carDetails/${car._id}`, { state: { car } });
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Search Results</h2>

       
        <form className="max-w-2xl mx-auto space-y-4 mb-6">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : searchResults && Array.isArray(searchResults) && searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {searchResults.map((car) => (
              <div
                key={car._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full h-[450px]"
                onClick={() => handleCardClick(car)}
              >
                <div className="relative w-full h-64">
                  <img
                    src={car.images[0]}
                    alt={car.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{car.title}</h3>
                  <p className="text-gray-800 text-base mb-3">{car.description}</p>
                  <p className="text-gray-500 font-semibold text-m">{car.company}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
