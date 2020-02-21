import React from "react";
import "../../styles/app.css";
// import classnames from "classnames";

const Input = (props) => {
  // const myClass = classnames({ "my-input": myinput });

  return (
    <input class="my-input" placeholder={ props.children } type="text"/>
  )
};

export default Input;
