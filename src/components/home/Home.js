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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque,
          culpa, adipisci architecto ut dolorum vel porro ratione unde placeat
          voluptatibus totam quasi provident dolorem laboriosam sint, ea
          officia? Eius.
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
