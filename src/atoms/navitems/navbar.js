import React from "react";
import "../../styles/app.css";
import Nav from "../navigation/nav";

const NavBar = props => {
  return (
    <Nav class="my-navbar" style={props.style}>
      {props.children}
    </Nav>
  );
};

export default NavBar;
