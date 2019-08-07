import React from "react";

function Button (props){
    return(
        <div>
            <label htmlFor="butt">Click this thing please 
            </label>
            <button className="ml-4 btn-primary shadow"id="butt" onClick={props.changePage}>
                Click it.
            </button>
        </div>
    )
}

export default Button;