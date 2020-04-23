import React from "react";
import Container from "../../atoms/containers/container";
import ContactDiv from "../contactD/contact";

const RightDiv1 = props => {
  return (
    <Container containp>
      {props.children}
      <ContactDiv></ContactDiv>
    </Container>
  );
};

export default RightDiv1;
