import React, { useState, useRef } from 'react';
import axios from 'axios';
import './form.css';

const AddCarForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    fair: '',
    seat: '',
    color: '',
    mileage: '',
    type: '',
    city: '',
    image: null,
  });

  const [showRain, setShowRain] = useState(false);

  const ref = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/addcar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setShowRain(true);
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <section className="login">
      {showRain && (
        <div className="rain-container">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="login_box">
        <div className="left">
          <div className="contact">
            <form onSubmit={handleSubmit} encType="multipart/form-data" ref={ref}>
              <input type="text" name="brand" placeholder="Brand" onChange={handleChange} />
              <input type="text" name="model" placeholder="Model Name" onChange={handleChange} />
              <input type="text" name="fair" placeholder="Fair Price per Hour" onChange={handleChange} />
              <input type="text" name="seat" placeholder="Number of Seats" onChange={handleChange} />
              <input type="text" name="color" placeholder="Color" onChange={handleChange} />
              <input type="text" name="mileage" placeholder="Mileage" onChange={handleChange} />
              <input type="text" name="type" placeholder="Type" onChange={handleChange} />
              <input type="text" name="city" placeholder="City" onChange={handleChange} />
              <input type="file" name="image" id="upload-file" onChange={handleImageChange} />
              <button className="submit" type="submit">Add your Car</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-text">
            <h2>LONG DRIVE</h2>
            <h5>Make Your Ride Sensual</h5>
          </div>
          <div className="right-inductor" />
        </div>
      </div>
    </section>
  );
};

export default AddCarForm;
