import React from "react";
import "../../styles/app.css";
import classnames from "classnames";

const Container = ({
  txtcontain,
  bgcontain,
  btncontain,
  containp,
  full,
  iconc,
  ...props
}) => {
  const myClass = classnames({
    "full-container": full,
    "container-pad": containp,
    "txt-container": txtcontain,
    "btn-container": btncontain,
    "big-container": bgcontain,
    "icon-container": iconc
  });
  return (
    <div className={myClass} style={props.style}>
      {" "}
      {props.children}{" "}
    </div>
  );
};

export default Container;
