import React from "react";
import "./Card.css";

const Card = ({ project_img, project_name, project_desc, project_link }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={project_img} alt="Card" />
      </div>

      <div className="card-body">
        <h5 className="card-title">{project_name}</h5>

        <p className="card-text">{project_desc}</p>

        <div className="button-div">
          <a href={project_link} className="card-button">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
