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
        guildMembers: [],
        characterName: "",
        guildName: "",
        serverName: "",
        classType: ""
    };

    componentDidMount() {
        this.populateAttendanceTracker()
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    populateAttendanceTracker = () => {
        API.getCharacters()
            .then(response => {
                var characterArray = [];
                for (var i = 0; i < response.data.length; i++) {
                    characterArray.push({
                        characterName: response.data[i].characterName,
                        characterId: response.data[i]._id,
                        attendanceScore: response.data[i].attendanceScore
                    })
                }
                this.setState({ guildMembers: characterArray })
                console.log(response);
            })
    }

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
        this.populateAttendanceTracker();

    }

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        })
    }

    attendanceOnTime = event => {
        event.preventDefault();
        var id = event.target.getAttribute("data-value")
        var characterArray = this.state.guildMembers.filter(item => item.characterId === id);
        var newScore = characterArray[0].attendanceScore;
        newScore = newScore + 1;
        API.updateCharacter(id, { attendanceScore: newScore })
            .then(res => this.populateAttendanceTracker())
            .catch(err => console.log(err))
    }

    attendanceNoShow = event => {
        event.preventDefault();
        var id = event.target.getAttribute("data-value")
        var characterArray = this.state.guildMembers.filter(item => item.characterId === id);
        var newScore = characterArray[0].attendanceScore;
        newScore = newScore - 1;
        API.updateCharacter(id, { attendanceScore: newScore })
            .then(res => this.populateAttendanceTracker())
            .catch(err => console.log(err))
    }

    attendanceLate = event => {
        event.preventDefault();
        var id = event.target.getAttribute("data-value")
        var characterArray = this.state.guildMembers.filter(item => item.characterId === id);
        var newScore = characterArray[0].attendanceScore;
        newScore = newScore - .5;
        API.updateCharacter(id, { attendanceScore: newScore })
            .then(res => this.populateAttendanceTracker())
            .catch(err => console.log(err))
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
                    <div className="column is-5 is-offset-1">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Attendance
                            </HeroTitle>
                            </HeroWrapper>
                            <br />
                            <ul>
                                {this.state.guildMembers.map(item => (
                                    <>
                                        <li key={item.characterId}>
                                            <div className="box" >
                                                <p>{item.characterName}</p>
                                                <div className="field">
                                                    <div className="control">
                                                        <div className="row">
                                                            <div className="columns">
                                                                <div className="column is-2">
                                                                    <Button
                                                                        type="is-success is-small"
                                                                        data={item.characterId}
                                                                        onClick={this.attendanceOnTime}
                                                                    >
                                                                        --On time--
                                                                    </Button>
                                                                </div>
                                                                <div className="column is-2">
                                                                    <Button
                                                                        type="is-warning is-small"
                                                                        data={item.characterId}
                                                                        onClick={this.attendanceLate}
                                                                    >
                                                                        ----Late----  
                                                                    </Button>
                                                                </div>
                                                                <div className="column is-2">
                                                                    <Button
                                                                        type="is-warning is-small"
                                                                        data={item.characterId}
                                                                        onClick={this.attendanceLate}
                                                                    >
                                                                        Leave Early
                                                                    </Button>
                                                                </div>
                                                                <div className="column is-2">
                                                                    <Button
                                                                        type="is-danger is-small"
                                                                        data={item.characterId}
                                                                        onClick={this.attendanceNoShow}
                                                                    >
                                                                        -No Show-
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <br />
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="column is-5">
                        <div className="box">
                            <HeroWrapper>
                                <HeroTitle>
                                    Attendance Score
                                </HeroTitle>
                            </HeroWrapper>
                            <br />
                            <ul>
                                {this.state.guildMembers.map(item => (
                                    <>
                                        <li key={item.characterId}>
                                            <div className="box">
                                                <p>Character: {item.characterName}</p>
                                                <br />
                                                <p>Attendence Score: {item.attendanceScore}</p>
                                            </div>
                                        </li>
                                        <br />
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-10 is-offset-1">
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