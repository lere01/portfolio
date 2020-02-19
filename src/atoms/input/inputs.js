import React from "react";
import "../../styles/app.css";
import classnames from "classnames";

const Input = ({ myinput, ...props }) => {
  const myClass = classnames({ "my-input": myinput });

  return (
    <input className={myClass} placeholder="Full Name" type="text"/>
  )
};

export default Input;
