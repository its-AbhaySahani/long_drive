const router = require('express').Router();
const Rental = require('../models/Rental');
const Car = require('../models/Car');

// Create a rental
router.post('/rent', async (req, res) => {
  try {
    const { username, carId, startDate, endDate, totalAmount } = req.body;

    // Check if the car exists
    const carExists = await Car.findById(carId);
    if (!carExists) {
      return res.status(404).json({ message: 'Car not found' });
    }

    const newRental = new Rental({
      username,
      carId,
      startDate,
      endDate,
      totalAmount
    });

    const rental = await newRental.save();
    res.status(200).json(rental);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create rental' });
  }
});

// Get all rentals
router.get('/rentals', async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.status(200).json(rentals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch rentals' });
  }
});

module.exports = router;
