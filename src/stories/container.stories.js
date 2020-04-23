import React from "react";
import { withA11Y } from "@storybook/addon-a11y";
import Container from "../atoms/containers/container";
import Typo from "../atoms/typography/typo";
import Btn from "../atoms/buttons/button";

export default {
  title: "Containers",
  component: Container,
  decorators: [withA11Y]
};

export const textContainer = () => (
  <Container txtcontain style={{margin: "8rem 35rem"}}>
    <Typo bluehead>SANTUSH</Typo>
  </Container>
);

export const buttonContainer = () => (
  <Container btncontain style={{margin: "8rem 35rem"}}>
    <Btn primary>
      <Typo whitesub>PROTFOLIO</Typo>
    </Btn>
    <Btn secondary>
      <Typo txt4>RESUME</Typo>
    </Btn>
  </Container>
);

export const bigContainer = () => (
  <Container bgcontain style={{width: '40vw', margin: '5rem auto'}}>
    <Container txtcontain>
      <Typo darkhead>SANTUSH</Typo>
    </Container>
    <Container txtcontain>
      <Typo bluehead>DEB</Typo>
    </Container>
    <Container txtcontain style={{margin: "1rem 0 0 0"}}>
      <Typo txt4>
        Lorem Ipsum dolor
      </Typo>
    </Container>
    <Container>
      <Typo txt3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
        dolor ratione perferendis quaerat, tenetur eius quas nobis sapiente
        nesciunt voluptate rem molestiae temporibus error fugit quidem aut
        assumenda! Voluptas, ipsum.
      </Typo>
    </Container>

    <Container btncontain style={{margin: "1.5rem 0 0 0"}}>
      <Btn primary>
        <Typo whitesub>PROTFOLIO</Typo>
      </Btn>
      <Btn secondary>
        <Typo txt4>RESUME</Typo>
      </Btn>
    </Container>

    <style>
        width: 70%;
    </style>
  </Container>
);

export const BigContainer2 = () => <Container bigContainer style={{margin: "8rem 35rem"}}>
    <Container txtcontain><Typo txt2>email</Typo></Container>
    <Container txtcontain><Typo txt3>faithoyedemi@yahoo.com</Typo></Container>
</Container>
