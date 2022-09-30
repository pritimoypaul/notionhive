import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <Wrapper>
        <h1>navigation top</h1>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  h1 {
    color: blue;
  }
`;

export default Nav;
