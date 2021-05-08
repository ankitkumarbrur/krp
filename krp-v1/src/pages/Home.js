import React from "react";
import { About, Scroll, Subscribe, Feedback, News, Product1, Product2, Footer, Imgviewer, Navbar, Whykrp, Review } from "../components";


const Home = () => {
  return (
    <main>
      <Scroll />
      <Navbar />
      <Imgviewer />
      <About />
      <Product1 />
      <Product2 />

      <News />
      <Feedback />
      <Review />
      <Subscribe />
      <Footer />



    </main>
  );
};

export default Home;
