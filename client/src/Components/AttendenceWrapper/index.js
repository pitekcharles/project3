import React from "react";
import FormWrapper from "../FormWrapper";
import AttendenceItem from "../AttendenceItem";

function AttendenceWrapper({ name }) {
    return (
        <>
            <FormWrapper>
                <AttendenceItem name={name} />
            </FormWrapper>
        </>
    );
}

export default AttendenceWrapper;