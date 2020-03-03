import React from "react";
import FormWrapper from "../Components/FormWrapper";
import Label from "../Components/Label";
import Input from "../Components/Input";
import Button from "../Components/Button";
import HeroTitle from "../Components/HeroTitle";
import HeroWrapper from "../Components/HeroWrapper";
import HeroSubtitle from "../Components/HeroSubtitle";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <HeroWrapper>
                <HeroTitle>
                    Guild Assistant
                </HeroTitle>
                <HeroSubtitle>
                    Your source for guild management tools
                </HeroSubtitle>
            </HeroWrapper>
            <br />
            <div className="columns">
                <div class="column">
                    <div className="box">
                        <HeroWrapper>
                            <HeroTitle>
                                About
                            </HeroTitle>
                        </HeroWrapper>

                        Add description here.
                    </div>
                </div>
                <div className="column">
                    <FormWrapper>
                        <HeroWrapper>
                            <HeroTitle>
                                Login
                            </HeroTitle>
                        </HeroWrapper>
                        <br />
                        <Label>
                            Username:
                        </Label>
                        <Input placeholder="Username" />
                        <br />
                        <Label>
                            Password:
                        </Label>
                        <Input placeholder="Password" />
                        <br />
                        <Button>Login</Button> 
                        <Link to="/signup"><Button>Sign Up</Button></Link>
                    </FormWrapper>
                </div>

            </div>
        </>
    );
}

export default Home;