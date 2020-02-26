import React from "react";
import "../../styles/app.css";
import classnames from "classnames";

const Card = ({ bigcard, textcard, ...props }) => {
  const myClass = classnames({ "bigcard": bigcard, "textcard": textcard });
  return <div className={myClass}>{props.children}</div>;
};

export default Card;
