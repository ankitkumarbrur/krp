import React, { useState, useEffect } from "react";
import "./Article.scss";
import arts from "./articles_data";
import { Carousel } from 'react-responsive-carousel'
import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariants = {
    hidden: {
    },
    visible: {
        transition: {
            delay: 1,
            when: "beforeChildern",
            staggerChildren: 0.15
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


export default function Article() {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);



    React.useEffect(() => {
        const element = document.getElementsByClassName("thumbs")[0]
        var newElement = element.cloneNode(false);
        while (element.hasChildNodes()) newElement.appendChild(element.firstChild);
        element.parentNode.replaceChild(newElement, element);
    })

    const re = () => {
        return (arts.map((item, index) => {
            return (
                <motion.div className="article-div"
                    onClick={(e) => {
                        // alert("clicked")
                        window.open(item.src)
                    }}
                    onMouseEnter={(e) => {
                        var evt = new MouseEvent("click", {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        });
                        e.currentTarget.parentElement.dispatchEvent(evt)
                    }}
                    variants={childVariants}
                >
                    <motion.div className="article-number" >0{index + 1}</motion.div>
                    <motion.h3 className="article-title" >{item.headline}</motion.h3>
                </motion.div>)
        }))
    }

    return (
        <motion.div className="article-main"
            initial="hidden"
            animate={controls}
            variants={boxVariants}
            ref={ref}
        >
      {console.log("ARTICLES")}

            <motion.div className="article-maintitle">
                <motion.div className="article-title-accent-square"
                    variants={childVariants}
                ></motion.div>
                <motion.h2 className="article-title-heading"
                    variants={childVariants}
                > Articles </motion.h2>
            </motion.div>

            <Carousel
                autoPlay={true}
                renderThumbs={re}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
            >
                {arts.map((item, index) => {
                    return (
                        <motion.div className="article-image"
                            variants={childVariants}
                        >
                            <img src={item.imageurl} />
                            <motion.div className="article-left"
                                variants={childVariants}
                            >
                                <h5 className="title">{item.tag}</h5>
                                <p className="news">{item.headline}</p>
                                <h5 className="bottom">{item.provider} | {item.date} | {item.reporter} </h5>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </Carousel>

        </motion.div>
    )
}
