import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isActiveLink, setIsActiveLink] = useState("");
  const [isDropdowns, setIsDropdowns] = useState(true);

  const handleActive = (e) => {
    setIsActiveLink(e);
  };
  const handleDropdowns = () => {
    setIsDropdowns(!isDropdowns);
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => setIsDropdowns(true));
    return document.removeEventListener("mousedown", () =>
      setIsDropdowns(true)
    );
  }, []);

  return (
    <div className="nav-container">
      <nav>
        <div className="nav-logo">PORTFOLIO</div>

        <div className={`nav-direct ${isDropdowns ? "inactive" : "active"}`}>
          <ul className="nav-items">
            <li>
              <Link
                className={
                  isActiveLink === "home" ? "nav-item active" : "nav-item"
                }
                to="/home"
                smooth={true}
                onClick={() => handleActive("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActiveLink === "skills" ? "nav-item active" : "nav-item"
                }
                to="/skills"
                smooth={true}
                onClick={() => handleActive("skills")}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActiveLink === "projects" ? "nav-item active" : "nav-item"
                }
                to="/projects"
                smooth={true}
                onClick={() => handleActive("projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActiveLink === "contact" ? "nav-item active" : "nav-item"
                }
                to="/contact"
                smooth={true}
                onClick={() => handleActive("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-links">
            <a
              href="https://www.linkedin.com/in/hungle311994/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a
              href="https://www.facebook.com/hungle0301/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>

            <a
              href="https://github.com/hungle311994"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>

        <div className="nav-options">
          <button onClick={handleDropdowns}>
            {isDropdowns && (
              <span>
                <ion-icon name="list-outline"></ion-icon>
              </span>
            )}

            {!isDropdowns && (
              <span>
                <ion-icon name="close-outline"></ion-icon>
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
