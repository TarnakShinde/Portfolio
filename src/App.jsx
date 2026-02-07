import About from "./components/About";
import Education from "./components/Education";
import Name from "./components/Name";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* NAME SECTION */}
      <Name />

      {/* ABOUT SECTION */}
      <About />

      <Education />
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
