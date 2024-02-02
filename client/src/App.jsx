import "./App.css";
import HomePage from "./pages/Home/Home.jsx";
import AddCarPage from "./pages/addcar";
import CarsPage from "./pages/cars";
import AboutPage from "./pages/about";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slide from "./components/slide/Slide";
import AboutSection from "./components/aboutsection/About";
import WhySection from "./components/whysection/Why.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Header />

      <div className="app-container" Style={{ margin: "10px" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/addcar" element={<AddCarPage />} />
            <Route path="/cars" element={<CarsPage />} />
          </Routes>
        </Router>
        <AboutSection />
        <WhySection />
        <Slide />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
