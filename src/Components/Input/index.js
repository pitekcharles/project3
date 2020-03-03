import React from "react";

function Input ({ placeholder }){
    return (
        <div className="control">
            <input className="input" type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input;