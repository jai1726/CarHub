const express = require('express');
const mongoose = require('mongoose');
const Car = require('../models/Car.models.js');
const User = require('../models/User.models.js');

const addCar=async(req,res,next)=>{
    console.log("addCar")
    const pics = req.files;
    console.log(pics);
    if (!pics) {
      return res.status(400).json({ message: 'images are required' });
    }
    
    if (pics.length >10) {
        return res.status(400).json({ message: 'max 10 images can upload' });
      }

    // Extract URLs from uploaded images
    const images = pics.map(image => image.path);
    console.log(typeof(images));
// console.log(req.files);
const {tittle,description,car_type,company,dealer,color,price_range}=req.body;
const user=req.userId;
console.log(req.body);
// console.log(user);
// console.log(req.body);
if (!tittle||!description|| !car_type||!company||!dealer||!color||!price_range||!user) {
    return res.status(404).json({ message: "Enter all fields" });
}

let existingUser;
try {
    existingUser =await User.findById(user);
} catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Try again" });
}
if(!existingUser)return res.status(404).json({message:"User Not exist,Login instead"});

const car=new Car({
    tittle,
    description,
    images,
    car_type,
    company,
    dealer,
    color,
    price_range,
    user
})

try{
   const session=await mongoose.startSession();
   session.startTransaction();
   await car.save({session});
   existingUser.cars.push(car);
   await existingUser.save({ session });
   await session.commitTransaction();
   session.endSession();

}catch(err){
 console.log(err);
 return res.status(500).json({message:"error in posting,try again"})
}
return res.status(200).json({car});
}

module.exports=addCar;