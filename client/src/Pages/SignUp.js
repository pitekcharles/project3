import React, { Component } from "react";
import FormWrapper from "../Components/FormWrapper";
import Label from "../Components/Label";
import Input from "../Components/Input";
import Button from "../Components/Button";
import HeroTitle from "../Components/HeroTitle";
import HeroWrapper from "../Components/HeroWrapper";
import HeroSubtitle from "../Components/HeroSubtitle";
import { Link } from "react-router-dom";
import API from "../utils/API";


class SignUp extends Component {
    state = {
        username: false,
        password: false,
        confirmPassword: false,
        email: false,
    };


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("go for it")
    }

    handleSignUpSubmit = event => {
        event.preventDefault();
        API.signup({
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            email: this.state.email,
        })
            .then(res => this.setState({
                username: "",
                password: "",
                confirmPassword: "",
                email: ""
            }))
            .catch(err => console.log(err));
    }

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        })
    }

    render() {
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
                                <Input placeholder="Username" dataValue="username" />
                                <br />
                                <Label>
                                    Password:
                            </Label>
                                <Input placeholder="Password" dataValue="password" />
                                <br />
                                <Label>
                                    Confirm Password:
                            </Label>
                                <Input placeholder="Confirm Password" dataValue="passwordConfirm" />
                                <br />
                                <Label>
                                    Email:
                            </Label>
                                <Input placeholder="email" dataValue="email" />
                                <br />
                                <Button onClick={this.handleSignUpSubmit}>Create Account</Button>

                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default SignUp;