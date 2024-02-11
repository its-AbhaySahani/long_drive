const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  carId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
