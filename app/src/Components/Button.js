import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className=" mt-3 rounded btn-primary shadow"
        id="butt"
        onClick={props.onClick}
      >
        Sign In
      </button>
    </div>
  );
}

export default Button;
