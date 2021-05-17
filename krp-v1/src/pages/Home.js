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
      <WhyKRP />
      <Shopping />


      <News />

      <Review />
      <Footer />
    </main>
  );
};

export default Home;
