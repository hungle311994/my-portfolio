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
            <ul>
              <li>Render products at homepage</li>
              <li>Add, Update, Delete products at admin page</li>
              <li>
                Add products to order bag and calculate the quantity & price
              </li>
              <li>Validate form sign up & login</li>
              <li>Technology used: HTML, CSS, JavaScript, ReactJS, Redux</li>
            </ul>

            <div className="btn">
              <a
                href="https://tgdd-page.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Preview</span>
                <span className="icon">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </a>
              <a
                href="https://github.com/hungle311994/clone-tgdd-pages"
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
            <ul>
              <li>Validate form input</li>
              <li>Show & Hide password</li>
              <li>Technology used: HTML, CSS, JavaScript, Bootstrap</li>
            </ul>

            <div className="btn">
              <a
                href="https://signup-tab.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Preview</span>
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
