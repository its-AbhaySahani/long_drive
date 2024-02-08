import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ActionAreaCard from "../../components/common/Commoncard.jsx";
import axios from "axios";

const ViewCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch all added cars from the server using Axios
    axios.get("http://localhost:5000/cars")
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error("Error fetching cars:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        YOUR CARS
      </Typography>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid key={car._id} item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
              title={car.name} // Assuming name field exists in car object
              image={car.image} // Assuming image field exists in car object
              description={car.description} // Assuming description field exists in car object
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ViewCar;
