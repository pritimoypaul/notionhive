import React from "react";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Branches from "../components/Branches";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Blogs />
      <Branches />
      <Footer />
    </>
  );
};

export default Home;
