import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home" name="/home">
      <div className="disc">
        <span>Hello,</span>
        <h1>
          I am Hung Le
          <span className="cursor"></span>
        </h1>
        <p>
          I'm a Front-end Developer. I'm trying to be better by learning day by
          day. Welcome to my personal website!
        </p>
        <Link className="get-in-touch" to="/contact" smooth={true}>
          <span>GET IN TOUCH</span>
        </Link>
      </div>

      <div className="avt">
        <img src={require("../../assets/avt-g3.png")} alt="" />
      </div>
    </div>
  );
};

export default Home;
