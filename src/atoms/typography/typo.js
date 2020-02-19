import React from "react";
import "../../styles/app.css";
import classnames from "classnames";

const Typo = ({
  darkhead,
  bluehead,
  subhead,
  txt1,
  txt2,
  txt3,
  txt4,
  ...props
}) => {
  const myClass = classnames({
    "dark-head": darkhead,
    "blue-head": bluehead,
    "subhead": subhead,
    "txt1": txt1,
    "txt2": txt2,
    "txt3": txt3,
    "txt4": txt4
  });

  return <span className={myClass}>{props.children}</span>;
};

export default Typo;
