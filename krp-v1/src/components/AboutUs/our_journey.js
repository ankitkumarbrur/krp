import React from "react";
import "./our_journey.scss";
import image from "../../images/our_journey_img.png";

const Our_journey = () => {
  return (
    <section className="our-journey">
      <div className="our-journey-left">
        <img src={image} alt="our_journey" />
      </div>
      <div className="our-journey-right">
        <h2>Our Journey</h2>
        <div className="underline"></div>
        <p>
          Kaulson Motorcycles has worked hard to be what we are today, with
          their most prestigious brand logo "KRP" & "KAULSON RACING", which are
          famous throughout the country as far as the automotive industry is
          concerned. At this point of time, Kaulsons have the honour of being
          the Only Motorcycle MotorSport Company in India.
        </p>
      </div>
    </section>
  );
};

export default Our_journey;
