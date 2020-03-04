import React, { Component } from "react";
import HeroTitle from "../Components/HeroTitle";
import HeroWrapper from "../Components/HeroWrapper";
import HeroSubtitle from "../Components/HeroSubtitle";
import Button from "../Components/Button";
import FormWrapper from "../Components/FormWrapper";
import Label from "../Components/Label";
import Input from "../Components/Input";
import API from "../utils/API";

class GuildLeaderHome extends Component {
    state = {
        guildMembers: [
            "charles", "ben"
        ],
        characterName: "",
        guildName: "",
        serverName: "",
        classType: ""


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

    handleCharacterSubmit = event => {
        event.preventDefault();
        API.addCharacter({
            characterName: this.state.characterName,
            serverName: this.state.serverName,
            class: this.state.classType,
            guild: this.state.guildName
        })
            .then(res => this.setState({
                characterName: "",
                serverName: "",
                classType: "",
                guildName: ""
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
                        Guild Leader Home Page
                </HeroTitle>
                    <HeroSubtitle>
                        Your hub for guild management
                </HeroSubtitle>
                </HeroWrapper>
                <br />
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Guild Info
                            </HeroTitle>
                                <HeroSubtitle>
                                </HeroSubtitle>
                            </HeroWrapper>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6 is-offset-1">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Attendance
                            </HeroTitle>
                            </HeroWrapper>
                            <br />
                            <ul>
                                {this.state.guildMembers.map(item => (
                                    <div className="box">
                                        <p>{item}</p>
                                        <div className="field">
                                            <div className="control">
                                                <label className="radio">
                                                    <input type="radio" name={item} value="onTime" />
                                                    On-time
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" name={item} value="late" />
                                                    Late
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" name={item} value="earlyLeave" />
                                                    Early Leave
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" name={item} value="noCallNoShow" />
                                                    No-call-no-show
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" name={item} value="calledOut" />
                                                    Called Out
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            <br />
                            <Button onClick={this.handleFormSubmit}>Submit</Button>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Attendance Score
                            </HeroTitle>
                            </HeroWrapper>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-5 is-offset-1">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Add new character
                                </HeroTitle>
                            </HeroWrapper>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Add new character
                                </HeroTitle>
                            </HeroWrapper>
                                <br />
                            <FormWrapper>
                                <Label>
                                    Character Name:
                                </Label>
                                <Input 
                                    placeholder="Character Name" 
                                    name="characterName" 
                                    handleInputChange={this.handleInputChange} 
                                    value={this.state.characterName}
                                />
                                <br />
                                <Label>
                                    Guild Name:
                                </Label>
                                <Input 
                                    placeholder="Guild Name" 
                                    name="guildName" 
                                    handleInputChange={this.handleInputChange}
                                    value={this.state.guildName} 
                                />
                                <br />
                                <Label>
                                    Server Name:
                                </Label>
                                <Input 
                                    placeholder="Server Name" 
                                    name="serverName" 
                                    handleInputChange={this.handleInputChange} 
                                    value={this.state.serverName}
                                />
                                <br />
                                <Label>
                                    Class:
                                </Label>
                                <Input 
                                    placeholder="Class" 
                                    name="classType" 
                                    handleInputChange={this.handleInputChange} 
                                    value={this.state.classType}
                                />
                                <br />
                                <Button onClick={this.handleCharacterSubmit}>Add Character</Button>
                            </FormWrapper>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default GuildLeaderHome;