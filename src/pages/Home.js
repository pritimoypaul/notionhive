import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <h1>This is the home page</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 100px;
  h1 {
    color: blue;
  }
`;

export default Home;
