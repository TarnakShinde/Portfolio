import React from "react";
import "./Card2.css";

const Card2 = ({ certificate_img, certificate_title, certificate_desc }) => {
  return (
    <div className="card2-container">
      <div className="card2-wrapper">
        <div className="card2-area">
          <div className="card2">
            <img src={certificate_img} alt="" />
            <div className="card2-overlay">
              <h3>{certificate_title}</h3>
              <p>{certificate_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
