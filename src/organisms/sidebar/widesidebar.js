import React from "react";
import Card from "../../atoms/cards/card";
import InfoBox from "../../molecules/informationBox/infobox";

const Side = () => {
  return (
    <Card fullcard>
      <InfoBox style={{ width: "80%", marginLeft: "5%" }}></InfoBox>
    </Card>
  );
};

export default Side;
