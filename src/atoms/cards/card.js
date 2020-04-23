import React from "react";
import "../../styles/app.css";
import classnames from "classnames";

const Card = ({ bigcard, fullcard, textcard, thincard, ...props }) => {
  const myClass = classnames({
    "bigcard": bigcard,
    "textcard": textcard,
    "fullcard": fullcard,
    "thinfullcard": thincard
  });
  return (
    <div style={props.style} className={myClass}>
      {props.children}
    </div>
  );
};

export default Card;
