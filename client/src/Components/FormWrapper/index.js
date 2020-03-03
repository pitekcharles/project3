import React from "react";

function FormWrapper({ children }) {
    return (
        <div className="box">
            <div className="field">
                {children}
            </div>
        </div>
    )
}

export default FormWrapper;