import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Name.css";
const Name = () => {
  return (
    <>
      <div id="home">
        <div className="home-container">
          <div className="left">
            <h2>Hello 👋</h2>
            <p>
              I'm <span>Tarnak Shinde</span>
            </p>
            <ul className="links">
              <li>
                <a href="mailto:someone@example.com" target="_blank">
                  <Mail size={40} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/tarnakshinde" target="_blank">
                  <Linkedin size={40} />
                </a>
              </li>
              <li>
                <a href="https://github.com/TarnakShinde" target="_blank">
                  <Github size={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Name;
