// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carId: { type: String, required: true, unique: true },
    make: { type: String, required: true },
    brand: { type: String, required: true},
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    price: {type: Number, required: true},
    seat: { type: Number, required: true },
    mileage: {  type: String, required: true }
});

module.exports = mongoose.model('Car', carSchema);