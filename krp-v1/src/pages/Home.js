import React from "react";
import { Navbar, Review, News } from "../components";

const Home = () => {
  return (
    <main>
      <Navbar />
      <News />
      <Review />
    </main>
  );
};

export default Home;
