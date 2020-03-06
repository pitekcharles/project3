import React from "react";

function Input ({ placeholder, dataValue, handleInputChange, value, name, type }){
    return (
        <div className="control">
            <input className="input" 
                type="text" 
                data-value={dataValue} 
                placeholder={placeholder} 
                onChange={handleInputChange}
                value={value}
                name={name}
                type={type} />
        </div>
    )
}

export default Input;