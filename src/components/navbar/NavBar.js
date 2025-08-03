import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const Navbar = () => {
  const [isActiveLink, setIsActiveLink] = useState("home");
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

  useEffect(() => {
    const sections = document.querySelectorAll('[name^="/"]');

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio to get the most visible one
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Get the entry with highest intersection ratio
          const mostVisible = visibleEntries.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max
          );

          const sectionName = mostVisible.target
            .getAttribute("name")
            .substring(1);
          console.log("Most visible section:", sectionName); // Debug log
          setIsActiveLink(sectionName);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5], // Multiple thresholds for better detection
        rootMargin: "-80px 0px -80px 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Backup scroll listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionName = section.getAttribute("name").substring(1);

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setIsActiveLink(sectionName);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
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
