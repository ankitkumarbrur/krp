import React, { useState, useEffect } from "react";
import data from "../context/mockData/review-data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./styles/review.scss";

const Review = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(data.length - 1);
    }
    if (index > data.length - 1) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => setIndex(index + 1), 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="review-section">
      <div className="title">
        <div className="line"></div>
        <h1>testimonials</h1>
      </div>
      <div className="section-center">
        {data.map((item, reviewIndex) => {
          const { id, name, job, image, text } = item;
          let position = "nextSlide";

          if (reviewIndex === index) {
            position = "activeSlide";
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div className="info">
                <div className="quote">
                  <svg
                    width="155"
                    height="163"
                    viewBox="0 0 155 163"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M88.6001 11.8911V81.3198H132.6C132.6 106.841 112.861 127.605 88.6001 127.605V150.748C124.995 150.748 154.6 119.605 154.6 81.3198V11.8911H88.6001Z"
                        fill="#ECECEC"
                      />
                      <path
                        d="M0.600098 81.3198H44.6C44.6 106.841 24.8612 127.605 0.600098 127.605V150.748C36.9948 150.748 66.6002 119.605 66.6002 81.3198V11.8911H0.600098V81.3198Z"
                        fill="#ECECEC"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="154"
                          height="162"
                          fill="white"
                          transform="translate(0.600098 0.319824)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="review">
                  <h2>{text}</h2>
                  <h3>{name}</h3>
                  <p>{job}</p>
                </div>
              </div>
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
            </article>
          );
        })}
        <div className="btn">
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
