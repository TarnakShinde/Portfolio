import "./App.css";
import Navbar from "./components/Navbar";
import { Github, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
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
      <div
        id="projects"
        style={{ height: "200vh", background: "#0f2a15" }}
      ></div>
      <div
        id="contact"
        style={{ height: "200vh", background: "#2a290f" }}
      ></div>
    </>
  );
}
export default App;
