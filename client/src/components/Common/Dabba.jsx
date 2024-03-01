import * as React from "react";
import axios from "axios";
import ActionAreaCard from "./Commoncard";

export default function Dabba({ carid }) {
  const [car, setCar] = React.useState({});
  React.useEffect(() => {
    axios.get("http://localhost:5000/cars/" + carid).then((res) => {
      setCar(res.data);
    });
  }, [car]);

  
  const handleCardClick = (carId) => {
    // Navigate to car details page with specific car ID
    // You can define the route structure in your React Router configuration
  };

  return (
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
  );
}
  