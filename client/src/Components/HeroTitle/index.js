import React from "react";

function HeroTitle({ children }) {
    return (
        <h1 className="title">
            {children}
        </h1>
    );
}

export default HeroTitle;