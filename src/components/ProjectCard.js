import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectCard = ({ photo, title }) => {
  return (
    <Wrapper>
      <motion.div
        initial={{ x: 0, y: 0 }}
        whileHover={{ x: -60, y: -176 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 0.6,
          delay: 0,
        }}
        className="card"
      >
        <div className="img-card">
          <img src={process.env.PUBLIC_URL + "/images/" + photo + ".jpg"} />
        </div>
        <div className="main-title">
          <h1>{title}</h1>
        </div>
        <div className="details">
          <div className="content">
            <div className="plusBTN">+</div>
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <br />

            <br />
            <p>928 367 3789</p>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card:hover {
    position: relative;
    .img-card {
      width: 416px;
    }
    .main-title {
      visibility: hidden;
    }

    .details {
      visibility: visible;
      position: absolute;
      transform: translate(0px, -250px);
      width: 416px;
      height: 300px;
      background-color: #393939;
      .content {
        margin-top: -30px;
        padding-left: 27px;
        padding-top: 34px;
        .plusBTN {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          color: #fff;
          width: 64px;
          height: 64px;
          font-size: 30px;
          padding: 20px;
          background: #ea4715;
          border-radius: 50px;
          transform: translate(300px, -100px);
        }
        h1 {
          font-weight: 400;
          font-size: 24px;
          line-height: 34px;
        }
        p {
          max-width: 310px;
          font-weight: 400;
          font-size: 15px;
          line-height: 150%;
          color: #fff;
        }
      }
    }
  }

  .card {
    position: relative;
    margin-top: 70px;
    transform: translate(0px, 70px);
    .img-card {
      width: 280px;
    }
    .main-title {
      visibility: visible;
      position: absolute;
      top: 190px;
      left: -35px;
      h1 {
        font-size: 32px;
      }
    }
    .details {
      visibility: hidden;
    }
  }
`;

export default ProjectCard;
