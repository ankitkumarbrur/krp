import React, { useState, useEffect } from "react";
import data from "./testimonials-data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./testing.scss";

const Review = () => {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   if (index < 0) {
  //     setIndex(data.length - 1);
  //   }
  //   if (index > data.length - 1) {
  //     setIndex(0);
  //   }
  // }, [index, data]);

  // useEffect(() => {
  //   let slider = setInterval(() => setIndex(index + 1), 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <section className="review-section">
      <div className="block"></div>
      <article className="article">
        <h2>testimonials</h2>
        <div className="container">
          <div className="info">
            <div className="info-text">
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                efficitur pharetra ante sit amet commodo, consectetur adipiscing
                elit. Cras efficitur pharetra ante sit amet commodo.
              </p>
              <h4>nidhi sangwan</h4>
              <h5>manager at ktm</h5>
            </div>
            <div className="info-img">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
          <div className="btn">
            <button className="prev">
              <FiChevronLeft />
            </button>
            <button className="next">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Review;
