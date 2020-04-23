import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Container from "../../atoms/containers/container";
import Typo from "../../atoms/typography/typo";
import "../../styles/app.css";

const SocialBox = () => {
  return (
    <Container bgcontain>
      <Container txtcontain>
        <Typo txt2 style={{ color: "#fff" }}>
          find me on
        </Typo>
      </Container>
      <Container iconc>
        <a href="facebook.com">
          <FiFacebook class="my-icon" />
        </a>
        <a href="https://www.twitter.com">
          <FiTwitter class="my-icon" />
        </a>
        <a href="https://www.linkedin.com">
          <AiFillLinkedin class="my-icon" />
        </a>
        <a href="hhtps://github.com/lere01">
          <FaGithub class="my-icon" />
        </a>
      </Container>
    </Container>
  );
};

export default SocialBox;
