import React from "react";
import Container from "../atoms/containers/container";
import LeftSide from "../organisms/sidebar/widesidebar";
import RightSide from "../organisms/rightDiv1/div";
import PictureCard from "../molecules/pictureCard/picture";
import "../styles/app.css";

const Page = () => {
  return (
    <Container full>
      <Container full>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Container>

      <PictureCard></PictureCard>
    </Container>
  );
};

export default Page;
