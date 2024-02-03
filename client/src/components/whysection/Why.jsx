import WhyCard from "./Whycard.jsx";
import styled from "styled-components";

const WhySection = () => {
  return (
    <Section>
      <h1 className="heading">Why Choose Any Ride?</h1>
      <p className="content">Discover the advantages of our bike and car rental system</p>
      <div className="why-section-container">
        <Container>
          <WhyCard
            heading="Bikes and Cars for Every Need"
            description="Whether you need a bike for a quick city ride or a car for a weekend getaway, we offer a diverse range of vehicles to suit your every need."
            imgUrl="https://example.com/image1.jpg"
          />
          <WhyCard
            heading="Secure and Reliable Rentals"
            description="Our rental system prioritizes your safety with verified vehicle conditions, emergency support, and real-time ride tracking, ensuring a secure and reliable travel experience."
            imgUrl="https://example.com/image2.jpg"
          />
        </Container>
        <Container>
          <WhyCard
            heading="Flexible Sharing Options"
            description="Choose from flexible sharing options like bike-sharing and car-sharing to enjoy affordable travel. Explore fixed routes with zero deviations through our Express service."
            imgUrl="https://example.com/image3.jpg"
          />
          <WhyCard
            heading="Entertainment on the Go"
            description="Enjoy in-cab entertainment with features like music, videos, and more through Any Ride Play. Stay connected even in areas with poor network coverage with our free WiFi facility."
            imgUrl="https://example.com/image4.jpg"
          />
        </Container>
      </div>
    </Section>
  );
};

const Section = styled.section`
  text-align: left;
  margin-top: 20px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  @media (min-width: 200px) and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default WhySection;
