import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import "../AboutUs/main_header.scss";

const Main_header = () => {
  const [readMore, setReadMore] = useState(false);
  const info = `
    Combining all companies, Kaulson Motorcycles & Scooters Pvt. Ltd.(KMSPL) is the only Company in India, involved in design, development, manufacture and trading of Motorcycles and Motorcycle Performance Parts & Accessories. Besides we are deeply involved in sourcing of performance parts & accessories for companies as well as the individual motorcycle enthusiasts as for the Bikes & MotorSports is concerned.
  `;
  return (
    <div className="aboutUs-heading">
      <div className={readMore ? "heading active" : "heading"}>
        <h2>Who are we ?</h2>
        <h4>{readMore ? info : `${info.substring(0, 106)}`}</h4>

        <button
          className="drop-down"
          title={readMore ? "" : "Read More"}
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
        </button>
      </div>
    </div>
  );
};

export default Main_header;
