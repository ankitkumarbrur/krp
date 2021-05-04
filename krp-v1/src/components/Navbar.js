import React, { useState, useEffect } from "react";
// import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet >= 80) {
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
      <nav className="navbar-container">
        <div className="title">
          <Link to="/">
            <h1>KRP</h1>
          </Link>
        </div>
        <div className="pages">
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
          <div className="btn-container">
            <button className="btn sign-up">Sign up</button>
            <button className="btn login">Login</button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
