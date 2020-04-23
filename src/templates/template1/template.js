import React from "react";
import Container from "../../atoms/containers/container";
import LeftSide from "../../organisms/sidebar/widesidebar";
import RightSide from "../../organisms/rightDiv1/div";
import PictureCard from "../../atoms/cards/card";
import "../../styles/app.css";

const Page = () => {
  return (
    <Container full>
      <Container full>
        <LeftSide></LeftSide>
        <RightSide ></RightSide>
      </Container>

      <PictureCard
        bigcard
        style={{
          position: "absolute",
          left: "15rem",
          top: "5%"
        }}
      ></PictureCard>
    </Container>
  );
};

export default Page;
