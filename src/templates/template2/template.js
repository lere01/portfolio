import React from "react";
import Container from "../../atoms/containers/container";
import LeftSide from "../../organisms/sidebar/thinsidebar";
import RightSide from "../../organisms/rightDiv2/div";
import "../../styles/app.css";

const Page = () => {
  return (
    <Container full>
      <Container full>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Container>
    </Container>
  );
};

export default Page;
