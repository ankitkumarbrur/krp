import React from "react";
import {
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
      {/*<Shopping />/*}
      {/* <News />

      <Review /> */}
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Home;
