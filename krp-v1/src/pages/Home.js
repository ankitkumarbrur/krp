import React from "react";
import {
  Article,
  Shopping,
  News,
  Footer,
  Imgviewer,
  Navbar,
  WhyKRP,
  Review,
  Info,
  Subscribe,
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
      <Review />
      <Article />
      <Footer />
    </main>
  );
};

export default Home;
