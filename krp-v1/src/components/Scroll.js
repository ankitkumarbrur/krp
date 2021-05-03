import { withTheme } from "@material-ui/core";
import { BorderAllRounded } from "@material-ui/icons";
import React from "react";
import ScrollTop from "react-scrolltop-button";
import "./styles/Scroll.scss"
import styled from 'styled-components'
import { red } from "@material-ui/core/colors";
export default function Scroll() {


    return (

        <div>

            <ScrollTop
                text="Up"
                distance={100}
                breakpoint={768}
                className={"scroll-your-role"}



            />
            />
        </div>
    );

}