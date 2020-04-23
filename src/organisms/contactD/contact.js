import React from "react";
import "../../styles/app.css";
import Container from "../../atoms/containers/container";
import Typo from "../../atoms/typography/typo";
import TextCard from "../../atoms/cards/card";

const AboutDiv = () => (
  <Container bgcontain>
    <Container txtcontain>
      <Typo head>contact me</Typo>
    </Container>

    <TextCard textcard>
      <Typo txt4>Phone</Typo>
      <Typo txt2>+234 813 345 8982</Typo>
      <Typo txt2>+234 813 345 8982</Typo>
    </TextCard>

    <TextCard textcard>
      <Typo txt4>Email</Typo>
      <Typo txt2>faith.oyedemi@decagon.dev</Typo>
      <Typo txt2>faithoyedemi@yahoo.com</Typo>
    </TextCard>

    <TextCard textcard>
      <Typo txt4>Address</Typo>
      <Typo txt2>No. 18, Ijoma Odika Street, Atlantic View Estate</Typo>
      <Typo txt2>New Road, Lekki Peninsula II, Lagos</Typo>
    </TextCard>
  </Container>
);

export default AboutDiv;
