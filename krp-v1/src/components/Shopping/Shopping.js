import React from "react";

import { Link } from "react-router-dom";
import data from "./shopping-data";
import "../Shopping/shopping.scss";

import store_img from "../../images/store_img.png";

const Shopping = () => {
  return (
    <section className="shopping-section">
      <div className="block"></div>
      <article className="info-container">
        <div className="info">
          <h2>store</h2>
          <h3>shop with us !</h3>
          <p>
            we bring you a variety of top notch products with sense of belief...
          </p>
          <button className="btn">
            <Link to="#">visit store</Link>
          </button>
        </div>

        <div className="info-img">
          <img src={store_img} alt="" />
        </div>
      </article>

      <article className="item-container">
        {data.map((item) => {
          const { id, title, image } = item;
          return (
            <div className="item" key={id}>
              <img src={image} alt={title} />
              <h4>{title}</h4>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Shopping;
