import React from "react";
import Card from "../../atoms/cards/card";
import InfoBox from "../../molecules/informationBox/infobox";

const Side = () => {
  return (
    <Card thincard>
      <InfoBox style={{ width: "80%", marginLeft: "10%" }}></InfoBox>
    </Card>
  );
};

export default Side;
