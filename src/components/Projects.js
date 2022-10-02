import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>PROJECTS WE HAVE DONE</h1>
        <div className="projects">
          <ProjectCard
            photo="project1"
            title="Residential"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"
            phone="928 367 3789"
          />
          <ProjectCard
            photo="project2"
            title="Commercial"
            description=""
            phone=""
          />
          <ProjectCard
            photo="project3"
            title="Duplex"
            description=""
            phone=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 576px;
  background-color: #5c5c5c;
  overflow: hidden;
  h1 {
    padding-top: 80px;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
  }
  .projects {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`;

export default Projects;
