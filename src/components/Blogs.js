import React from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">BLOG</h1>
        <div className="main">
          <BlogCard image="Project1" title="Lorem ipsom dolor" />
          <BlogCard image="Project2" title="Consectetur adipiscing sed do" />
          <BlogCard
            image="Project3"
            title="Minim veniam, quis nostrud exercitation"
          />
          <BlogCard image="Project1" title="Lorem ipsom dolor" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  overflow: hidden;
  .title {
    padding-top: 80px;
    padding-bottom: 40px;
  }
  .main {
    display: flex;
    column-gap: 30px;
    padding-bottom: 80px;
  }
`;

export default Blogs;
