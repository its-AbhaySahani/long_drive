// routes/cars.js
const express = require('express');
const router = express.Router();
const Car = require('../models/AddCarSchema');
const multer = require("multer")
const upload = multer()
const {v4} = require("uuid")

// GET all cars
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST a new car
router.post('/addcar', upload.none(),async (req, res) => {
    // console.log(req);
    const newCar = new Car(req.body);
    try {
        // Generate custom carId
        newCar.carId = v4();
        
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
        return;
    } catch (error) {
        console.error('Error adding car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update car by carId
router.put('/put/cars/:carId', async (req, res) => {
    try {
        const updatedCar = await Car.findOneAndUpdate({ carId: req.params.carId }, req.body, { new: true });
        res.json(updatedCar);
    } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PATCH update specific fields of car by carId
router.patch('/patch/cars/:carId', async (req, res) => {
    try {
        const updatedCar = await Car.findOneAndUpdate({ carId: req.params.carId }, { $set: req.body }, { new: true });
        res.json(updatedCar);
    } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE car by carId
router.delete('/delete/cars/:carId', async (req, res) => {
    try {
        const deletedCar = await Car.findOneAndDelete({ carId: req.params.carId });
        res.json(deletedCar);
    } catch (error) {
        console.error('Error deleting car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// GET car details by carId
router.get('/cars/:carId', async (req, res) => {
    try {
        const car = await Car.findOne({ carId: req.params.carId });
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.json(car);
    } catch (error) {
        console.error('Error fetching car details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// GET cars with filtering options
router.get('/car/filter', async (req, res) => {
    try {
        const { type, color, brand, city, seat, fare } = req.query;
        let query = {};

        if (type) query.type = type;
        if (color) query.color = color;
        if (brand) query.brand = brand;
        if (city) query.city = city;
        if (seat) query.seat = seat;
        if (fare) query.fare = fare;

        const filteredCars = await Car.find(query);
        res.json(filteredCars);
    } catch (error) {
        console.error('Error filtering cars:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
