import React from "react";
import {
  Shopping,
  News,
  Footer,
  Imgviewer,
  Navbar,
  WhyKRP,
  Testimonials,
  Info,
  Subscribe,
  Testing,
} from "../components";

import "./styles/home.scss";

const Home = () => {
  return (
    <main>
      <header className="main-header">
        <Navbar />
        <Imgviewer />
      </header>

      <WhyKRP />

      <Info />
      <Shopping />
      {/* <Testimonials /> */}
      <Testing />
      <Subscribe />

      <Footer />
    </main>
  );
};

export default Home;
