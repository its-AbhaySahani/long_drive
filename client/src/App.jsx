import React, { Fragment } from "react";
import SignInSide from "./components/UserSignin";
//import Home from "./components/Home";
//import { useState } from "react/cjs/hooks";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom"
import Footer from "./components/Footer";

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
            
                <div>
                    <SignInSide/>
                </div>
                <Footer/>
            </BrowserRouter>
         </Fragment>
    );
}

export default App;