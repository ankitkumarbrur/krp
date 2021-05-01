import React, { useState, useEffect } from "react";
import { appContext } from "../context/Context";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./styles/review.scss";

const Review = () => {
  const { review } = React.useContext(appContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(review.length - 1);
    }
    if (index > review.length - 1) {
      setIndex(0);
    }
  }, [index, review]);

  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="review-section">
      <div className="title">
        <h1>reviews</h1>
      </div>
      <div className="section-center">
        {review.map((item, reviewIndex) => {
          const { id, name, job, image, text } = item;
          let position = "nextSlide";

          if (reviewIndex === index) {
            position = "activeSlide";
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === review.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div className="info">
                <h2>{text}</h2>
                <h3>{name}</h3>
                <p>{job}</p>
              </div>
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Review;
