import React, { useState, useEffect } from "react";
import data from "../context/mockData/news-data";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./styles/news.scss";

const News = () => {
  const [index, setIndex] = useState(0);

  //manual slide
  // const prevSlide = () => {
  //   const lastIndex = data.length - 1;
  //   if (index <= 0) {
  //     setIndex(lastIndex);
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };
  // const nextSlide = () => {
  //   const lastIndex = data.length - 1;
  //   if (index >= lastIndex) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };

  //* autoplay
  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     if (index >= data.length - 1) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 1);
  //     }
  //   }, 2500);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h1>supported by real people</h1>
      </div>

      <div className="section-center">
        {data.map((item, newsIndex) => {
          const { id, title, images, author } = item;
          console.log(item);
          return (
            <article key={id}>
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
      {/* <div className="nav-icons">
        {data.map((item, iconIndex) => {
          return (
            <div
              className={`circle ${iconIndex === index && "active"}`}
              onClick={() => setIndex(iconIndex)}
              key={iconIndex}
            ></div>
          );
        })}
      </div> */}
    </section>
  );
};

export default News;
