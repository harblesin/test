import React from "react";

function Form(props) {
  return (
    <div>
      <input
        className={props.margin}
        placeholder={props.placeholder}
        name={props.name}
        handleInputChange={props.handleInputChange}
      />
    </div>
  );
}

export default Form;
