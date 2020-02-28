import React from "react";
import HeroTitle from "../HeroTitle";
import HeroSubtitle from "../HeroSubtitle";
 
function HeroWrapper() {
    return (
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <HeroTitle>
                        Guild Assistant
                    </HeroTitle>
                    <HeroSubtitle>
                        Your source for guild management tools
                    </HeroSubtitle>
                </div>
            </div>
        </section>
    )
}

export default HeroWrapper;