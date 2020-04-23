import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import Div from "../organisms/rightDiv2/div";

export default {
  title: "Right Division Template2",
  component: Div,
  decorators: [withA11y]
};

export const Division = () => <Div></Div>;
