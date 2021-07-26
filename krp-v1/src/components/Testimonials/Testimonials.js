import React, { useState, useEffect } from "react";
import data from "./testimonials-data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./testimonials.scss";

import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue, } from 'framer-motion';
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




const Review = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

  }, [controls, inView]);


  const [current, setCurrent] = useState(0);

  const nextPerson = () => {
    current >= data.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  const prevPerson = () => {
    current <= 0 ? setCurrent(data.length - 1) : setCurrent(current - 1);
  };

  // useEffect(() => {
  //   if (index < 0) {
  //     setIndex(data.length - 1);
  //   }
  //   if (index > data.length - 1) {
  //     setIndex(0);
  //   }
  // }, [index, data]);

  // useEffect(() => {
  //   let slider = setInterval(() => setIndex(index + 1), 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <motion.section className="review-section"
      initial="hidden"
      animate={controls}
      variants={boxVariants}

    >
      {console.log("TESTIMONIALS")}

      <motion.div className="review-heading">
        <motion.div className="review-heading-left">
          <motion.div className="review-title">
            <motion.div className="review-title-accent-square"
              variants={childVariants}
            ></motion.div>
            <motion.h2 className="review-title-heading"
              variants={childVariants}
            > Testimonials </motion.h2>
          </motion.div>

          <motion.div className="review-info">
            <motion.div className="review-info-container-quote"
              variants={childVariants}
              ref={ref}
            >
              <svg
                width="155"
                height="163"
                viewBox="0 0 155 163"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M88.6001 11.8911V81.3198H132.6C132.6 106.841 112.861 127.605 88.6001 127.605V150.748C124.995 150.748 154.6 119.605 154.6 81.3198V11.8911H88.6001Z"
                    fill="#ECECEC"
                  />
                  <path
                    d="M0.600098 81.3198H44.6C44.6 106.841 24.8612 127.605 0.600098 127.605V150.748C36.9948 150.748 66.6002 119.605 66.6002 81.3198V11.8911H0.600098V81.3198Z"
                    fill="#ECECEC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="154"
                      height="162"
                      fill="white"
                      transform="translate(0.600098 0.319824)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
            <motion.div className="review-info-grids"
              variants={childVariants}
            >
              {data.map((item, index) => {
                return (
                  <motion.div className="review-info-container">
                    <p
                      className={`review-info-container-text ${index === current ? "active" : ""
                        }`}
                    >
                      {item.text}
                    </p>
                    <h4
                      className={`review-info-container-name ${index === current ? "active" : ""
                        }`}
                    >
                      {item.name}
                    </h4>
                    <h5
                      className={`review-info-container-title ${index === current ? "active" : ""
                        }`}
                    >
                      {item.title}
                    </h5>
                  </motion.div>
                );
              })}
              <motion.div className="review-info-btn">
                <button className="prev" onClick={prevPerson}>
                  <FiChevronLeft />
                </button>
                <button className="next" onClick={nextPerson}>
                  <FiChevronRight />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="review-heading-right"
          variants={childVariants}
        >
          {data.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                className={`review-carousel-item ${index === current ? "review-active-slide" : ""
                  }`}
              >
                {
                  <img
                    className="review-carousel-item-image "
                    src={item.image}
                    alt=""
                  />
                }
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Review;
