import React from "react";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Thin from "../organisms/sidebar/thinsidebar";
import Wide from "../organisms/sidebar/widesidebar";

export default {
  title: "Sidebar",
  component: [Thin, Wide],
  decorators: [withA11y, withKnobs]
};

// export const SpecialSide = () => (
//   <Side
//     onclick={action("clicked")}
//     thincard={boolean("Thin Side Bar", true)}
//     fullcard={boolean("Wide Side Bar", false)}
//   ></Side>
// );

export const thinSidebar = () => <Thin></Thin>;

export const wideSidebar = () => <Wide></Wide>;
