import React, { useEffect } from "react";
import "./styles/whyKRP.scss";
import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const childVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 20,
  },
  visible: {

    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      // ease: "easeOut",
      // type: "spring",
      // damping: 10,
      // mass: 0.1,
      // stiffness: 100


    }

  }
}

const About = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

  }, [controls, inView]);



  return (
    <motion.section className="about-section"

      initial="hidden"
      animate={controls}
      variants={childVariants}
    >
      <article className="about-info">
        <div className="heading">
          <h2>why krp?</h2>
          <div className="line"></div>
        </div>
        <div className="text">
          <p ref={ref}>
            Lorem ipsum dolor sit amet, coAnsectetur adipiscing elit. Cras
            efficitur pharetra ante sit amet commodo. Aliquam et Praesent sit
            amet ultrices tortorLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras efficitur pharetra ante sit amet commodo.
            Aliquam et Praesent sit amet ultrices tortor
          </p>
        </div>
      </article>
    </motion.section>
  );
};

export default About;
