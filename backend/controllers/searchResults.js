const mongoose = require('mongoose');
const Car = require('../models/Car.models.js');
const User = require('../models/User.models.js');

const searchResults = async (req, res, next) => {
    console.log("searching");
    try {
        const { query } = req.query;  
        console.log(query);
      
        if (!query) {
          return res.status(400).json({ message: 'Search query cannot be empty' });
        }
    
        
        const cars = await Car.find({
          $or: [
            { tittle: { $regex: query, $options: 'i' } },  
            { description: { $regex: query, $options: 'i' } },  
            { car_type: { $regex: query, $options: 'i' } }, 
            { company: { $regex: query, $options: 'i' } },  
          ]
        });
    console.log("finding")
    console.log(cars);
        if (cars.length === 0) {
          return res.status(200).json({ message: 'No cars found matching the query' });
        }
        console.log("2");
    
       
        res.status(200).json(cars);
      } catch (error) {
        console.error('Error searching cars:', error);
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports=searchResults;