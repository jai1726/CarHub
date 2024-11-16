import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');  
  const navigate = useNavigate();
  
  const fields = [
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log("1");
    e.preventDefault();
    try {
      console.log("3");
      const response = await fetch('https://car-hub-api.vercel.app/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log("3");
     console.log(response);
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('jwtToken', token);
        console.log('Login successful:', data);
        navigate('/');
      } else {
        const errorData = await response.json();  
        setError(errorData.message || 'Login failed'); 
      }
    } catch (error) {
      setError('An error occurred during login');  
      console.error('Error during login:', error);
    }
  };

  return (
    <>
       <Navbar />
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <Card
        header={<h1 className="text-2xl font-bold">Login</h1>}
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
                Login
              </button>
            </div>
          </form>
        }
      />
    </div>
  </>
  );
}
