// vehicles.js
const express = require('express');
const router = express.Router();

// Sample data for testing
const vehicles = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, type: 'Sedan', rate: 50, available: true },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021, type: 'Sedan', rate: 45, available: false },
  // Add more sample vehicles as needed
];

// Route to get all vehicles
router.get('/', (req, res) => {
  res.json(vehicles);
});

// Route to get a specific vehicle by ID
router.get('/:id', (req, res) => {
  const vehicleId = parseInt(req.params.id);
  const vehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);

  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).json({ message: 'Vehicle not found' });
  }
});

// Route to get available vehicles
router.get('/available', (req, res) => {
  const availableVehicles = vehicles.filter((vehicle) => vehicle.available);
  res.json(availableVehicles);
});

// Route to get vehicles by make
router.get('/make/:make', (req, res) => {
  const makeParam = req.params.make.toLowerCase();
  const vehiclesByMake = vehicles.filter((vehicle) => vehicle.make.toLowerCase() === makeParam);

  if (vehiclesByMake.length > 0) {
    res.json(vehiclesByMake);
  } else {
    res.status(404).json({ message: 'No vehicles found for the specified make' });
  }
});

// Route to get vehicles by model
router.get('/model/:model', (req, res) => {
  const modelParam = req.params.model.toLowerCase();
  const vehiclesByModel = vehicles.filter((vehicle) => vehicle.model.toLowerCase() === modelParam);

  if (vehiclesByModel.length > 0) {
    res.json(vehiclesByModel);
  } else {
    res.status(404).json({ message: 'No vehicles found for the specified model' });
  }
});

// Route to get vehicles by type
router.get('/type/:type', (req, res) => {
  const typeParam = req.params.type.toLowerCase();
  const vehiclesByType = vehicles.filter((vehicle) => vehicle.type.toLowerCase() === typeParam);

  if (vehiclesByType.length > 0) {
    res.json(vehiclesByType);
  } else {
    res.status(404).json({ message: 'No vehicles found for the specified type' });
  }
});

module.exports = router;
