import React, { useEffect } from "react";
import "./styles/imgviewer.scss";
import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const data = [
    {
        index: 1,
        imag: "https://source.unsplash.com/featured/?tyres",
    },
    {
        index: 2,
        imag: "https://source.unsplash.com/featured/?bike",
    },
    {
        index: 3,
        imag: "https://source.unsplash.com/featured/?motorcyle",
    },
    {
        index: 4,
        imag: "https://source.unsplash.com/featured/?girls",
    },
    {
        index: 5,
        imag: "https://source.unsplash.com/featured/?drifting",
    },
    {
        index: 6,
        imag: "https://source.unsplash.com/featured/?racing",
    },
    {
        index: 7,
        imag: "https://source.unsplash.com/featured/?model",
    },
    {
        index: 8,
        imag: "https://source.unsplash.com/featured/?business",
    },
];

//const originalTitle = document.getElementById('item1');

window.addEventListener("scroll", function (e) {
    // http://stackoverflow.com/a/28633515/962603
    var scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

    document.getElementById("item1").style.opacity =
        1 - Math.max(0, Math.min(1, -scroll / 150 + 1));
    // document.getElementById('item0').style.opacity = 1 - Math.max(0, Math.min(1, -scroll / 150 + 1));
});
function Images() {
    let toDisplay = [];
    for (let i = 1; i <= 8; i++) {
        let item = data[i - 1];
        let Background = item.imag;
        const media = (
            <div className={"idiv" + i}>
                {" "}
                <img src={Background} />
            </div>
        );
        toDisplay.push(media);
    }
    console.log(toDisplay);
    return toDisplay;
}

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
        x: -20,
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




const Imgviewer = () => {

    const y = useMotionValue(0);
    var { scrollY, scrollYProgress } = useViewportScroll();

    const scaleText = useTransform(scrollY, [0, 40, 80, 120, 160], [1, 2, 4, 8, 16]);
    const chang = useTransform(scrollY, value => -value / 2)
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        console.log(scrollY);
    }, [controls, inView, scrollY]);


    return (

        <div className="home1container">
            <div id="item0"></div>

            < motion.div className="home1text"

                ref={ref}
                initial="hidden"
                animate="visible"

                // initial={{ x: 0, y: 60, opacity: 0, }}
                // animate={{ x: 0, y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.5, ease: "easeInOut", when: "beforeChildren", staggerChildren: 2 } }}
                variants={boxVariants}
                style={{ y: chang }}

            >
                <h1 >
                    <motion.div


                        variants={childVariants}
                    // initial={{ x: 0, y: 60, opacity: 0, }}
                    // animate={{ x: 0, y: 0, opacity: 1, transition: { ease: "easeInOut" } }}

                    >
                        ONE Stop Shop For
                    </motion.div>
                    <motion.div className="motorcyle"


                        variants={childVariants}

                    // initial={{ x: 0, y: 60, opacity: 0, }}
                    // animate={{ x: 0, y: 0, opacity: 1, transition: { ease: "easeInOut" } }}

                    >Motorcycle Performance Parts,</motion.div>
                    <motion.div className="since"
                        variants={childVariants}
                    >

                        <div className="hline"></div>
                        Since <br /> &nbsp;&nbsp;1970
                    </motion.div>
                    <motion.div


                        variants={childVariants}

                    // initial={{ x: 0, y: 60, opacity: 0, }}
                    // animate={{ x: 0, y: 0, opacity: 1, transition: { ease: "easeInOut" } }}
                    >Accessories, Gear & Wear</motion.div>

                </h1>
                <motion.button


                    variants={childVariants}
                // initial={{ x: 0, y: 60, opacity: 0, }}
                // animate={{ x: 0, y: 0, opacity: 1, transition: { ease: "easeInOut" } }}
                >About Us</motion.button>
            </motion.div>

            <div id="item1" className="imagecontainer">
                <Images />
            </div>

        </div >

    );
};

export default Imgviewer;
