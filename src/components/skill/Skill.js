import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skills" name="/skills">
      <div className="title">
        <h2>Skills</h2>
        <span>Some of my skills I've been learned.</span>
      </div>

      <div className="items">
        <div className="item">
          <span>
            <ion-icon name="logo-html5"></ion-icon>
          </span>
          <span>HTML</span>
        </div>

        <div className="item">
          <span>
            <ion-icon name="logo-css3"></ion-icon>
          </span>
          <span>CSS</span>
        </div>

        <div className="item">
          <span>
            <ion-icon name="logo-javascript"></ion-icon>
          </span>
          <span>JavaScript</span>
        </div>

        <div className="item">
          <span>
            <ion-icon name="logo-react"></ion-icon>
          </span>
          <span>ReactJs</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
