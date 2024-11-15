const express = require('express');
const authenticateToken = require('../middleware/auth');
const addCar=require('../controllers/addCar');
const updateCar=require('../controllers/updateCar');
const deleteCar=require('../controllers/deleteCar');
const searchResult=require('../controllers/searchResults');
const myCars=require('../controllers/myCars');
// const getCarById=require('../controllers/getCarById');
const multer = require('multer');
const { storage } = require('../middleware/multerAuth'); 
const upload = multer({ storage });
const carRouter=express.Router();

carRouter.post('/addCar',authenticateToken,upload.array('images',10),addCar);
carRouter.delete('/delete/:id',authenticateToken,deleteCar);
carRouter.put('/updateCar/:id',authenticateToken,upload.array('images',10),updateCar);
carRouter.get('/search',authenticateToken,searchResult);
carRouter.get('/myCars',authenticateToken,myCars);
// carRouter.get('/:id',authenticateToken,getCarById);



module.exports=carRouter;



   