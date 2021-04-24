import React, { useState } from "react";
import { appContext } from "../context/Context";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./styles/review.scss";

const Review = () => {
  const { review } = React.useContext(appContext);
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    if (index >= review.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prevReview = () => {
    if (index <= 0) {
      setIndex(review.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const { id, name, job, image, text } = review[index];
  return (
    <section className="review" key={id}>
      <div className="review-container">
        <div>
          <h2>{text}</h2>
          <h3>{name}</h3>
          <p>{job}</p>
        </div>
        <button onClick={prevReview}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextReview}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
    </section>
  );
};

export default Review;
