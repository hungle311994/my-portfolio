import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="title">Follow me on. Thank you.</span>

      <div className="links">
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
    </div>
  );
};

export default Footer;
