import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;
  const isOwner = location.state?.isOwner;

  const handleEditClick = () => {
    navigate('/addCar', { state: { carDetails: car } });
  };

  const handleDeleteClick = async () => {
    const token = localStorage.getItem('jwtToken');
    try {
      const response = await fetch(`http://localhost:5000/api/car/delete/${car._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        navigate('/myCars'); 
      } else {
        console.error('Failed to delete the car');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-screen-lg mx-auto">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {car.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Car image ${index + 1}`} className="w-full h-[40vh] object-cover" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">{car.tittle}</h1>
          <p className="text-gray-700 mb-4">{car.description}</p>
          <p className="font-semibold">Company: {car.company}</p>
          <p>Type: {car.car_type}</p>
          <p>Price Range: {car.price_range}</p>
          <p>Color: {car.color}</p>
          <p>Dealer: {car.dealer}</p>

          {isOwner && (
            <div className="flex justify-between mt-6">
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CarDetails;
