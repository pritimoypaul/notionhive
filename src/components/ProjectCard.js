import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectCard = ({ photo, title }) => {
  return (
    <Wrapper>
      <div className="proCard">
        <div className="main-title">
          <h1>{title}</h1>
        </div>
        <div className="card">
          <div className="img-card">
            <img src={process.env.PUBLIC_URL + "/images/" + photo + ".jpg"} />
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
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card:hover {
    position: relative;
    width: 416px;
    height: 576px;
    transform: translate(0px, -166px);
    .img-card {
      width: 416px;
    }

    .details {
      position: absolute;
      transform: translate(0px, -250px);
      opacity: 100;
      width: 416px;
      height: 300px;
      background-color: #393939;
      .content {
        margin-top: -30px;
        padding-left: 27px;
        padding-top: 34px;
        transform: translate(0px, 0px);
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
    width: 280px;
    height: 350px;
    margin-top: 60px;
    overflow: hidden;
    transition: all 0.5s ease-out;
    .img-card {
      width: 280px;
      transition: all 0.5s ease-out;
    }

    .details {
      transform: translate(0px, 0px);
      opacity: 0;
      transition: all 0.7s ease-out;
      .content {
        transition: all 0.8s ease-out;
        transform: translate(0px, 250px);
      }
    }
  }
  .proCard {
    position: relative;
    .main-title {
      transition: all 0.1s ease-out;
      position: absolute;
      top: 200px;
      left: -35px;
      opacity: 1;
      z-index: 10;
      h1 {
        font-size: 32px;
      }
    }
  }
  .proCard:hover {
    .main-title {
      opacity: 0;
    }
  }
`;

export default ProjectCard;
