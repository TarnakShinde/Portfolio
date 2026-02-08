import React from "react";
import "./LongCard.css";

const LongCard = ({ edu_title, edu_date, edu_name }) => {
  return (
    <>
      <div className="longcard">
        <div className="container">
          <div className="education_info">
            <div>
              <h1 className="education_title">{edu_title}</h1>
              <p className="edu_name">{edu_name}</p>
            </div>
            <p className="edu_date">{edu_date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongCard;
