import React from "react";
import Form from "../molecules/form/form";
import Container from "../atoms/containers/container";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Form",
  component: Form,
  decorators: [withA11y]
};

export const myForm = () => (
  <Container style={{ background: "#2b2b2b", padding: "3rem 1rem" }}>
    <Form style={{ width: "20rem", margin: "2rem 35rem" }}></Form>
  </Container>
);
