import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/Home/Home.jsx";
import AddCar from "./pages/addcar";
import AboutPage from "./pages/about";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slide from "./components/slide/Slide";
import AboutSection from "./components/aboutsection/About";
import WhySection from "./components/whysection/index.jsx";
import CarFactory from "./pages/carFactory/CarFactory.jsx";
import BikeFactory from "./pages/bikeFactory/BikeFactory.jsx";
import addCarForm from "./pages/addcar/addcarform.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

import { Fragment } from "react";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Fragment>
        <Header />

        <div className="app-container" style={{ margin: "10px" }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/addcar" element={<AddCar />} />
              <Route path="/cars" element={<CarFactory />} />
              <Route path="/addform" element={<addCarForm />} />
              <Route path="/bikes" element={<BikeFactory />} />

            </Routes>
          </Router>
        </div>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
