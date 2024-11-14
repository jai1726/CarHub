const mongoose = require('mongoose');
const Car = require('../models/Car.models.js');
const User = require('../models/User.models.js');



const deletePost = async (req, res, next) => {

    const carId = req.params.id.trim();
    let car;

    try {
        
        console.log(postId)
        car = await Car.findById(carId).populate('user');
        if (!car) {
            return res.status(404).json({ message: "Post not found" });
        }

        const user = post.user;
        user.cars.pull(car._id); 
        await user.save();

        
        await Car.findByIdAndDelete(carId);

        res.status(200).json({ message: "Successfully deleted" });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ message: "Unable to delete" });
    }
}
module.exports=deletePost;