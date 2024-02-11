import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ActionAreaCard from "../../components/common/Commoncard.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';
import {useParams} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default () => {
  const [cars, setCars] = useState([]);
  const { city } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all added cars from the server using Axios
    axios.get("http://localhost:5000/car/filter?city="+city)
      .then(response => {
        if(response.status === 200){
          setCars(response.data);
        }
        else if(response.status === 404){
          console.log("No Cars Found");
        }
        
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error("Error fetching cars:", error);
      });
  }, [city]); // Empty dependency array ensures useEffect runs only once on component mount

   // Click handler for each card
   const handleCardClick = (carId) => {
    // Navigate to car details page with specific car ID
    // You can define the route structure in your React Router configuration
  };

  if(loading){
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }
  else if (cars.length === 0) {
    return (
      <div className="no-cars">
        <Typography variant="h2" gutterBottom>
          No Cars Found
        </Typography>
        <Link to="/addcar">Add Car</Link>
      </div>
    );
  }
  return (
    <div >
      <Typography variant="h2" gutterBottom>
        Explore Vehicles
      </Typography>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid key={car._id} item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              title={car.name} // Assuming name field exists in car object
              image={car.image} // Assuming image field exists in car object
              model={car.model} 
              mileage={car.mileage}
              seat={car.seat}
              color={car.color}
              brand={car.brand}
              fair={car.fair}
              type={car.type}
              city={car.city}
              carid={car.carId}
              onClick={() => handleCardClick(car._id)} 
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

