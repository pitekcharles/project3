import React, { Children } from "react";

function NavBarWrapper ({ children }) {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        Guild assistant
                    </a>
                    {children}
                </div>
            </nav>       
        </> 
    );
}

export default NavBarWrapper;