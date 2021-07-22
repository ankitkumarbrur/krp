import React, { useEffect, useLayoutEffect } from "react";

import { Link } from "react-router-dom";
import data from "./shopping-data";
import offers from "./s-data";
import "../Shopping/shopping.scss";
import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import store_img from "../../images/store_img.png";

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




const Shopping = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const slideDelay = 4000;

    const dynamicSlider = document.getElementsByClassName("store-carousel-image");
    // dynamicSlider[dynamicSlider.length - 1].style.opacity = 0;
    console.log()
    var curSlide = 0;
    var zindex = 0;

    const fun = () => {
      console.log(curSlide)

      dynamicSlider[curSlide % dynamicSlider.length].style.display = "none";
      dynamicSlider[curSlide % dynamicSlider.length].style.right = "240px";
      dynamicSlider[curSlide % dynamicSlider.length].style.transform = "scale(0.7)";
      dynamicSlider[curSlide % dynamicSlider.length].style.zIndex = zindex--;
      
      
      for (let i = 0; i < dynamicSlider.length; i++) {
        if(i != curSlide) {
          let scale = parseFloat(getComputedStyle(dynamicSlider[i]).transform.slice(7)) + 0.1;
          dynamicSlider[i].style.transform = "scale(" + scale + ")";
          console.log("after:" + dynamicSlider[i].style.transform);
          dynamicSlider[i].style.right = parseFloat(getComputedStyle(dynamicSlider[i]).right) - 80 + "px";
        }
      }
      dynamicSlider[curSlide % dynamicSlider.length].style.display = "block";
      curSlide = (curSlide + 1) % dynamicSlider.length;
    }
    
    let caro = setInterval(fun,slideDelay);

    for (let i = 0; i < dynamicSlider.length; i++) {
      dynamicSlider[i].addEventListener("mouseover",() =>{
        window.clearInterval(caro);
        console.log("hover");
      })
      dynamicSlider[i].addEventListener("mouseout",() =>{
        caro = setInterval(fun,slideDelay);
        console.log("out");
      })
    }

  }, [])

  useLayoutEffect(() => {
    if (inView) {
      controls.start("visible");
    }

  }, [controls, inView]);


  return (
    <motion.section className="shopping-section"
      initial="hidden"
      animate={controls}
      variants={boxVariants}

    >
      <motion.div className="store-heading">
        <motion.div className="store-heading-left">
          <motion.div className="store-title">
            <motion.div className="store-title-accent-square"
              variants={childVariants}
            ></motion.div>
            <motion.h2 className="store-title-heading"
              variants={childVariants}
            > Store </motion.h2>
          </motion.div>

          <motion.div className="store-info">
            <motion.h3
              variants={childVariants}

            >shop with us !</motion.h3>
            <motion.p className="store-info-text"
              variants={childVariants}
            >
              we bring you a variety of top notch products with sense of
              belief...
            </motion.p>

            <motion.button className="store-info-btn"
              ref={ref}
            >
              <Link to="#">visit store</Link>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="store-heading-right">
          <motion.div className="store-carousel">
            {
              offers.reverse().map((item) =>{
                return(
                    <div className = "store-carousel-image"
                      variants = {childVariants}
                    >
                      <motion.img src={item.imageurl} alt="" />
                    </div>
                )
              })
            }
          </motion.div>          
        </motion.div>
        
      </motion.div>

      <motion.article className="item"
        variants={childVariants}
      >
        {data.map((item) => {
          const { id, title, image } = item;
          return (
            <motion.div className="item-container" key={id}>
              <img className="item-container-image" src={image} alt={title} />
              <h4 className="item-container-title">{title}</h4>
            </motion.div>
          );
        })}
      </motion.article>
    </motion.section>
  );
};

export default Shopping;
