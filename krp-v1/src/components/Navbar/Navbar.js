import React, { useState } from "react";
import menuItems from "./MenuItems";

import { Link } from "react-router-dom";
import "../Navbar/navbar.scss";

const NavbarV2 = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <section className="navbar">
      <nav className="navbarItems">
        <div className="title">
          <h2>KRP</h2>
          <div className="line"></div>
        </div>

        <div class="menu-icon" onClick={() => setShowLinks(!showLinks)}>
          <span class={showLinks ? "menu-btn open" : "menu-btn"}></span>
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
