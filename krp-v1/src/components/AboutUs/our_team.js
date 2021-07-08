import React from "react";
import "./our_team.scss";
import data from "./our_team_data";

const Our_team = () => {
  return (
    <section className="our-team">
      <div className="our-team-title">
        <h2>our team</h2>
        <div className="underline"></div>
      </div>
      <div className="our-team-info">
        {data.map((items) => {
          const { id, name, title, image, social } = items;
          return (
            <div className="item" key={id}>
              <div className="item-image">
                <img src={image} alt={name} />
              </div>
              <h3 className="item-name">{name}</h3>
              <p className="item-title">{title}</p>
              <div className="social-icons">
                <a href="#">{social.facebook}</a>
                <a href="#">{social.twitter}</a>
                <a href="#">{social.instagram}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Our_team;
