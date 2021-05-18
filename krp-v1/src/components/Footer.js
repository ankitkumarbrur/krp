import React from "react";
import "./styles/Footer.scss";

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
const Footer = () => (
    <div className="footer-background">
        <div className="footercontainer">
            <div className="footer">

                <div className="footerleft">
                    <div className="footerKRP">
                        KRP
                        <div className="krp_line"> </div>


                    </div>

                    <div className="footerinfo">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur pharetra ante sit amet commodo. Aliquam et Praesent sit amet ultrices tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.                    </p>

                    </div>
                    {/* <div className="footerfollow"></div> */}
                    <div className="social_icon">
                        <div className="icon_bg">
                            <FiFacebook className="footer_icons" />
                        </div>
                        <div className="icon_bg">
                            <FiInstagram className="footer_icons" />
                        </div>
                        <div className="icon_bg">
                            <FiTwitter className="footer_icons" />
                        </div>
                        <div className="icon_bg">
                            <FiLinkedin className="footer_icons" />
                        </div>






                    </div>


                </div>

                <div className="footerright">
                    <div className="row">
                        <h4>Home</h4>
                        <h5>Contact Us</h5>
                        <h5>About Us</h5>
                        <h5>Shop</h5>
                        <h5>Learn</h5>
                        <h5>Query</h5>
                    </div>
                    <div className="row">
                        <h4>Bags</h4>
                        <h5>Tires</h5>
                        <h5>Jackets</h5>
                        <h5>Pants</h5>

                    </div>
                    <div className="row">
                        <h4>Services</h4>
                        <h5>Modify Bike</h5>
                        <h5>Workshops</h5>
                        <h5>Buy parts</h5>
                        <h5>Buy bike</h5>
                        <h5>Donor</h5>
                    </div>

                </div>


            </div>
            <div className="footerbottom">
                ©2021KRP
         </div>
        </div>

    </div>


);

export default Footer;