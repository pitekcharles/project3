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
    
    render (){
        return(
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
                                <>
                                    <p>{item}</p>
                                    <AttendenceWrapper name={item.name} />
                                </>
                            ))}
                        </ul>
                        <br />
                        <Button>Submit</Button>
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
        </>
        )
    }
    
}

export default GuildLeaderHome;