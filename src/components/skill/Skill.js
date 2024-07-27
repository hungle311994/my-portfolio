import React from "react";
import "./Skill.css";
import {
  SiAdobephotoshop,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiReact,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

const Skill = () => {
  const skills = [
    {
      icon: <SiHtml5 color="#e76027" />,
      name: "HTML",
    },
    {
      icon: <SiCss3 color="#2760e6" />,
      name: "CSS",
    },
    {
      icon: <SiJavascript color="#edd54a" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript color="#5cd0ef" />,
      name: "TypeScript",
    },
    {
      icon: <SiFlutter color="#5cd0ef" />,
      name: "Flutter",
    },
    {
      icon: (
        <TbBrandReactNative
          className="logo-react"
          name="logo-react"
        ></TbBrandReactNative>
      ),
      name: "React-Native",
    },
    {
      icon: <SiReact color="#5cd0ef" />,
      name: "ReactJS",
    },
    {
      icon: <FaVuejs color="#3FB17F" />,
      name: "VueJS",
    },
    {
      icon: <SiAdobephotoshop color="#0074c2" />,
      name: "Photoshop",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
  ];

  return (
    <div className="skills" name="/skills">
      <div className="title">
        <h2>Skills</h2>
        <span>Some of my skills I've been learned.</span>
      </div>

      <div className="items">
        {skills &&
          skills.map((skill) => (
            <div className="item">
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skill;
