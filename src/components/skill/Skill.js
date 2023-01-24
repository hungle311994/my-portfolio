import React from "react";
import "./Skill.css";
import {
  SiAdobephotoshop,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

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
            <SiHtml5 />
          </span>
          <span>HTML</span>
        </div>

        <div className="item">
          <span>
            <SiCss3 />
          </span>
          <span>CSS</span>
        </div>

        <div className="item">
          <span>
            <SiJavascript />
          </span>
          <span>JavaScript</span>
        </div>

        <div className="item">
          <span>
            <ion-icon name="logo-react"></ion-icon>
          </span>
          <span>ReactJs</span>
        </div>

        <div className="item">
          <span>
            <SiRedux />
          </span>
          <span>Redux</span>
        </div>

        <div className="item">
          <span>
            <SiTypescript />
          </span>
          <span>TypeScript</span>
        </div>

        <div className="item">
          <span>
            <SiAdobephotoshop />
          </span>
          <span>Photoshop</span>
        </div>

        <div className="item">
          <span>
            <SiGithub />
          </span>
          <span>Github</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
