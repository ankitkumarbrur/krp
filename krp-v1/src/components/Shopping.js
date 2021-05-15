import React from "react";
import "./styles/shopping.scss";
import data from "../context/mockData/shopping-data";

const Shopping = () => {
  return (
    <section className="shopping-section">
      <div className="title">
        <h1>shopping</h1>
        <div className="line"></div>
      </div>

      <div className="item-container">
        {data.map((item) => {
          const { id, title, image } = item;
          return (
            <div className="item" key={id}>
              <img src={image} alt={title} />
              <h2>{title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shopping;
