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
              Dynamic entry-level Full-Stack Developer with expertise in
              Next.js, ReactJS, Node.js, Supabase, and PostgreSQL, complemented
              by hands-on experience in developing full-stack web applications.
              Notable projects include Shopify, an e-commerce platform featuring
              robust user authentication and product management capabilities,
              and Smart Brain, an innovative facial recognition application
              leveraging APIs and cloud databases. Proficient in API integration
              and database management, with the ability to translate client
              requirements into scalable and effective solutions. Additionally
              knowledgeable in basic Python, enhancing versatility across
              different development environments. Committed to continuous
              learning and adapting to emerging technologies to drive project
              success.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
