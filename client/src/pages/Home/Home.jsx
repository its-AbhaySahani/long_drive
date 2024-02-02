import "./home.css";
import AboutSection from "../../components/aboutsection/About";
import WhySection from "../../components/whysection/Why";
import Slide from "../../components/slide/Slide";
import styled from "styled-components";
//import CarCard from "../../components/common/CommonCard"
import CardDisplay from "../../components/common/CardDisplay";



const HomePage = () => {
  const arr = new Array(5).fill(5)
  return (
    <Container>
      <HomeSection>
        <div>
          <div className="head-text"> Drive To Your Destination </div>
          <div className="head-subtext"> Choose your route </div>
        </div>
      </HomeSection>
      <AboutSection />
      <CardDisplay headline="headline" cards={arr}/>
      <WhySection />
     
      <Slide />
      
    </Container>
  );
};
const Container = styled.div`
;
`;
const HomeIntro = styled.div`
  margin: 20px;
  color: #505056;
  background-color: #fef1f440;
  border-radius: 38px;
  > h2 {
    font-size: 2.6rem;
  }
`;

const HomeSection = styled.section`
  height: 400px;
  margin-bottom: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ::before {
    content: "";
    background-image: linear-gradient(to bottom, #121212, #12121255), url("https://w.wallha.com/ws/14/yWY4J2td.jpg");
    position: absolute;
    height: 80%;
    width: 100%;
    z-index: -1;
    opacity: 0.95;
    top: 0px;
    left: 0px;
  }
  > div {
    margin-top: 100px;
  }
  > div > h1 {
    font-family: "Anton", sans-serif;
  }
  > div > p {
    font-size: 1.3rem;
  }
`;
export default HomePage;
