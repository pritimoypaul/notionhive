import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const HeroBanner = () => {
  const [bannerImage, setBannerImage] = useState(1);
  setTimeout(() => {
    if (bannerImage == 1) {
      setBannerImage(2);
    } else if (bannerImage == 2) {
      setBannerImage(3);
    } else if (bannerImage == 3) {
      setBannerImage(1);
    }
  }, 4000);
  return (
    <div>
      <Wrapper>
        <div className="banner">
          <div className="container">
            <AnimatePresence>
              <motion.img
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 3,
                  delay: 0,
                }}
                key={bannerImage}
                className="banner-img"
                src={
                  process.env.PUBLIC_URL + "/images/img" + bannerImage + ".jpg"
                }
              />
            </AnimatePresence>
            <h1 className="heading">Modern elegance</h1>
            <p>Our most popular bifold. Perfect for thermal efficiency.</p>
            <div className="button">OUR SERVICES</div>
            <div className="navigation-box">
              <div className="navigator" onClick={() => setBannerImage(1)}>
                .
              </div>
              <div className="navigator" onClick={() => setBannerImage(2)}>
                .
              </div>
              <div className="navigator" onClick={() => setBannerImage(3)}>
                .
              </div>
            </div>
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
    z-index: 1;

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
      cursor: pointer;
    }
    .navigation-box {
      position: relative;
      display: flex;
      align-items: center;
      column-gap: 20px;
      margin-top: 70px;
      z-index: 100;
      .navigator {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7px;
        height: 7px;
        background-color: #fff;
        border-radius: 10px;
        cursor: pointer;
      }
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
