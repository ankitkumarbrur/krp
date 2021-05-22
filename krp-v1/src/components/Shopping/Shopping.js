import React from "react";

import { Link } from "react-router-dom";
import data from "./shopping-data";
import "../Shopping/shopping.scss";

import store_img from "../../images/store_img.png";

const Shopping = () => {
  return (
    <section className="shopping-section">
      <div className="store-heading">
        <div className="store-heading-left">
          <div className="store-title">
            <div className="store-title-accent-square"></div>
            <h2 className="store-title-heading"> Store </h2>
          </div>

          <div className="store-info">
            <h3>shop with us !</h3>
            <p className="store-info-text">
              we bring you a variety of top notch products with sense of
              belief...
            </p>

            <button className="store-info-btn">
              <Link to="#">visit store</Link>
            </button>
          </div>
        </div>

        <div className="store-heading-right">
          <div className="store-image">
            <img src={store_img} alt="" />
          </div>
        </div>
      </div>

      <article className="item">
        {data.map((item) => {
          const { id, title, image } = item;
          return (
            <div className="item-container" key={id}>
              <img className="item-container-image" src={image} alt={title} />
              <h4 className="item-container-title">{title}</h4>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Shopping;
