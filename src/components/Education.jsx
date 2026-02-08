import React from "react";
import LongCard from "./LongCard";
import "./Education.css";
import { educationData } from "../../data";

const Education = () => {
  return (
    <div id="education">
      <div className="education-container">
        <div className="edu-left">
          {educationData.map((edu, index) => (
            <LongCard
              key={index}
              edu_title={edu.edu_title}
              edu_date={edu.edu_date}
              edu_name={edu.edu_name}
            />
          ))}
        </div>
        <div className="edu-right">
          <h1 className="heading">
            Education <span></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
