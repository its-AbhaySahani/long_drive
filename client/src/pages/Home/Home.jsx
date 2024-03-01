import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import AboutSection from "../../components/aboutsection/About";
import WhySection from "../../components/whysection/index.jsx";
import Slide from "../../components/slide/Slide";
import styled from "styled-components";
//import CarCard from "../../components/common/CommonCard"
import CardDisplay from "../../components/common/Carddispley.jsx";
import { Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import Select from "@mui/material/Select";

const HomePage = () => {
  const arr = new Array(8).fill(5);
  const [value, setValue] = useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  const [location, setLocation] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    type: "",
    color: "",
    brand: "",
    city: "",
    seat: "",
    fare: "",
  });
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const fetchFilteredCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/car/filter", {
          params: filterOptions,
        });
        setFilteredCars(response.data);
      } catch (error) {    
        console.error("Error fetching filtered cars:", error);
      }
    };
    fetchFilteredCars();
  }, [filterOptions]);

  return (
    <Container>
      <HomeSection>
        <div className="hero">
          <div className="head-text"> Drive To Your Destination </div>
          <div className="head-subtext"> Choose Your Route </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <DateTimePicker   
                label="Start Time"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                sx={{
                  background: "#222222",
                }}
              />

              <DateTimePicker
                label="End Time"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                sx={{
                  background: "#222222",
                }}
              />
              <FormControl fullwidth>
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                  labelId="location-select"
                  id="location-select"
                  value={location}
                  label="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  sx={{
                    width: "200px",
                    background: "#222222",
                  }}
                >
                  <MenuItem value={"Jalandhar"}>Jalandhar</MenuItem>
                  <MenuItem value={"Phagwara"}>Phagwara</MenuItem>
                  <MenuItem value={"Amritsar"}>Amritsar</MenuItem>
                  <MenuItem value={"Ludhiana"}>Ludhiana</MenuItem>
                  <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
                  <MenuItem value={"Sambalpur"}>Sambalpur</MenuItem>
                </Select>
              </FormControl>
            </div>
          </LocalizationProvider>
          <a href={"/LongDrive/#/Search/" + location}>
            <Button>Search</Button>
          </a>
        </div>
      </HomeSection>
      <AboutSection />
      <CardDisplay
        headline="Explore SuperCars"
        cards={[
          "ba6e1177-f319-4141-99f2-0c46fd903359",
          "b3dc3cc8-d874-465d-a01c-6b321ae7b194",
          "b0f4dafa-1da1-4320-a4c4-dbab9f19fdd3",
          "b22ab371-5cf7-4d06-b686-5ba795813af0",
        ]}
      />
      <CardDisplay
        headline="Explore SuperBikes"
        cards={[
          "88daeb28-e255-4ec3-bd6f-59feb56f3598",
          "5f7020d6-bd3b-4daa-a9cc-ae24dd7c5a7d",
          "a53f06ee-2591-48af-8cde-123412e7feb5",
          "1d7c4f91-865c-45fc-8ef6-f30eeffcb36d",
        ]}
      />
      <CardDisplay
        headline="Budget Vehicles"
        cards={[
          "aaee6437-3731-4e56-a420-e8c316a33dee",
          "7799f028-f8fe-46cd-85c8-c97a2074baca",
          "78d2c936-1d99-4e47-a1d2-f42378d660e4",
          "de9cc1dd-d957-4d72-a771-a764c221c97e",
        ]}
      />

      <WhySection />

      <Slide />
    </Container>
  );
};
const Container = styled.div``;
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
  height: calc(100vh - 68.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.95;
    top: 0px;
    left: 0px;
  }
  > div > h1 {
    font-family: "Anton", sans-serif;
  }
  > div > p {
    font-size: 1.3rem;
  }
`;
export default HomePage;
