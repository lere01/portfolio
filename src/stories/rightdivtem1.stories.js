import React from "react";
import Right from "../organisms/rightDiv1/div";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Landing Right Division",
  component: Right,
  decorators: [withA11y]
};

export const firstRight = () => <Right></Right>;
