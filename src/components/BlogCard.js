import React from "react";
import styled from "styled-components";

const BlogCard = ({ image, title }) => {
  return (
    <Wrapper>
      <div className="blog-img">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/images/" + image + ".jpg"}
        />
        <div className="plusBTN">+</div>
      </div>
      <p>WINDOW</p>
      <h4>{title}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .blog-img {
    position: relative;
    width: 500px;
    height: 270px;
    .img {
      width: 100%;
      height: 100%;
    }
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
      transform: translate(240px, -160px);
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
  h4 {
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
  }
`;
export default BlogCard;
