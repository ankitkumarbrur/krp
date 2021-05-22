import React from "react";
import {
  Article,
  Shopping,
  News,
  Footer,
  Imgviewer,
  Navbar,
  WhyKRP,
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
      <News />


      <Subscribe />

      <Article />
      {/* <Testimonials /> */}
      <Testing />
      <Subscribe />

      <Footer />
    </main>
  );
};

export default Home;
