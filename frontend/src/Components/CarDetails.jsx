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
          Authorization: `Bearer ${token}`,
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
      <div className="p-6 w-full">
        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden mb-8 w-full">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {car.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Car image ${index + 1}`} className="w-full h-[60vh] object-cover" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
          <h1 className="text-4xl font-bold mb-4">{car.tittle}</h1>
          <p className="text-gray-700 mb-6">{car.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <p><span className="font-semibold">Company:</span> {car.company}</p>
            <p><span className="font-semibold">Type:</span> {car.car_type}</p>
            <p><span className="font-semibold">Price Range:</span> {car.price_range}</p>
            <p><span className="font-semibold">Color:</span> {car.color}</p>
            <p><span className="font-semibold">Dealer:</span> {car.dealer}</p>
          </div>

          {isOwner && (
            <div className="flex justify-center gap-8 mt-8">
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition"
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
