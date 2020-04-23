import React from "react";
import "../../styles/app.css";
import Typo from "../../atoms/typography/typo";
import Container from "../../atoms/containers/container";
import Social from "../socialmedia/socialmedia";

const Info = props => {
  return (
    <Container bgcontain style={props.style}>
      <Container bgcontain>
        <Container txtcontain>
          <Typo txt2 style={{ color: "white" }}>
            Email
          </Typo>
        </Container>
        <Container txtcontain>
          <Typo txt3 style={{ color: "white" }}>
            faithoyedemi@gmail.com
          </Typo>
        </Container>
      </Container>

      <Container bgcontain>
        <Container txtcontain>
          <Typo txt2 style={{ color: "white" }}>
            Phone
          </Typo>
        </Container>
        <Container txtcontain>
          <Typo txt3 style={{ color: "white" }}>
            +234 813 345 8982
          </Typo>
        </Container>
      </Container>

      <Social></Social>
    </Container>
  );
};

export default Info;
