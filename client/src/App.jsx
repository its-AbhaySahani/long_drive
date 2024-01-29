import React, { Fragment } from "react";
import SignInSide from "./components/UserSignin";
//import Home from "./components/Home";
//import { useState } from "react/cjs/hooks";
import Header from "./components/Header";

const App = () => {
    return (
        <Fragment>
            <Header/>
        
            <div>
                <SignInSide/>
             </div>
         </Fragment>
    );
}

export default App;