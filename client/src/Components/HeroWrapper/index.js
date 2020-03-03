import React from "react";
import HeroTitle from "../HeroTitle";
import HeroSubtitle from "../HeroSubtitle";
 
function HeroWrapper({ children }) {
    return (
        <section className="hero is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default HeroWrapper;