import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import Card from "../atoms/cards/card";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Typo from "../atoms/typography/typo";

export default {
  title: "myCards",
  component: Card,
  decorators: [withA11y, withKnobs]
};

export const textCard = () => (
  <Card textcard
  >
    <Typo subhead>SUBHEADING</Typo>
    <Typo txt2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos
      consequatur reiciendis non id doloremque hic sequi.
    </Typo>

  </Card>
);

export const pictureCard = () => (
    <Card bigcard></Card>
);
