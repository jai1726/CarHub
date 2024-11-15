import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
// import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AddCar from './Components/addCar';
import SearchResults from './Components/SearchResults';
import MyCars from './Components/MyCars';
import CarDetails from './Components/CarDetails'; 
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
           <Route path="/addCar" element={<AddCar/>}/>
           <Route path="/search" element={<SearchResults/>}/>
           <Route path="/MyCars" element={<MyCars/>}/>
           <Route path="/carDetails/:carId" element={<CarDetails/>} />
        </Routes>
      </BrowserRouter>
     
  
  );
}

export default App;
