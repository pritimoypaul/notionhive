import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Wrapper>
      <div className="heading">
        <h1>ABOUT US</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="container">
        <div className="about-main">
          <div className="left-content">
            <div className="portrait">
              <img src={process.env.PUBLIC_URL + "/images/christina.jpg"} />
            </div>
            <div className="rect">
              <h1>1</h1>
            </div>
          </div>
          <div className="right-content">
            <h1>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="button">LEARN MORE</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .heading {
    text-align: center;
    .description {
      margin: 24px auto 0px auto;
      max-width: 650px;
    }
  }
  .about-main {
    display: flex;
    margin-top: 60px;
    margin-bottom: 100px;
    .left-content {
      display: flex;
      flex: 2;
      .portrait {
        width: 488px;
        height: 465px;
      }
      .rect {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 156px;
        height: 323px;
        background-color: #ea4715;
        h1 {
          color: #fff;
          font-weight: 300;
          font-size: 112px;
        }
      }
    }
    .right-content {
      flex: 1;
      padding-left: 80px;
      h1 {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 30px;
      }
      p {
        margin-bottom: 32px;
      }
      .button {
        display: inline;
        font-size: 12px;
        color: #ffffff;
        letter-spacing: 0.15em;
        padding: 16px 24px;
        background-color: #000;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export default About;
