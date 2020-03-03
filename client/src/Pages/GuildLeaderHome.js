import React from "react";
import HeroTitle from "../Components/HeroTitle";
import HeroWrapper from "../Components/HeroWrapper";
import HeroSubtitle from "../Components/HeroSubtitle";
import AttendenceWrapper from "../Components/AttendenceWrapper";

function GuildLeaderHome() {
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
                                Attendence
                            </HeroTitle>
                        </HeroWrapper>
                        <AttendenceWrapper />
                    </div>
                </div>
                <div className="column is-4">
                    <div className="box">
                        <HeroWrapper>
                            <HeroTitle>
                                Raid Schedule
                            </HeroTitle>
                        </HeroWrapper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuildLeaderHome;