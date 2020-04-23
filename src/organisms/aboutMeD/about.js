import React from "react";
import "../../styles/app.css";
import Container from "../../atoms/containers/container";
import Btn from "../../atoms/buttons/button";
import Typo from "../../atoms/typography/typo";

const AboutDiv = () => (
  <Container bgcontain>
    <Container txtcontain>
      <Typo darkhead>FAITH O. OYEDEMI</Typo>
    </Container>
    <Container txtcontain>
      <span>
        <hr />
        <Typo bluehead>DEVELOPER</Typo>
      </span>
    </Container>
    <Container txtcontain>
      <Typo txt4>About Me</Typo>
    </Container>
    <Container>
      <Typo txt3>
        I am a lover pf physics and a python developer. I aslo into data science.
      </Typo>
    </Container>

    <Container btncontain style={{justifyContent: "start", marginTop: "1rem", paddingLeft: "0"}}>
      <Btn primary link={"/recent"}>
        <Typo whitesub>PORTFOLIO</Typo>
      </Btn>
      <Btn secondary link={"/resume"}>
        <Typo txt4>RESUME</Typo>
      </Btn>
    </Container>
  </Container>
);

export default AboutDiv;
