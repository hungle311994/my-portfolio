import { FaVuejs } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiCss3,
  SiDart,
  SiFigma,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import "./Skill.css";

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
      icon: <SiDart color="#0175C2" />,
      name: "Dart",
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
      name: "React Native",
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
      icon: <SiFigma color="#F24E1E" />,
      name: "Figma",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
    {
      icon: <SiGitlab color="#FC6D26" />,
      name: "GitLab",
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
          skills.map((skill, index) => (
            <div className="item" key={index}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skill;
