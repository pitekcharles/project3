import React, { Component } from "react";
import HeroTitle from "../Components/HeroTitle";
import HeroWrapper from "../Components/HeroWrapper";
import HeroSubtitle from "../Components/HeroSubtitle";
import AttendenceWrapper from "../Components/AttendenceWrapper";
import Button from "../Components/Button";

class GuildLeaderHome extends Component {
    state = {
        guildMembers: [
            "charles", "ben"
        ]

    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("go for it")
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
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default GuildLeaderHome;