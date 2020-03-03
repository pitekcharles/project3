import React from "react";
import HeroWrapper from "./Components/HeroWrapper";
// import "./App.sass"
import FormWrapper from "./Components/FormWrapper";
import Input from "./Components/Input";
import Label from "./Components/Label";
import NavBarWrapper from "./Components/NavBarWrapper";
import Home from "./components/pages/Home";


function App() {
    return (
        <>
            <NavBarWrapper />
            <HeroWrapper />
            <div className="box">
                <FormWrapper>
                    <Label>
                        test label
                    </Label>
                    <Input placeholder="testing" />
                </FormWrapper>
            </div>
        </>
    );
}

export default App;
