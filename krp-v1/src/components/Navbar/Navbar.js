import React, { useState } from "react";
import menuItems from "./MenuItems";

import { Link } from "react-router-dom";
import "../Navbar/navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const NavbarV2 = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <section className="navbar">
      <nav className="navbarItems">
        <div className="title">
          <h2>KRP</h2>
          <div className="line"></div>
        </div>

        <div className="menu-icon" onClick={() => setShowLinks(!showLinks)}>
          <i>{showLinks ? <FaTimes /> : <GiHamburgerMenu />}</i>
        </div>

        <div className="item-container">
          <ul className={showLinks ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              const { title, url, className } = item;
              return (
                <li key={index}>
                  <Link className={className} to={url}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* <div>
            <button className="btn login">sign up / login</button>
          </div> */}
        </div>
      </nav>
    </section>
  );
};

export default NavbarV2;
