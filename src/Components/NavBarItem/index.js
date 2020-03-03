import React from "react";
import { Link } from "react-router-dom";

function NavBarItem({ route, children }) {
    return (
        <Link className="navbar-item" to={route} >
            {children}
        </Link>
    )
}

export default NavBarItem;