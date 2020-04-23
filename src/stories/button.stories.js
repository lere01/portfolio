import React from "react";
// import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import Button from "../atoms/buttons/button";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "myButtons",
  component: Button,
  decorators: [withA11y, withKnobs]
};

export const SpecialButton = () => (
  <Button
    // onClick={action("clicked")}
    secondary={boolean("secondary", true)}
    primary={boolean("primary", false)}
    link={'/resume'}
  >
    PORTFOLIO
  </Button>
);

