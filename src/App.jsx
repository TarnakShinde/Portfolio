import { ArrowBigUp } from "lucide-react";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import { useEffect, useState } from "react";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const footerTop = footer?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show after some scroll, hide near footer
      if (window.scrollY > 300 && footerTop > windowHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div id="top-button" className={showButton ? "show" : ""}>
        <a href="#home">
          <ArrowBigUp className="up-button" size={30} />
        </a>
      </div>
      <Navbar />
      <Name />
      <About />
      <Education />
      <Project />
      <Certificate />
      <Footer />
    </>
  );
}
export default App;
