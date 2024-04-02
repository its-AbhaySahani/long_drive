import { useState, useEffect } from 'react';
import './style.css';

const Slide = () => {
  const slides = [
    {
      img: "https://www.olacabs.com/webstatic/img/fleet-image/micro.png",
      alt: "Micro Bike",
      heading: "Hourly Micro Rentals",
      subHead: "Perfect for Short Rides",
      content: "Explore the city with our compact yet comfortable bikes and cars designed for short rides. Ideal for quick trips and small errands."
    },
    {
      img: "https://www.olacabs.com/webstatic/img/fleet-image/share.png",
      alt: "Share Bike",
      heading: "Hourly Share Rides",
      subHead: "Environmentally Friendly and Budget-Friendly",
      content: "Enjoy fully air-conditioned bikes and cars that you can share with others based on your route and location. Budget-friendly and eco-conscious travel."
    },
    {
      img: "https://www.olacabs.com/webstatic/img/fleet-image/prime-sedan.png",
      alt: "Prime Sedan",
      heading: "Hourly Prime Sedan Rentals",
      subHead: "Luxurious Sedans with Free WiFi",
      content: "Experience top-notch comfort with our prime sedan rentals. Our hand-picked fleet offers extra legroom, spacious boot, and complimentary WiFi, driven by top-rated drivers."
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div id="introslide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div className={`carousel-item ${index === activeSlide ? 'active' : ''}`} key={index}>
            <div className="slide-items">
              <img src={slide.img} alt={slide.alt} />
              <div>
                <h1 className="heading">{slide.heading}</h1>
                <h3 className="sub-head">{slide.subHead}</h3>
                <p className="content">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;