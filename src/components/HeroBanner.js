import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div>
      <Wrapper>
        <div className="banner">
          <div className="container">
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 5,
                delay: 0,
              }}
              className="banner-img"
              src={process.env.PUBLIC_URL + "/images/img1.jpg"}
            />
            <h1 className="heading">Modern elegance</h1>
            <p>Our most popular bifold. Perfect for thermal efficiency.</p>
            <div className="button">OUR SERVICES</div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .banner {
    position: relative;
    top: -134px;
    left: 0px;
    height: 640px;
    padding-top: 230px;
    background-color: #000;
    z-index: -1;

    .heading {
      font-weight: 500;
      font-size: 46px;
      line-height: 60px;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #ffffff;
    }
    p {
      color: #fff;
      margin-bottom: 38px;
    }
    .button {
      display: inline;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0.15em;
      padding: 16px 24px;
      background-color: #ea4715;
      border-radius: 5px;
    }
    .banner-img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 640px;
      opacity: 60%;
      z-index: -5;
    }
  }
`;

export default HeroBanner;
