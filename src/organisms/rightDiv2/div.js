import React from "react";
import Container from "../../atoms/containers/container";
import Card from "../../atoms/cards/card";
import Typo from "../../atoms/typography/typo";

const Div = () => {
  return (
    <Container bgcontain>
      <Container txtcontain style={{paddingLeft: "2rem"}}>
          <Typo head>EDUCATION</Typo>
      </Container>
      <Container btncontain>
        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>

        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>
      </Container>

      <Container btncontain>
        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>

        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>
      </Container>



      <Container txtcontain style={{paddingLeft: "2rem", marginTop:"2rem"}}>
          <Typo head>WORK EXPERIENCE</Typo>
      </Container>
      <Container btncontain>
        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>

        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>
      </Container>

      <Container btncontain>
        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>

        <Card textcard>
          <Typo subhead>SUBHEADING</Typo>
          <Typo txt2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            eos consequatur reiciendis non id doloremque hic sequi.
          </Typo>
        </Card>
      </Container>
    </Container>
  );
};

export default Div;
