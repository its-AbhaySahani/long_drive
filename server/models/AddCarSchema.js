// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carId: { type: String, required: true, unique: true },
    brand: { type: String, required: true},
    model: { type: String, required: true },
    color: { type: String, required: true },
    fair: {type: Number, required: true},
    seat: { type: Number, required: true },
    mileage: { type: String, required: true },
    image: {type: String, required: true}
});

module.exports = mongoose.model('Car', carSchema);
