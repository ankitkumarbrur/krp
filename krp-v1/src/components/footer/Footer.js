import React, { useEffect } from "react";
import "./Footer.scss";

import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
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

        }

    }
}

const Footer = () => {

    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }

    }, [controls, inView]);



    return (
        <div className="footer-background"

        >
      {console.log("FOOTER")}
            
            <motion.div className="footercontainer"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={boxVariants}
            >
                <motion.div className="footer"

                >

                    <motion.div className="footerleft">
                        <motion.div className="footerKRP"
                            variants={childVariants}>
                            KRP
                            <motion.div className="krp_line title-border"
                                variants={childVariants}> </motion.div>
                        </motion.div>

                        <motion.div className="footerinfo"
                            variants={childVariants}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur pharetra ante sit amet commodo. Aliquam et Praesent sit amet ultrices tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <motion.div className="krp_line footerinfo-border"
                                variants={childVariants}> </motion.div>
                        </motion.div>
                        <div className="social_icon">
                            <motion.div className="icon_bg"
                                variants={childVariants}>
                                <FiFacebook className="footer_icons" /
                                >
                            </motion.div>
                            <motion.div className="icon_bg"
                                variants={childVariants}
                            >
                                <FiInstagram className="footer_icons" />
                            </motion.div>
                            <motion.div className="icon_bg"
                                variants={childVariants}
                            >
                                <FiTwitter className="footer_icons" />
                            </motion.div>
                            <motion.div className="icon_bg"
                                variants={childVariants}
                            >
                                <FiLinkedin className="footer_icons" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div className="footerright">
                        <motion.div className="row"
                            variants={childVariants}
                        >
                            <h4>Home</h4>
                            <h5><a>Contact Us</a></h5>
                            <h5><a>About Us</a></h5>
                            <h5><a>Shop</a></h5>
                            <h5><a>Learn</a></h5>
                            <h5><a>Query</a></h5>
                        </motion.div>
                        <motion.div className="row"
                            variants={childVariants}
                        >
                            <h4>Bags</h4>
                            <h5><a>Tires</a></h5>
                            <h5><a>Jackets</a></h5>
                            <h5><a>Pants</a></h5>

                        </motion.div>
                        <motion.div className="row"
                            variants={childVariants}
                        >
                            <h4>Services</h4>
                            <h5><a>Modify Bike</a></h5>
                            <h5><a>Workshops</a></h5>
                            <h5><a>Buy parts</a></h5>
                            <h5><a>Buy bike</a></h5>
                            <h5><a>Donor</a></h5>
                        </motion.div>

                    </motion.div>

                </motion.div>
                <motion.div className="footerbottom"

                >
                    ©2021KRP
                </motion.div>
            </motion.div>

        </div>


    )
};

export default Footer;