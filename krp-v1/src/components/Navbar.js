import React, { useState, useEffect } from "react";
// import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <section className="navbar-section">
      <nav className={navbarClasses.join(" ")}>
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h1>KRP</h1>
        <div>
          <ul>
            <Link className="nav-list" to="/">
              Home
            </Link>
            <Link className="nav-list" to="/about">
              about
            </Link>
            <Link className="nav-list" to="/shop">
              shopping
            </Link>
            <Link className="nav-list" to="/contact">
              Contact us
            </Link>
          </ul>
        </div>
        <button className="sign_in-btn">Sign In</button>
      </nav>
    </section>
  );
};

export default Navbar;
