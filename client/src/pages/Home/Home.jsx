import { useState } from "react";
import "./home.css";
import AboutSection from "../../components/aboutsection/About";
import WhySection from "../../components/whysection/Why";
import Slide from "../../components/slide/Slide";
import styled from "styled-components";
//import CarCard from "../../components/common/CommonCard"
import CardDisplay from "../../components/common/CardDisplay.jsx";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

const HomePage = () => {
  const arr = new Array(5).fill(5);
  const [value, setValue] = useState([ 
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);
  return (
    <Container>
      <HomeSection className="hero">
        <div>
          <div className="head-text"> Drive To Your Destination </div>
          <div className="head-subtext"> Choose Your Route </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Start Time"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                sx={{
                  background:"#121212"
                }}
              />
          </LocalizationProvider>
        </div>
      </HomeSection>
      <AboutSection />
      <CardDisplay headline="headline" cards={arr} />
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
  background-color: #121212;
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
