import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:5000/api/car/myCars', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          setCars(data);
        } else {
          console.error('Failed to fetch cars');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading your cars...</div>;
  }

  const handleCardClick = (car) => {
    
    const isOwner =true;
    navigate(`/carDetails/${car._id}`, { state: { car, isOwner } });
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">My Cars</h2>
        {cars.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div
                key={car._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-full h-[450px]"
                onClick={() => handleCardClick(car)}
              >
                <div className="relative w-full h-64">
                  <img
                    src={car.images[0]}
                    alt={car.tittle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{car.tittle}</h3>
                  <p className="text-gray-800 text-base mb-3">{car.description}</p>
                  <p className="text-gray-500 font-semibold text-m">{car.company}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-m font-semibold text-gray-500">{car.car_type}</span>
                    <span className="text-m font-semibold text-gray-500">{car.price_range}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No cars found.</p>
        )}
      </div>
    </>
  );
};

export default MyCars;
