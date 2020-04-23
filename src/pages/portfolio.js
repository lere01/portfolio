import React from "react";
import Container from "../atoms/containers/container";
import LeftSide from "../organisms/sidebar/thinsidebar";
import RightSide from "../organisms/rightdivportfolio/div";
import "../styles/app.css";

const Resume = () => {
  return (
    <Container full>
      <Container full>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Container>
    </Container>
  );
};

export default Resume;
