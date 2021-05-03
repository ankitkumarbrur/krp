import React from "react";
import "./styles/Footer.scss";
import { Button } from '@material-ui/core';
const Footer = () => (
    <div className="container">
        <div className="footer">

            <div className="footerleft">
                <div className="footerKRP">KRP</div>
                <div className="footerinfo">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis ipsa rem, numquam nihil ipsam voluptatum, dolore dolores ratione distinctio quo laboriosam tenetur. Facilis magni placeat nostrum totam voluptate! Fuga totam labore harum quisquam explicabo provident minus dolorum repellat quia autem, omnis veniam possimus beatae quae facilis ducimus molestiae sunt.
                </div>
                <div className="footerfollow">FOLLOW US</div>
                <div className="social_icon">
                    <svg className="icons" width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg className="icons" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7V7Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 8H1V20H5V8Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg className="icons" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006V1.01006Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


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
);

export default Footer;