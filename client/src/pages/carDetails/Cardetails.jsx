import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CarDetails.css'; // Import CSS file for styling

const CarDetails = () => {
  const { carId } = useParams(); // Get carId from URL params
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch car details by carId
    axios.get(`http://localhost:5000/cars/${carId}`)
      .then(response => {
        setCar(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching car details:', error);
        setError(error);
        setLoading(false);
      });
  }, [carId]); // Fetch car details whenever carId changes

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching car details
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message if fetch fails
  }

  if (!car) {
    return <div>No car details found</div>; // Render message if car details are not available
  }

  return (
    <div className="car-details-container">
      <img src={car.image} alt={car.model} className="car-image" />
      <div className="car-info">
        <h2>{car.model}</h2>
        <p>Brand: {car.brand}</p>
        <p>Color: {car.color}</p>
        <p>Price: {car.fair}</p>
        <p>Mileage: {car.mileage}</p>
        <p>Seats: {car.seat}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CarDetails;
