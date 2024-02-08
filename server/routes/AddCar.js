// routes/cars.js
const express = require('express');
const router = express.Router();
const Car = require('../models/AddCarSchema');
const connectDb = require('../database/conn');
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
router.put('/cars/:carId', async (req, res) => {
    try {
        const updatedCar = await Car.findOneAndUpdate({ carId: req.params.carId }, req.body, { new: true });
        res.json(updatedCar);
    } catch (error) {
        console.error('Error updating car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PATCH update specific fields of car by carId
router.patch('/cars/:carId', async (req, res) => {
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

module.exports = router;
