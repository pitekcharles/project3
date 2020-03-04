import React from "react";
import FormWrapper from "../FormWrapper";
import AttendenceItem from "../AttendenceItem";

function AttendenceWrapper({ name, onChange }) {
    return (
        <>
            <FormWrapper>
                <AttendenceItem name={name} onChange={onChange} />
            </FormWrapper>
        </>
    );
}

export default AttendenceWrapper;