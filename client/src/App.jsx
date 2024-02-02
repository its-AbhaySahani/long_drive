import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from "./pages/Home/Home.jsx";
import AddCarPage from "./pages/addcar";
import AboutPage from "./pages/about";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slide from "./components/slide/Slide";
import AboutSection from "./components/aboutsection/About";
import WhySection from "./components/whysection/Why.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

import { Fragment } from "react";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Fragment>
      <Header />

      <div className="app-container" Style={{ margin: "10px" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/addcar" element={<AddCarPage />} />
     
          </Routes>
        </Router>
        <AboutSection />
        <WhySection />
        <Slide />
      </div>
      <Footer />
    </Fragment>
    </ThemeProvider>
  );
}

export default App;
