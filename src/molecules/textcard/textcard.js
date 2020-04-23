import React from "react";
import Card from "../atoms/cards/card";
import Typo from "../atoms/typography/typo";

const TextCard = () => {
  return (
    <Card textcard>
      <Typo data-testid="texthead" subhead>
        SUBHEADING
      </Typo>
      <Typo data-testid="textbody" txt2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eos
        consequatur reiciendis non id doloremque hic sequi.
      </Typo>
    </Card>
  );
};

export default TextCard;
