import React from "react";
import {
  Article,
  Shopping,
  Footer,
  Imgviewer,
  Navbar,
  WhyKRP,
  Info,
  Subscribe,
  Testimonials,
  Contactus,
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

      <Article />
      <Testimonials />

      <Contactus />

      <Subscribe />

      <Footer />
    </main>
  );
};

export default Home;
