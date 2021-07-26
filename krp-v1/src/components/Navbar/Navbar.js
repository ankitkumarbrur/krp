import React, { useState, useEffect } from "react";
import menuItems from "./MenuItems";
import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";
import "../Navbar/navbar.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scroll, setScroll] = useState(false);

  //*active class
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  //*scroll effect
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <section className={scroll ? "navbar scroll" : "navbar"}>
      {console.log("NAVBAR")}

      <nav className="nav">
        <div className="menu-icon" onClick={() => setShowLinks(!showLinks)}>
          <span className={showLinks ? "menu-btn open" : "menu-btn"}></span>
        </div>

        <div className="title">
          <h3>KRP</h3>
          <div className="line"></div>
        </div>

        <ul className={showLinks ? "menu-nav active" : "menu-nav"}>
          {menuItems.map((item, index) => {
            const { title, url } = item;
            return (
              <li
                className={showLinks ? "menu-nav-item open" : "menu-nav-item"}
                key={index}
              >
                <Link
                  key={index}
                  className={`nav-links ${
                    splitLocation[1] === url ? "active" : ""
                  }`}
                  to={`/${url}`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
