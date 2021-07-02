import React from "react";
import "./Footer.scss";

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
const Footer = () => (
    <div className="footer-background">
        <div className="footercontainer">
            <div className="footer">

                <div className="footerleft">
                    <div className="footerKRP">
                        KRP
                        <div className="krp_line title-border"> </div>
                    </div>

                    <div className="footerinfo">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur pharetra ante sit amet commodo. Aliquam et Praesent sit amet ultrices tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="krp_line footerinfo-border"> </div>
                    </div>
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
                        <h5><a>Contact Us</a></h5>
                        <h5><a>About Us</a></h5>
                        <h5><a>Shop</a></h5>
                        <h5><a>Learn</a></h5>
                        <h5><a>Query</a></h5>
                    </div>
                    <div className="row">
                        <h4>Bags</h4>
                        <h5><a>Tires</a></h5>
                        <h5><a>Jackets</a></h5>
                        <h5><a>Pants</a></h5>

                    </div>
                    <div className="row">
                        <h4>Services</h4>
                        <h5><a>Modify Bike</a></h5>
                        <h5><a>Workshops</a></h5>
                        <h5><a>Buy parts</a></h5>
                        <h5><a>Buy bike</a></h5>
                        <h5><a>Donor</a></h5>
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