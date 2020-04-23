import React from "react";
import "../../styles/app.css";
import FInput from "../../atoms/input/inputs";
import TextBox from "../../atoms/input/textarea";
import Btn from "../../atoms/buttons/button";
import Typo from "../../atoms/typography/typo";
import Container from "../../atoms/containers/container";

const Form = props => {
  return (
    <form class="my-form" style={props.style}>
      <Container txtcontain  style={{marginBottom: "3rem"}}>
        <Typo txt1 style={{color: 'snow'}}>send message</Typo>
      </Container>
      <FInput>Your Name</FInput>
      <FInput>Your Email</FInput>
      <FInput>Your Budget Range</FInput>
      <TextBox>Your Message</TextBox>

      <Btn primary>
        <Typo txt1 style={{ color: "#fff" }}>
          send message
        </Typo>
      </Btn>
    </form>
  );
};

export default Form;
