import { useState, useEffect } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Background overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      <nav className="navbar">
        {/* Desktop Menu */}
        <ul className="nav-links">
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

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="overlay" onClick={() => setMenuOpen(false)} />
          <div className="mobile-menu">
            <p>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </p>
            <p>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </p>
            <p>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </p>
            <p>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Certificate
              </a>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
