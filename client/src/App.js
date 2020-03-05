import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarWrapper from "./Components/NavBarWrapper";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import NavBarItem from "./Components/NavBarItem";
import UserHome from "./Pages/UserHome";
import GuildLeaderHome from "./Pages/GuildLeaderHome";


function App() {
    return (
        <>
            <Router>
                <div>
                    <NavBarWrapper>
                        <NavBarItem route="/">
                            Home
                        </NavBarItem>
                        <NavBarItem route="/signup">
                            Sign Up
                        </NavBarItem>
                        <NavBarItem route="/userhome">
                            User
                        </NavBarItem>
                        <NavBarItem route="/guildleaderhome">
                            Guild Leader
                        </NavBarItem>
                    </NavBarWrapper>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/userhome" component={UserHome} />
                    <Route exact path="/guildleaderhome" component={GuildLeaderHome} />
                </div>
            </Router>
        </>
    );
}

export default App;
