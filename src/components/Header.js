import React from "react";
import styled from "styled-components";
import HeroBanner from "./HeroBanner";
import MenuBar from "./MenuBar";
import Nav from "./Nav";

const Header = () => {
  return (
    <Wrapper>
      <Nav />
      <MenuBar />
      <HeroBanner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

export default Header;
