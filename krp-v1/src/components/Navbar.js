import React from "react";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar">
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
