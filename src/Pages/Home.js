import React from "react";
import HeroWrapper from "../Components/HeroWrapper";
import FormWrapper from "../Components/FormWrapper";
import Label from "../Components/Label";
import Input from "../Components/Input";

function Home() {
    return (
        <>
            <HeroWrapper />
            <br />
            <div class="columns">
                <div class="column">
                    First column
                </div>
                <div class="column">
                    <FormWrapper>
                        <Label>
                            Username:
                        </Label>
                        <Input placeholder="Username" />
                        <Label>
                            Password:
                        </Label>
                        <Input placeholder="Password" />   
                    </FormWrapper>    
                </div>
               
            </div>
        </>
    );
}

export default Home;