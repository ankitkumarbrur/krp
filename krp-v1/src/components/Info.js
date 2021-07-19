import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import "./styles/info.scss";
import { Parallax } from 'react-scroll-parallax';


import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



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


const Info = ({ offset = 300, clampInitial = false, clampFinal = false }) => {


  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset / 2

  const yRange = useTransform(scrollY, [initial, final], [clampInitial ? 0 : offset, clampFinal ? 0 : -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 50 })

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }
    console.log("fired")
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])
  const controls = useAnimation();
  const [ref1, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

  }, [controls, inView]);




  return (
    <motion.section className="info-section"
      initial="hidden"
      animate={controls}
      variants={boxVariants}
    >

      <motion.div className="info-first">
        <motion.div className="info-first-left">
          <motion.div className="info-title">
            <motion.div className="info-title-accent-square"
              variants={childVariants}
            ></motion.div>
            <motion.h2 className="info-title-heading"
              variants={childVariants}

            >
              {" "}
              kaulson <br />
              what we do.{" "}
            </motion.h2>
            <motion.div className="info-title-black-square"
              variants={childVariants}
            > </motion.div>
          </motion.div>
          {/* <Parallax className="classname"> */}
          <motion.div className="info-workshop">
            <motion.h3
              variants={childVariants}
              ref={ref1}
            >workshop services</motion.h3>
            <motion.p className="info-workshop-text"
              variants={childVariants}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </motion.p>

            <motion.div className="info-apparels-image"
              ref={ref} style={{ y }}

            >
              <img />
            </motion.div>
          </motion.div>
          {/* </Parallax> */}
        </motion.div>

        <motion.div className="info-first-right">
          {/* <motion.div className = "info-workshop"> */}

          <motion.div className="info-apparels">
            {/* <Parallax className="custom-class" y={[30, -40]} tagOuter="figure"> */}
            <motion.div className="info-workshop-image">
              <img />
            </motion.div>
            {/* </Parallax> */}
            <motion.div>
              <motion.h3
                variants={childVariants}
              >apparels</motion.h3>
              <motion.p className="info-workshop-text"
                variants={childVariants}
              >
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </motion.p>
            </motion.div>
          </motion.div>
          {/* </motion.div> */}
        </motion.div>
      </motion.div>

      <motion.div className="info-second">
        <motion.div className="info-second-left">
          <motion.div className="info-second-black-square"></motion.div>

          <motion.div className="info-projects">
            <h3>projects</h3>
            <p className="info-projects-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <button> read more </button>
          </motion.div>
        </motion.div>

        <motion.div className="info-second-right">
          <motion.div className="info-projects-card">
            <motion.div className="info-projects-card-text">
              <h3>Curabitur arcu erat accumsan id imperdiet et porttitor.</h3>
              <motion.div className="info-projects-card-image">
                <img src="https://unsplash.com/photos/XyEshzxsas8/download?force=true&w=1920" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="info-projects-image">
            <img src="https://unsplash.com/photos/j3ukSGrVSw0/download?force=true&w=1920" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* <div className="info-title"> */}
      {/* </div> */}

      {/* <div className = "">
        <div className = "">
          <img src="https://images.unsplash.com/photo-1558981396-5fcf84bdf14d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"/>
        </div>
      </div> */}
    </motion.section>
  );
};

export default Info;
