import React from "react";
import HeroWrapper from "./Components/HeroWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormWrapper from "./Components/FormWrapper";
import Input from "./Components/Input";
import Label from "./Components/Label";
import NavBarWrapper from "./Components/NavBarWrapper";
import Home from "./Pages/Home";


function App() {
    return (
        <>
            <Router>
                <div>
                    <NavBarWrapper />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </>
    );
}

export default App;
