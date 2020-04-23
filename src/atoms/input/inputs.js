import React from "react";
import "../../styles/app.css";

const Input = props => {
  return <input class="my-input" placeholder={props.children} type="text" />;
};

export default Input;
