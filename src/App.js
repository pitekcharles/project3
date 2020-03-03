import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarWrapper from "./Components/NavBarWrapper";
import Home from "./Pages/Home";


function App() {
    return (
        <>
            <Router>
                <div>
                    <NavBarWrapper>

                    </NavBarWrapper>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </>
    );
}

export default App;