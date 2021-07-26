// import React, { useEffect } from "react";
// import "./styles/whyKRP.scss";
// import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const childVariants = {
//   hidden: {
//     opacity: 0,
//     x: -20,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: {
//       duration: 1,
//     }
//   }
// }

// const About = () => {

  
//   const controls = useAnimation();
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     console.log("INVIEW")
//     if (inView) {
//       controls.start("visible");
//     }
    
//   }, [controls, inView]);
  
  
  
//   return (
//     <motion.section className="about-section"
    
//     initial="hidden"
//     animate={controls}
//     variants={childVariants}
//     >
//       {console.log("WHY KRP")}
//       <article className="about-info">
//         <div className="heading">
//           <h2>why krp?</h2>
//           <div className="line"></div>
//         </div>
//         <div className="text">
//           <p ref={ref}>
//             Lorem ipsum dolor sit amet, coAnsectetur adipiscing elit. Cras
//             efficitur pharetra ante sit amet commodo. Aliquam et Praesent sit
//             amet ultrices tortorLorem ipsum dolor sit amet, consectetur
//             adipiscing elit. Cras efficitur pharetra ante sit amet commodo.
//             Aliquam et Praesent sit amet ultrices tortor
//           </p>
//         </div>
//       </article>
//     </motion.section>
//   );
// };

// export default About;

import React, { useEffect } from "react";
import "./styles/whyKRP.scss";
import { useViewportScroll, useTransform, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useInView, InView } from 'react-intersection-observer';

const About = () => {
  console.log("INVIEW")
  return (
    <InView triggerOnce threshold={0.25}>
      {({ ref, inView}) => (
        <motion.section className="about-section"
        initial= {{opacity:0}}
        animate={inView? {opacity:1} : {opacity: 0}}
        transition={{duration:1.5}}
        >
          {console.log("WHY KRP")}
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
      )}
    </InView>
  );
};

export default About;
