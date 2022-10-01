import React from "react";
import HeroBanner from "./HeroBanner";
import MenuBar from "./MenuBar";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Nav />
      <MenuBar />
      <HeroBanner />
    </>
  );
};

export default Header;
