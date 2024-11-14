const mongoose = require('mongoose');
const Car = require('../models/Car.models.js');
const User = require('../models/User.models.js');

const updateCar = async (req, res, next) => {
   console.log("updating")
    const {tittle,description,car_type,company,dealer,color,price_range}=req.body;
    const pics = req.files;
    // console.log(pics);
    // if (!pics) {
    //   return res.status(400).json({ message: 'images are required' });
    // }
    
    if (pics.length >10) {
        return res.status(400).json({ message: 'max 10 images can upload' });
      }

  
    const images = pics.map(image => image.path);
    console.log(typeof(images));
    const carId = req.params.id.trim();
    console.log(carId);
    let car;
    try {
        car = await Car.findByIdAndUpdate(carId, {
            tittle,
            description,
            images,
            car_type,
            company,
            dealer,
            color,
            price_range,
        }, { new: true });
    } catch (err) {
        return console.log("erro", err);
    }
    if (!car) return res.status(404).json({ mesage: "Unable to Update" })
    return res.status(200).json({ car });

}
module.exports=updateCar;