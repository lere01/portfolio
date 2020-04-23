import React from "react";
import Container from "../../atoms/containers/container";
import Typo from "../../atoms/typography/typo";
import "../../styles/app.css";

const Div = () => {
  return (
    <Container bgcontain>
      <Container txtcontain>
        <Typo head style={{padding: "2rem 0 1rem 2rem"}}>recent works</Typo>
      </Container>
      <Container class="center" btncontain>
        <div class="recent" style={{ background: "lavender" }}></div>
        <div class="recent" style={{ background: "#ddd" }}></div>
      </Container>

      <Container class="center" btncontain>
        <div class="recent" style={{ background: "#eee" }}></div>
        <div class="recent" style={{ background: "lavender" }}></div>
      </Container>
    </Container>
  );
};

export default Div;
