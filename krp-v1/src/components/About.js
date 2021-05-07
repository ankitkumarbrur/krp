import React from "react";
import { Link } from "react-router-dom";
import "./styles/about.scss";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1541515303410-648f4a06a67a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdG9ncHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      <article className="about-info">
        <div className="line"></div>
        <h2>why krp?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <Link to="/about">
          <button>Read More</button>
        </Link>
      </article>
    </section>
  );
};

export default About;
