import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1>LET'S CONTACT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="button">CONTACT US</div>
      </div>
      <div className="copyright">Copyright @2022 | Notionhive</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    padding: 80px 0px;
    text-align: center;
    color: #fff;
    background-color: #000;
    h1 {
      color: #fff;
    }
    p {
      max-width: 650px;
      margin: 24px auto;
      margin-bottom: 40px;
    }
    .button {
      display: inline;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0.15em;
      padding: 16px 24px;
      background-color: #ea4715;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .copyright {
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    text-align: center;
    padding: 20px 0px;
  }
`;

export default Footer;
