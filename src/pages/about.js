import React from "react";
import Layout from "@theme/Layout";
import Image from "@theme/IdealImage";
import "../css/custom.css";

function about() {
  return (
    <Layout title="About">
      <div className="parent">
        <div className="div1">
          <h1 className="about-header">Who are we ❓</h1>
        </div>
        <div className="div2">
          <Image
            className="daniel-img"
            img={require("../../static/img/Mohammed.jpg")}
            alt="Mohamed-Img"
          />
          <h3 className="dev-name">Mohamed / Front End Engineer</h3>
          <p className="links">
            <a href="https://github.com/mohamedsgap">
              <img src="https://img.icons8.com/nolan/64/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/mohamedsgap/">
              <img src="https://img.icons8.com/nolan/64/linkedin.png" />
            </a>
            <a href="https://twitter.com/MohamedsGap">
              <img src="https://img.icons8.com/nolan/64/twitter-circled.png" />
            </a>
            <a href="https://twitter.com/mohamedsgap">
              <img src="https://img.icons8.com/nolan/64/source-code.png" />
            </a>
          </p>
          <h2>Technical skills </h2>
          <h3>
            React, Redux. Javascript, HTML(5), CSS(4), Github, Deployment, SASS,
            Hosting
          </h3>
        </div>
        <div className="div3">
          <Image
            className="daniel-img"
            img={require("../../static/img/Daniel.jpg")}
            alt="Mohamed-Img"
          />
          <h3 className="dev-name">Daniel / Front End Engineer</h3>
          <p className="links">
            <a href="https://github.com/DanieIStewart">
              <img src="https://img.icons8.com/nolan/64/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/stewart-daniel/">
              <img src="https://img.icons8.com/nolan/64/linkedin.png" />
            </a>
            <a href="https://twitter.com/devdaniel2019">
              <img src="https://img.icons8.com/nolan/64/twitter-circled.png" />
            </a>
            <a href="https://www.devdaniel.co.uk/">
              <img src="https://img.icons8.com/nolan/64/source-code.png" />
            </a>
          </p>
          <h2>Technical skills</h2>
          <h3>
            React, Redux. Javascript, HTML(5), CSS(4), Github, Deployment, SASS,
            Hosting
          </h3>
        </div>
        <div className="div4">
          <div className="tech">
            <h3>Thank you for visiting</h3>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="about-container">
          <h1>Who are we ❓</h1>
        </div>
        <div className="about-img">
          <img
            className="daniel-img"
            src={
              "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            }
          />
          <img
            className="mo-img"
            src={
              "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            }
          />
        </div>
      </div> */}
    </Layout>
  );
}

export default about;
