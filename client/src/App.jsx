import React, { Fragment } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/Home/Home";







const App = () => {
    return (
        <div>
            <Header/>
        <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>

            <Footer/>
        </div>

    );
}

export default App;