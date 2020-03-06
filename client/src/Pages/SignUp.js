import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
// import FormWrapper from "../Components/FormWrapper";
// import Label from "../Components/Label";
// import Input from "../Components/Input";
// import Button from "../Components/Button";
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

    componentDidMount() {
        console.log(this.props);
        this.validatePassword();
    }

    componentDidUpdate() {

        // functions to check the input fields, and update the state if they are valid
        this.confirmPassword();
        this.validatePassword();
        this.passwordMessage();
        this.validateEmail();
        this.validUsername();
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    // uses regex to check is email is valid
    validateEmail = () => {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let valid = validEmail.test(this.props.email);
        if (!this.state.validEmail && valid) {
            this.setState({
                validEmail: true
            });
        }
        if (this.state.validEmail && !valid) {
            this.setState({
                validEmail: false
            });
        }
    }

    // make sure username is at least 5 characters
    validUsername = () => {
        if (this.props.username.length > 4 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }

        if (this.props.username.length < 4 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    // checks is password meets regex test (at least 8 letters, 1 capital and 1 number)
    validatePassword = () => {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    // checks if 2 password fields match
    confirmPassword = () => {
        if (!this.state.confirmPassword && this.state.password !== "" && this.state.password === this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.state.confirmPassword && this.state.password !== this.props.password) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    // displays the password message if it exists
    passwordMessage = () => {
        let message = "at least 8 letters, 1 capital & 1 number"
        if (this.props.password !== "" && !this.state.validPassword && this.state.passwordMessage !== message) {
            this.setState({
                passwordMessage: message
            });
        }
        if (this.state.validPassword && this.state.passwordMessage !== "") {
            this.setState({
                passwordMessage: ""
            });
        }
        if (this.state.passwordMessage === message && this.props.password === "") {
            this.setState({
                passwordMessage: ""
            });
        }
    }


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
                            <Form>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                                    <FormText>{this.state.passwordMessage}</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Confirm Password</Label>
                                    <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" value={this.state.password} onChange={this.handleInputChange} valid={this.state.confirmPassword} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} valid={this.state.validEmail} />
                                </FormGroup>
                                {/* if all fields are valid, allow the user to submit the form */}
                                {( this.state.validEmail && this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                                    <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                                ) : (
                                        <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                                    )}
                                <p className="signupLink">
                                    <Link to="/login">already have an account?  Sign in here</Link>
                                </p>
                            </Form>

                            {/* <FormWrapper>
                                <Label>
                                    Username:
                            </Label>
                            //     {/* <Input placeholder="Username" dataValue="username" /> */}
                            {/* //     <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} handleInputChange={this.props.handleInputChange} valid={this.state.validUsername} />
                            //     <br />
                            //     <Label>
                            //         Password:
                            // </Label> */}
                            //     {/* <Input placeholder="Password" dataValue="password" /> */}
                            {/* //     <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} handleInputChange={this.props.handleInputChange} valid={this.state.validPassword} />
                            //     <FormText>{this.state.passwordMessage}</FormText>
                            //     <br />
                            //     <Label>
                            //         Confirm Password: */}
                            {/* // </Label> */}
                            //     {/* <Input placeholder="Confirm Password" dataValue="passwordConfirm" /> */}
                            {/* //     <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" value={this.state.password} handleInputChange={this.handleInputChange} valid={this.state.confirmPassword} />
                            //     <br />
                            //     <Label>
                            //         Email:
                            // </Label> */}
                            //     {/* <Input placeholder="email" dataValue="email" /> */}
                            {/* //     <Input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} handleInputChange={this.props.handleInputChange} valid={this.state.validEmail} />
                            //     <br />
                            //     <Button onClick={this.handleSignUpSubmit}>Create Account</Button>

                            //     {(this.state.validEmail && this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? ( */}
                            {/* //         <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                            //     ) : (
                            //         <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                            //         )}
                            //     <p className="signupLink">
                            //         <Link to="/login">already have an account?  Sign in here</Link>
                            //     </p> */}

                            {/* // </FormWrapper> */} */}
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default SignUp;