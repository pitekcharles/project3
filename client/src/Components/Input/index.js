import React from "react";

function Input ({ placeholder, dataValue }){
    return (
        <div className="control">
            <input className="input" type="text" data-value={dataValue} placeholder={placeholder} />
        </div>
    )
}

export default Input;