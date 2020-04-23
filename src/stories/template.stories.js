import React from "react";
import Template1 from "../templates/template1/template";
import Template2 from "../templates/template2/template";

export default {
  title: "Templates",
  component: [Template1, Template2]
};

export const firstTemplate = () => <Template1></Template1>;

export const secondTemplate = () => <Template2></Template2>;
