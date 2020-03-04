import React from "react";

function AttendenceItem({ name }) {
    return (
        <div className="control">
            <label className="radio">
                <input type="radio" name={name} value="onTime" checked={true} />
                On-time
            </label>
            <label className="radio">
                <input type="radio" name={name} value="late" />
                Late 
            </label>
            <label className="radio">
                <input type="radio" name={name} value="earlyLeave" />
                Early Leave 
            </label>
            <label className="radio">
                <input type="radio" name={name} value="noCallNoShow" />
                No-call-no-show 
            </label>
            <label className="radio">
                <input type="radio" name={name} value="calledOut" />
                Called Out 
            </label>
        </div>
    )
}

export default AttendenceItem;