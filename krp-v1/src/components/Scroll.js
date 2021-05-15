import React from "react";
import ScrollTop from "react-scrolltop-button";
import "./styles/Scroll.scss"

export default function Scroll() {


    return (

        <div>

            <ScrollTop
                text="Up"
                distance={100}
                breakpoint={768}
                className={"scroll-your-role"}


            />

        </div>
    );

}