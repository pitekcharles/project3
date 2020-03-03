import React from "react";
import FormWrapper from "../Components/FormWrapper";
import Label from "../Components/Label";
import Input from "../Components/Input";
import Button from "../Components/Button";
import HeroTitle from "../Components/HeroTitle";
import HeroWrapper from "../Components/HeroWrapper";
import HeroSubtitle from "../Components/HeroSubtitle";
import { Form } from "react-bulma-components";

function SignUp() {
    return (
        <>
            <HeroWrapper>
                <HeroTitle>
                    Sign Up
                </HeroTitle>
                <HeroSubtitle>
                    To start using Guild Assistant fill out the following sign up form
                </HeroSubtitle>
            </HeroWrapper>
            <br />
            <div className="columns is-mobile">
                <div className="column is-10 is-offset-1">
                    <div className="box">
                        <HeroWrapper>
                            <HeroTitle>
                                Welcome New User
                            </HeroTitle>
                        </HeroWrapper>
                        <FormWrapper>
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
                            <Label>
                                Confirm Password:
                            </Label>
                            <Input placeholder="Confirm Password" />
                        </FormWrapper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;