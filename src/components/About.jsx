import React from "react";
import "./About.css";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="about-container">
          <div className="about-left">
            <div className="aboutme">
              About Me<span></span>
            </div>
          </div>
          <div className="about-right">
            <div className="info">
              Web developer with experience in React, Next.js, Node.js, and
              Express.js, focused on building responsive frontend interfaces and
              scalable backend APIs. Familiar with MySQL, PostgreSQL, Supabase,
              version control using Git/GitHub, API integration, and programming
              with Java and Python.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
