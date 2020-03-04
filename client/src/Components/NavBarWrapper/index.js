import React from "react";

function NavBarWrapper ({ children }) {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <h1 className="navbar-item">
                        Guild Assistant
                    </h1>
                    {children}
                </div>
            </nav>       
        </> 
    );
}

export default NavBarWrapper;