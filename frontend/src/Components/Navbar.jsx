import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg p-4">
      {!localStorage.getItem('jwtToken') ? (
        <div className="flex justify-between items-center">
          <div className="text-white font-extrabold text-2xl">
            <a href="/">CarHub</a>
          </div>
          <div className="flex gap-6 text-white items-center text-lg">
            <button onClick={() => navigate('/login')} className="hover:underline">Login</button>
            <button onClick={() => navigate('/signup')} className="hover:underline">SignUp</button>
            <FaUserCircle size={30} className="hover:text-gray-300" />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="text-white font-extrabold text-2xl">
            <a href="/">CarHub</a>
          </div>
          <div className="flex gap-8 items-center text-white text-lg">
            <button
              onClick={() => navigate('/addCar')}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              + Add Car
            </button>
            <button
              onClick={() => navigate('/myCars')}
              className="hover:underline hover:text-gray-200"
            >
              My Cars
            </button>
            <div className="flex flex-col items-center">
              <FaUserCircle size={35} className="hover:text-gray-300" />
              <button
                onClick={handleLogout}
                className="mt-2 text-sm text-red-500 hover:text-red-400"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
