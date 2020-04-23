import React from "react";
import Card from "../../atoms/cards/card";
import MForm from "../../molecules/form/form";
import "../../styles/app.css";

const PicCard = props => {
  return (
    
      <Card bigcard style={props.style}>
        <MForm style={{padding: "2rem", paddingTop: "4rem", maxWidth: "100%", maxHeight: "100%"}} />
      </Card>
    
  );
};

export default PicCard;
