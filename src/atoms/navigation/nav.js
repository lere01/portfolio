import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/app.css";

const Nav = props => {
  return (
    <nav style={props.style} class="my-navbar">
      <div style={{ width: "60%" }}></div>
      <div class="">
        <div class="my-nav-container">
          <div class="nav-item-box">
            <NavLink
              exact
              to="/"
              activeStyle={{ color: "purple" }}
              class="nav-item"
            >
              Home
            </NavLink>
          </div>

          <div class="nav-item-box">
            <NavLink
              exact
              to="/resume"
              activeStyle={{ color: "purple" }}
              class="nav-item"
            >
              Resume
            </NavLink>
          </div>

          <div class="nav-item-box">
            <NavLink
              exact
              to="/recent"
              activeStyle={{ color: "purple" }}
              class="nav-item"
            >
              Portfolio
            </NavLink>
          </div>

          <div class="nav-item-box">
            <NavLink
              exact
              to="/contact"
              activeStyle={{ color: "purple" }}
              class="nav-item"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
