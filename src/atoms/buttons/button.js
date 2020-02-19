import React from "react";
// import "./output.css";
import "../../styles/app.css";
import classnames from "classnames";

const Button = ({ secondary, primary, ...props }) => {
  const myClass = classnames({
    "my-btn-default": secondary,
    "my-btn-primary": primary
  });
  return <button className={myClass}>{props.children}</button>;
};

export default Button;
