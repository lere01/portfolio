import React from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";
import classnames from "classnames";

const Button = ({ secondary, primary, link, ...props }) => {
  const myClass = classnames({
    "my-btn-default": secondary,
    "my-btn-primary": primary
  });

  return (
    <Link to={link}>
      <button className={myClass}>{props.children}</button>
    </Link>
  );
};

export default Button;
