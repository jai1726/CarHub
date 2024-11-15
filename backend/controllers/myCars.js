const mongoose = require('mongoose');
const Car = require('../models/Car.models.js');
const User = require('../models/User.models.js');

const myCars = async (req, res, next) => {
  console.log("Fetching cars posted by user");

  const userId = req.userId; 
  console.log("one");
  
  let existingUser;
  try {
    console.log("2");

    
    existingUser = await User.findById(userId).populate('cars');

    console.log("3");
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist, please login instead" });
    }
    let data=existingUser.cars;
    console.log("4");

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No cars found for this user.' });
    }
    console.log("5");
console.log(data);
    res.status(200).json(data); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching cars', error });
  }
};

module.exports = myCars;
