import styled from "styled-components";

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <h2>A vehicle for every occasion</h2>
      <p>
        We offer city taxis, cars, and bikes for every occasion at the best prices, available on an hourly basis.
      </p>
      <CardsContainer>
        <Card>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Dream Cars"
          />
          <div>
            <h3>Dream Cars</h3>
            <p>
              Cruise out of town with affordable one-way and round-trip fares through our intercity travel service. Select from a fleet of AC cabs driven by top-notch partners, available within 1 hour or book up to 7 days in advance. We've got you covered across India with a presence in 90+ cities and over 500 one-way routes.
            </p>
          </div>
        </Card>
        <Card>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O_TwqXkA8cZvpAQhervaO4BEjOtbXjYmdg&usqp=CAU.jpg"
            alt="Super Bikes"
          />
          <div>
            <h3>Super Bikes</h3>
            <p>
              Zoom out of town with our affordable one-way and round-trip fares in our intercity travel service. Choose from a variety of superbikes, all driven by top partners, available within 1 hour or book up to 7 days in advance. Covering 90+ cities with over 500 one-way routes across India.
            </p>
          </div>
        </Card>
        <Card>
          <img
            src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg"
            alt="Rentals"
          />
          <div>
            <h3>RENTALS</h3>
            <p>
              Experience the freedom with Long Drive! Rent a car or bike whenever and wherever you desire. Whether it's a day-long business meeting, a shopping spree with friends, or just exploring a new city, we've got you covered. Packages start at 1 hour and can be extended up to 12 hours!
            </p>
          </div>
        </Card>
      </CardsContainer>
    </AboutSectionContainer>
  );
};

const AboutSectionContainer = styled.section`
  text-align: initial;
  margin-top: 50px;
  background: linear-gradient(to right, #333, #555);
  color: #fff;
  padding: 30px;
  border-radius: 15px;

  > h2 {
    font-family: "Roboto Mono", monospace;
  }

  > p {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    > h2 {
      margin-top: 20px;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  padding: 20px;
  background-color: #eff0f1;
  width: calc(33.333% - 20px);
  border: 2px solid #cacdd0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  > div {
    h3 {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      color: #555;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #6b0050, #69006b);
    opacity: 0.8;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default AboutSection;
