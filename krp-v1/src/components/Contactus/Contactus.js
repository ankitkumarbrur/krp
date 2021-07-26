import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./contactus.scss";


const boxVariants = {
  hidden: {

  },
  visible: {

    transition: {

      delay: 1,
      when: "beforeChildern",
      staggerChildren: 0.2

    }
  }
}
const childVariants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 20,
  },
  visible: {

    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      // ease: "easeOut",
      // type: "spring",
      // damping: 10,
      // mass: 0.1,
      // stiffness: 100


    }

  }
}


const Contactus = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

  }, [controls, inView]);






  return (
    <motion.section className="contactus"

      initial="hidden"
      animate={controls}
      variants={boxVariants}

    >
      {console.log("CONTACT US")}

      <motion.div className="contactus-left">

        <motion.div className="contactus-address"
          variants={childVariants}
        >
          <h2>address</h2>
          <p>
            A-34 Naraina Industrial Area Phase 2<br />
            Naraina, New Delhi, Delhi
          </p>

        </motion.div>

        {/* <Scroll width={1440} height={1000} contentOffsetY={y} onScroll={function () { console.log(ya()) }}

          initial="hidden"
          animate={controls}
          variants={boxVariants}


        > */}
        {/* <Frame y={logy}> */}
        <motion.div className="contactus-details"
          variants={childVariants}
          ref={ref}
        >
          <h2>email & phone </h2>
          <p>
            email@krp.com <br />
            978928929745
          </p>
        </motion.div>
        {/* </Frame > */}
        {/* </Scroll> */}
      </motion.div>



      <motion.div className="contactus-right" >
        <motion.div className="contactus-form" >
          <motion.div className="contactus-form-heading"
            variants={childVariants}
          >
            <h1>SEND A MESSAGE</h1>
          </motion.div>

          <motion.div class="form_field" >

            <motion.div class="input_group w_50" variants={childVariants}>
              <input type="text" class="input" required />
              <label class="placeholder">First Name</label>
            </motion.div>

            <motion.div class="input_group w_50" variants={childVariants}>
              <input type="text" class="input" required />
              <label class="placeholder">Last Name</label>
            </motion.div>

            <motion.div class="input_group w_50" variants={childVariants}>
              <input type="text" class="input" required />
              <label class="placeholder">Emal Address</label>
            </motion.div>

            <motion.div class="input_group w_50" variants={childVariants}>
              <input type="tel" class="input" required />
              <label class="placeholder">Mobile Number</label>
            </motion.div>

            <motion.div class="input_group w_100" variants={childVariants}>
              <textarea class="input input_textarea " rows="6" required></textarea>
              <label class="placeholder textarea">Write your message here...</label>
            </motion.div>

            <motion.div class="input_group" variants={childVariants}>
              <input type="submit" class="btn" value="Send" />
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>

    </motion.section >
  );
};

export default Contactus;
