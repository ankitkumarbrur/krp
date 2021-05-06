import React from "react";
import { Navbar, Review, News, About } from "../components";

const Home = () => {
  return (
    <main>
      <Navbar />
      <About />
      <News />
      <Review />
    </main>
  );
};

export default Home;
