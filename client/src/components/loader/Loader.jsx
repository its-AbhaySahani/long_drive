import React from "react";
import "./Loader.css";
import carWheelAnimation from "../../assets/loaderGif.gif";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={carWheelAnimation} alt="Your page is Loading" />
    </div>
  );
};

export default Loader;
