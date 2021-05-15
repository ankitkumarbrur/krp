import React from "react";
import { Navbar, Review, News, About, Shopping } from "../components";

const Home = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Shopping />
      <News />

      <Review />
    </main>
  );
};

export default Home;
