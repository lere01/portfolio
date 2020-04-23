import React from "react";
import Card from "../../atoms/cards/card";
import Pic from "./foo1.jpg";
import "../../styles/app.css";

const PicCard = props => {
  return (
    <Card bigcard style={props.style}>
      <img src={Pic} class="meImage" alt="profile picture" />
    </Card>
  );
};

export default PicCard;
