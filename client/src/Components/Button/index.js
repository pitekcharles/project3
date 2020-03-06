import React from "react";

function Button ({ children, onClick, type, data }) {
    return (
    <button className={"button " + type}  onClick={onClick} data-value={data}>{children}</button>
    );
}

export default Button;