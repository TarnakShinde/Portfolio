import { ArrowBigUp } from "lucide-react";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <>
      {/* <div id="top-button">
        <a href="#home">
          <ArrowBigUp className="up-button" size={50} />
        </a>
      </div> */}
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
