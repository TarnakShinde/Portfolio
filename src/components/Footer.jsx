import React from "react";
import "./Footer.css";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <div className="footer-name-info">
            <h1>Tarnak Shinde</h1>
            <div className="footer-icons">
              <a href="mailto:someone@example.com">
                <Mail size={22} />
              </a>
              <a href="https://github.com/TarnakShinde">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com/in/tarnakshinde">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
          <div className="footer-information">
            <div className="footer-nav-links">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#certificate">Certificate</a>
                </li>
              </ul>
            </div>
            <p className="footer-copyright">
              © 2026 Tarnak Shinde. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
