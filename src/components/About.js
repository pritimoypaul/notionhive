import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [selectedData, setselectedData] = useState(0);
  const data = [
    {
      img: "christina",
      slNo: "1",
      title:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      img: "bruce",
      slNo: "2",
      title:
        "Labore et dolore magna aliqua. tempor incididunt ut labore et dolore magna aliqua.",
      description:
        "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur.",
    },
  ];
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
      <AnimatePresence exitBeforeEnter>
        <div className="container">
          <div className="about-main">
            <div className="left-content">
              <div className="portrait">
                <motion.img
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1,
                    delay: 0,
                  }}
                  key={selectedData}
                  src={
                    process.env.PUBLIC_URL +
                    "/images/" +
                    data[selectedData].img +
                    ".jpg"
                  }
                />
              </div>
              <div className="rect">
                <h1>{data[selectedData].slNo}</h1>
                <br />
                <p>/FOUR</p>
                <div
                  className="arrowBTN"
                  onClick={() =>
                    selectedData == 0 ? setselectedData(1) : setselectedData(0)
                  }
                >
                  <svg
                    width="248"
                    height="248"
                    viewBox="0 0 248 248"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="124" cy="124" r="123.5" stroke="#ECECEC" />
                  </svg>
                  <div className="arrow">
                    <svg
                      width="48"
                      height="15"
                      viewBox="0 0 48 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M41 1L47 7.5L41 14" stroke="black" />
                      <line
                        x1="47"
                        y1="7.5"
                        x2="-4.37114e-08"
                        y2="7.5"
                        stroke="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-content">
              <h1>{data[selectedData].title}</h1>

              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1,
                  delay: 0,
                }}
                key={selectedData}
              >
                {data[selectedData].description}
              </motion.p>

              <div className="button">LEARN MORE</div>
            </div>
          </div>
        </div>
      </AnimatePresence>
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
        position: relative;
        display: flex;
        flex-direction: column;
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
        p {
          font-size: 10px;
          color: #fff;
        }
        .arrowBTN {
          position: absolute;
          cursor: pointer;
          .arrow {
            transform: translate(100px, -150px);
          }
        }
      }
    }
    .right-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: baseline;
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
