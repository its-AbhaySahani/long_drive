import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/Home/Home.jsx";
import AddCar from "./pages/addcar/addcarform.jsx";
import AboutPage from "./pages/about";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slide from "./components/slide/Slide";
import AboutSection from "./components/aboutsection/About";
import WhySection from "./components/whysection/index.jsx";
import addCarForm from "./pages/addcar/addcarform.jsx";
import Contact from  "./pages/contactUs/Contact.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/addcar/Authorization.jsx";
import ViewCar from "./pages/ViewAddedCar/ViewAddedCar.jsx";
import userContext from "./context/userContext.jsx";
import Garage from "./pages/carFactory/Garage.jsx"
import CarDetails from "./pages/carDetails/Cardetails.jsx";
import { useState } from "react";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

import { Fragment } from "react";
function App() {
  const user = useState(null);
  return (
    <ThemeProvider theme={darkTheme}>
      <userContext.Provider value={user}>
      <Fragment>
        <Header />

        <div className="app-container" style={{ margin: "10px" }}>
          <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/addcar" element={<AddCar />} /> 
                <Route path="/vehicle" element={<Garage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/viewcar" element={<ViewCar />} />
                <Route path="/cars/:carId" element={<CarDetails/>} /> 
            </Routes>
          </Router>
        </div>
        <Footer />
      </Fragment>
      </userContext.Provider>
    </ThemeProvider>
  );
}

export default App;
