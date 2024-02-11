import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CarDetails.css'; // Import CSS file for styling

const CarDetails = () => {
  const { carId } = useParams(); // Get carId from URL params
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch car details by carId
    axios.get(`http://localhost:5000/cars/${carId}`)
      .then(response => {
        if (response.status === 200) {
          setCar(response.data);
          setLoading(false);
        } else if (response.status === 404) {
          console.error('Car details not found:', response.data);
          setCar(null);
          setLoading(false);
        } else {
          console.error('Error fetching car details:', error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching car details:', error);
        setLoading(false);
      });
  }, [carId]); // Fetch car details whenever carId changes

  if (loading) {
    return <div style={{ textAlign: "center", color: "#fff" }}>Loading...</div>; // Render loading indicator while fetching car details
  }

  if (!car) {
    return <div style={{ textAlign: "center", color: "#fff" }}>Car details not found</div>; // Render message if car details not found
  }

  const handleRentNow = () => {
    // Logic for handling rent now button click
    console.log('Rent Now button clicked');
  };

  return (
    <div className="car-details-container">
      <img src={car.image} alt={car.model} className="car-image" />
      <div className="car-info">
      
        <p>Brand: {car.brand}</p>
        <p>Model: {car.model}</p>
        <p>type: {car.type}</p>
        <p>Color: {car.color}</p>
        <p>Price: {car.fair}</p>
        <p>Mileage: {car.mileage}</p>
        <p>Seats: {car.seat}</p>
        {/* Add more details as needed */}
        <button className="rent-button" onClick={handleRentNow}>Rent Now</button> {/* Rent Now button */}
      </div>
    </div>
  );
};

export default CarDetails;
