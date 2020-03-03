import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarWrapper from "./Components/NavBarWrapper";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import NavBarItem from "./Components/NavBarItem";
// import passport, {LocalStrategy} from "passport";

function App() {
    return (
        <>
            <Router>
                <div>
                    <NavBarWrapper>
                        <NavBarItem route="/">
                            Home
                        </NavBarItem>
                    </NavBarWrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                </div>
            </Router>
        </>
    );
}

export default App;
