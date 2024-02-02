// BikeFactory.js

import React from "react";
import { Grid, makeStyles } from "@mui/material";
import ActionAreaCard from "../../components/common/CommonCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const BikeFactory = () => {
  const classes = useStyles();

  // Dummy bike data for demonstration
  const bikes = [
    {
      id: 1,
      title: "Mountain Bike",
      description: "An excellent bike for off-road adventures.",
      image: "/images/mountain_bike.jpg",
    },
    {
      id: 2,
      title: "City Bike",
      description: "Perfect for commuting in the city with style.",
      image: "/images/city_bike.jpg",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {bikes.map((bike) => (
          <Grid item xs={12} sm={6} md={4} key={bike.id}>
            <ActionAreaCard
              title={bike.title}
              description={bike.description}
              image={bike.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BikeFactory;
