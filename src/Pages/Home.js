import React from "react";
import HeroWrapper from "../Components/HeroWrapper";
import FormWrapper from "../Components/FormWrapper";
import Label from "../Components/Label";
import Input from "../Components/Input";
import Button from "../Components/Button";
import HeroTitle from "../Components/HeroTitle";
import HeroSubtitle from "../Components/HeroSubtitle";

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
            <div class="columns">
                <div class="column">
                    <div className="box">
                        <HeroWrapper>
                            <HeroTitle>
                                About
                            </HeroTitle>
                        </HeroWrapper>

                        This application is designed to be a one stop shop for all things gaming. Upon entering your login credentials, you will be able to mark yourself present for any and all guild related activities. The Guild Master (GM) will be able to post anything that may be applicable to the group as a whole. 
                    </div>
                </div>
                <div class="column">
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
                    </FormWrapper>
                </div>

            </div>
        </>
    );
}

export default Home;