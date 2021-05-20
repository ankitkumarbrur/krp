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
      {/* <News /> */}

<<<<<<< HEAD
      {/* <Testimonials /> */}
      <Testing />
      <Subscribe />
=======
      {/* <Subscribe />
      <Review /> */}
>>>>>>> 742ccf58616c2937a0e75887012ade38449dd391
      <Footer />
    </main>
  );
};

export default Home;
