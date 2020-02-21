import React from "react";
import "../../styles/app.css";
import TextCard from "../../atoms/cards/card";
import Button from "../../atoms/buttons/button";
import Typo from "../../atoms/typography/typo";

const Info = () => {
  return (
    <TextCard>
      <Typo darkhead>SANTUSH</Typo>
      <Typo bluehead>DEB</Typo>
      <Typo>Creative Director - Saint Studios</Typo>
      <Typo>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, debitis
        adipisci! Rem a delectus rerum molestiae sequi ipsa laboriosam, suscipit
        ratione. Cum accusamus reprehenderit natus incidunt iusto quam numquam
        laboriosam.
      </Typo>
      <Button primary></Button>
      <Button secondary></Button>
    </TextCard>
  );
};

export default Info;
