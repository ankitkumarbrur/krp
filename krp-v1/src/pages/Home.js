import React from "react";
import {
  Shopping,
  News,
  Footer,
  Imgviewer,
  Navbar,
  WhyKRP,
  Review,
} from "../components";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Imgviewer />
      <Shopping />
      <WhyKRP />

      <News />

      <Review />
      <Footer />
    </main>
  );
};

export default Home;
