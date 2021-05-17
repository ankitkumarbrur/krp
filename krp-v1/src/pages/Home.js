import React from "react";
import {
  Shopping,
  News,
  Footer,
  Imgviewer,
  Navbar,
  WhyKRP,
  Review,
  Info
} from "../components";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <Imgviewer />
      <Shopping /> */}
      <WhyKRP />

      <Info/>

      {/* <News />

      <Review /> */}
      <Footer />
    </main>
  );
};

export default Home;
