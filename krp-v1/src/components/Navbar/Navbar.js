import React, { useState, useEffect } from "react";
import menuItems from "./MenuItems";

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
      <nav className="nav">
        <div class="menu-icon" onClick={() => setShowLinks(!showLinks)}>
          <span class={showLinks ? "menu-btn open" : "menu-btn"}></span>
        </div>

        <div className="title">
          <h2>KRP</h2>
          <div className="line"></div>
        </div>

        <ul className={showLinks ? "menu-nav active" : "menu-nav"}>
          <li>
            {menuItems.map((item, index) => {
              const { title, url, className } = item;
              return (
                <Link
                  key={index}
                  className={`${className} ${
                    splitLocation[1] === url ? "active" : ""
                  }`}
                  to={`/${url}`}
                >
                  {title}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
