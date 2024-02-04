import React from "react";
import { Grid, Typography } from "@mui/material";
import ActionAreaCard from "../../components/common/CommonC.jsx";

const CarFactory = () => {
  const cars = [
    { id: 1, name: "Car 1", image: "car1.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, name: "Car 2", image: "car2.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Available Cars
      </Typography>
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid key={car.id} item xs={12} sm={6} md={4} lg={3}>
            <ActionAreaCard
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

export default CarFactory;
