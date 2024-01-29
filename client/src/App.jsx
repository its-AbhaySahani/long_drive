import React, { Fragment } from "react";
import SignInSide from "./components/UserSignin";
//import Home from "./components/Home";
//import { useState } from "react/cjs/hooks";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom"

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
            
                <div>
                    <SignInSide/>
                </div>
            </BrowserRouter>
         </Fragment>
    );
}

export default App;