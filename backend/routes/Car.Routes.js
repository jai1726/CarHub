const express = require('express');
const authenticateToken = require('../middleware/auth');
const addCar=require('../controllers/addCar');
const updateCar=require('../controllers/updateCar');
const deleteCar=require('../controllers/deleteCar');
const multer = require('multer');
const { storage } = require('../middleware/multerAuth'); 
// const addToWishlist=require('../controllers/addToWishlist');
// const wishList=require('../controllers/wishlist');
// const posts=require('../controllers/posts');
const upload = multer({ storage });
const carRouter=express.Router();


carRouter.post('/addCar',authenticateToken,upload.array('images',10),addCar);
carRouter.delete('/delete/:id',authenticateToken,deleteCar);
carRouter.post('/updateCar/:id',authenticateToken,upload.array('images',10),updateCar);


module.exports=carRouter;



   