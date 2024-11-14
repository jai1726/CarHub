const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
  
    },
    car_type: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    dealer: {
        type: String,
        required: true
    },
    
    color:{
        type: String,
        required: true
    },
    price_range:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }

})
const Car = mongoose.model("Car", carSchema);
module.exports = Car;