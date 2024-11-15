import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AddCar = () => {
  const { state } = useLocation();
  const { carDetails } = state || {}; 
  const navigate = useNavigate();

  
  const [car, setCar] = useState({
    tittle: '',
    description: '',
    car_type: '',
    company: '',
    dealer: '',
    color: '',
    price_range: '',
    images: [],
  });

 
  const [selectedFiles, setSelectedFiles] = useState([]);


  useEffect(() => {
    if (carDetails) {
      setCar(carDetails);
    }
  }, [carDetails]);

  
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };


  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

   
    Object.keys(car).forEach((key) => {
      if (key !== 'images') {
        formData.append(key, car[key]);
      }
    });

    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(carDetails ? `car-hub-api.vercel.app/api/car/updateCar/${car._id}` : 'car-hub-api.vercel.app/api/car/add', {
        method: carDetails ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        navigate('/myCars'); 
      } else {
        console.error('Failed to save car details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{carDetails ? 'Edit Car' : 'Add New Car'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="tittle"
            value={car.tittle}
            onChange={handleChange}
            placeholder="Car Title"
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <textarea
            name="description"
            value={car.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="car_type"
            value={car.car_type}
            onChange={handleChange}
            placeholder="Car Type"
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="company"
            value={car.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full p-3 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="dealer"
            value={car.dealer}
            onChange={handleChange}
            placeholder="Dealer"
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="text"
            name="color"
            value={car.color}
            onChange={handleChange}
            placeholder="Color"
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="text"
            name="price_range"
            value={car.price_range}
            onChange={handleChange}
            placeholder="Price Range"
            className="w-full p-3 mb-4 border rounded"
          />
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full p-3 mb-4 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            {carDetails ? 'Update Car' : 'Add Car'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCar;
