import React from "react";
import Container from "../atoms/containers/container";
import LeftSide from "../organisms/sidebar/widesidebar";
import RightSide from "../organisms/contactrightdiv/div";
import FormCard from "../organisms/formdiv/formdiv";
// import "../../styles/app.css";
import "../styles/app.css";

const Page = () => {
  return (
    <Container full>

      <FormCard></FormCard>
      
      <Container full>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </Container>
      
    </Container>
  );
};

export default Page;
