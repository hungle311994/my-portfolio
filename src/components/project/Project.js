import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="projects" name="/projects">
      <div className="title">
        <h2>Projects</h2>
        <span>Check out of my projects.</span>
      </div>

      <div className="items">
        <div className="item">
          <div className="img-wrap">
            <img src={require("../../assets/clone-TGDD.png")} alt="" />
          </div>

          <div className="content">
            <span>TGDD Page</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ipsum quidem non ullam in? Perspiciatis doloremque harum a nulla
              dolores mollitia deleniti nostrum minus fugit. Placeat,
              consectetur ab. Fuga, temporibus.
            </p>

            <div className="btn">
              <a
                href="https://github.com/hungle311994/clone-TGDD-page"
                target="_blank"
                rel="noreferrer"
              >
                <span>View Page</span>
                <span className="icon">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </a>
              <a
                href="https://github.com/hungle311994/clone-TGDD-page"
                target="_blank"
                rel="noreferrer"
              >
                <span>View GitHub</span>
                <span className="icon">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="img-wrap">
            <img src={require("../../assets/sign-up.png")} alt="" />
          </div>

          <div className="content">
            <span>Sign Up Page</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              ratione maiores exercitationem reprehenderit laborum voluptatem
              eos atque tempore quae, accusantium corrupti labore commodi natus
              earum explicabo architecto, praesentium nihil autem!
            </p>

            <div className="btn">
              <a
                href="https://github.com/hungle311994/sign-up"
                target="_blank"
                rel="noreferrer"
              >
                <span>View Page</span>
                <span className="icon">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </a>
              <a
                href="https://github.com/hungle311994/sign-up"
                target="_blank"
                rel="noreferrer"
              >
                <span>View GitHub</span>
                <span className="icon">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
