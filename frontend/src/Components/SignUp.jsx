import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');  // State to store error messages
  const navigate = useNavigate();

  const fields = [
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
    { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
    { label: 'Confirm Password', type: 'password', name: 'confirmPassword', placeholder: 'Confirm your password' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://car-hub-api.vercel.app/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('jwtToken', token);  
        console.log('Account created successfully:', data);
        navigate('/');  
      } else {
        const errorData = await response.json(); 
        setError(errorData.message || ' failed');  
      }
    } catch (error) {
      setError('An error occurred during signup');  
      console.error('Error during account creation:', error);
    }
  };

  return (
    <>
       <Navbar />
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <Card
        header={<h1 className="text-2xl font-bold">Sign Up</h1>}
        content={
          <form className="space-y-4" onSubmit={handleSubmit}>
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="font-medium mb-2" htmlFor={field.name}>{field.label}</label>
                <input
                  className="border rounded px-4 py-2"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            {error && <p className="text-red-500">{error}</p>}  
            <div className="flex flex-row">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 justify-end">
                Sign Up
              </button>
            </div>
          </form>
        }
      />
    </div>
    </>
  );
}
