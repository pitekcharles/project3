import React from "react";

function AttendenceItem() {
    return (
        <div className="control">
            <label className="radio">
                <input type="radio" name="answer" />
                On-time
            </label>
            <label className="radio">
                <input type="radio" name="answer" />
                Late 
            </label>
            <label className="radio">
                <input type="radio" name="answer" />
                Early Leave 
            </label>
            <label className="radio">
                <input type="radio" name="answer" />
                No-call-no-show 
            </label>
            <label className="radio">
                <input type="radio" name="answer" />
                Called Out 
            </label>
        </div>
    )
}

export default AttendenceItem;