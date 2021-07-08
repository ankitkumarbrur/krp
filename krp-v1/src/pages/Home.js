import React from "react";
import { motion } from 'framer-motion';
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
  Contactus
} from "../components";

import "./styles/home.scss";

const childVariants = {
  hidden: {
    opacity: 0,
    x: -10,
    y: 10,
  },
  visible: {

    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren"

    }

  }
}


const Home = () => {
  return (
    <main>
      <header className="main-header">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={childVariants}
        ><Navbar /></motion.div>

        <Imgviewer />
      </header>

      <WhyKRP />

      <Info />
      <Shopping />
      {/* <News /> */}

      <Article />
      {/* <Testimonials /> */}
      <Testing />

      <Contactus />

      <Subscribe />

      <Footer />
    </main>
  );
};

export default Home;
