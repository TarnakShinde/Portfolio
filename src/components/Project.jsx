import React from "react";
import "./Project.css";
import Card from "./Card";
import { projectData } from "../../data";

const Project = () => {
  return (
    <div id="projects">
      <div className="project-container">
        <div className="project-heading">
          <p>
            Project <span></span>
          </p>
        </div>
        <div className="project-grid">
          {projectData.map((prx, index) => {
            return (
              <Card
                key={index}
                project_img={prx.project_img || "https://placehold.co/400x200"}
                project_name={prx.project_name}
                project_desc={prx.project_desc}
                project_link={prx.project_link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
