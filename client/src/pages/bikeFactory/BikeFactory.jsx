import React from "react";
import { Grid, Typography } from "@mui/material";
import Dabba from "../../components/common/Dabba.jsx";

const BikeFactory = () => {
  const bikes = [
    { id: 1, name: "bike1", image: "bike1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "bike2", image: "car2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Available Bikes
      </Typography>
      <Grid container spacing={2}>
        {bikes.map((car) => (
          <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
            <Dabba
              title={car.name}
              image={car.image}
              description={car.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BikeFactory;
