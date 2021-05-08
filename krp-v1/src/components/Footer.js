import React from "react";
import "./styles/Footer.scss";
import { Button } from '@material-ui/core';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
const Footer = () => (
    <div className="footer-background">
        <div className="footercontainer">
        <div className="footer">

            <div className="footerleft">
                <div className="footerKRP">KRP</div>
                <div className="footerinfo">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis ipsa rem, numquam nihil ipsam voluptatum, dolore dolores ratione distinctio quo laboriosam tenetur. Facilis magni placeat nostrum totam voluptate! Fuga totam labore harum quisquam explicabo provident minus dolorum repellat quia autem, omnis veniam possimus beatae quae facilis ducimus molestiae sunt.
                </div>
                <div className="footerfollow">FOLLOW US</div>
                <div className="social_icon">
                        <FiFacebook className="footer_icons"/>
                        <FiInstagram className="footer_icons"/>
                        <FiTwitter className="footer_icons"/>
                        <FiLinkedin className="footer_icons"/>


                </div>


            </div>

            <div className="footerright">
                <div className="row">
                    <div className="col1">Home</div>
                    <div className="col">Contact Us</div>
                    <div className="col">About Us</div>
                    <div className="col">Shop</div>
                    <div className="col">Learn</div>
                    <div className="col">Query</div>
                </div>
                <div className="row">
                    <div className="col1">Learn</div>
                    <div className="col">Query</div>
                    <div className="col">Visit Us</div>
                </div>
                <div className="row">
                    <div className="col1">Lorem</div>
                    <div className="col">Ipsum dolor.</div>
                    <div className="col">Donor</div>
                    <div className="col">Lorem</div>
                    <div className="col">Ipsum dolor.</div>
                    <div className="col">Donor</div>
                </div>

            </div>


        </div>
            
    </div>
        <div className="footerbottom">
            ©KRP2021
         </div>
    </div>    
    
    
);

export default Footer;