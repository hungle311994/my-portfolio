import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I am Hung Le";
  const typingSpeed = 150; // milliseconds per character
  const deletingSpeed = 100; // milliseconds per character when deleting
  const pauseTime = 2000; // pause time at the end before deleting

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeEffect, typingSpeed);
        } else {
          // Pause before deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, pauseTime);
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedText(fullText.slice(0, currentIndex));
          timeoutId = setTimeout(typeEffect, deletingSpeed);
        } else {
          // Reset for next cycle
          isDeleting = false;
          timeoutId = setTimeout(typeEffect, typingSpeed);
        }
      }
    };

    typeEffect(); // Start the effect

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home" name="/home">
      <div className="disc">
        <span>Hello,</span>
        <h1>
          {displayedText}
          <span className="cursor"></span>
        </h1>
        <p>
          I'm a Mobile Developer. I'm trying to be better by learning day by
          day. Welcome to my personal website!
        </p>
        <Link className="get-in-touch" to="/contact" smooth={true}>
          <span>GET IN TOUCH</span>
        </Link>
      </div>

      <div className="avt">
        <img src={require("../../assets/images/avatar.png")} alt="" />
      </div>
    </div>
  );
};

export default Home;
