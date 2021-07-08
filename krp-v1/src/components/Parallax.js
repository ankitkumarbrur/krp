import React, { useRef, useState, useLayoutEffect } from "react";
import {
    useViewportScroll,
    useTransform,
    useSpring,
    motion
} from "framer-motion";



const calculateMinHeight = (height, range) => {
    return height + height * range;
};

export default function Parallax({
    children,
    className,
    topOffset = -500,
    bottomOffset = 500,
    range = 0.2
}) {
    const { scrollY } = useViewportScroll();
    const ref = useRef();
    const [minHeight, setMinHeight] = useState("auto");
    const [elementTop, setElementTop] = useState(0);
    const springConfig = {
        damping: 100,
        stiffness: 100,

    };

    useLayoutEffect(() => {
        if (!ref.current) return;
        const onResize = () => {
            setElementTop(ref.current.offsetTop);
            setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
        };
        console.log("working");
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref, range]);

    const y = useSpring(
        useTransform(
            scrollY,
            [elementTop + topOffset, elementTop + bottomOffset],
            ["0%", `${range * 100}%`]
        ),
        springConfig
    );

    return (
        <div style={{ minHeight }} className={className}>
            <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}
