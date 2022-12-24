import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");

  const onHandleActive = (e) => {
    setIsActive(e);
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="nav-logo">PORTFOLIO</div>

        <ul className="nav-items">
          <li>
            <Link
              className={isActive === "home" ? "nav-item active" : "nav-item"}
              to="/home"
              smooth={true}
              onClick={() => onHandleActive("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={isActive === "skills" ? "nav-item active" : "nav-item"}
              to="/skills"
              smooth={true}
              onClick={() => onHandleActive("skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={
                isActive === "projects" ? "nav-item active" : "nav-item"
              }
              to="/projects"
              smooth={true}
              onClick={() => onHandleActive("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={
                isActive === "contact" ? "nav-item active" : "nav-item"
              }
              to="/contact"
              smooth={true}
              onClick={() => onHandleActive("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-links">
          <a
            href="https://www.linkedin.com/in/h%C6%B0ng-l%C3%AA-quang-074199234/"
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
      </nav>
    </div>
  );
};

export default Navbar;
