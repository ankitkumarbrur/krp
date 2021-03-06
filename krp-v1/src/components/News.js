import React, { useState, useEffect } from "react";
import data from "../context/mockData/news-data";
import "./styles/news.scss";

const News = () => {
  const [index, setIndex] = useState(0);

  //* autoplay
  useEffect(() => {
    let slider = setInterval(() => {
      if (index >= data.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="news-section">
      <div className="title">
        <h1>supported by real people</h1>
      </div>

      <div className="section-center">
        {data.map((item, newsIndex) => {
          const { id, title, images, author } = item;
          let position = "nextSlide";

          if (newsIndex === index) {
            position = "activeSlide";
          }
          if (
            newsIndex === index - 1 ||
            (index === 0 && newsIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="img-container">
                {images.map((img, index) => {
                  return <img src={img} alt="" key={index} />;
                })}
              </div>

              <div className="info-container">
                <h3>{title}</h3>
                <p>by {author}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="nav-icons">
        {data.map((item, iconIndex) => {
          return (
            <div
              className={`circle ${iconIndex === index && "active"}`}
              onClick={() => setIndex(iconIndex)}
              key={iconIndex}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
