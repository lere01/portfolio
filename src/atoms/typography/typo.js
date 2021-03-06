import React from "react";
import "../../styles/app.css";
import classnames from "classnames";

const Typo = ({
  darkhead,
  whitehead,
  bluehead,
  subhead,
  whitesub,
  sub,
  head,
  txt1,
  txt2,
  txt3,
  txt4,
  ...props
}) => {
  const myClass = classnames({
    "dark-head": darkhead,
    "whitehead": whitehead,
    "blue-head": bluehead,
    "subhead": subhead,
    "white-subhead": whitesub,
    "sub": sub,
    "head": head,
    "txt1": txt1,
    "txt2": txt2,
    "txt3": txt3,
    "txt4": txt4
  });

  return <span className={myClass} style = { props.style }>{props.children}</span>;
};

export default Typo;
