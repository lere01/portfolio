import React from "react";
import "../../styles/app.css";

const Input = props => {
  return (
    <textarea
      class="my-input"
      placeholder={props.children}
      cols="4"
      rows="5"
    />
  );
};

export default Input;
