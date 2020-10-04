import React from "react";
import Layout from "@theme/Layout";
import "../css/custom.css";

function about() {
  return (
    <Layout title="About">
      <div class="parent">
        <div class="div1">
          <h1 className="about-header">Who are we ❓</h1>
        </div>
        <div class="div2">
          <img
            className="daniel-img"
            src={"/static/img/Mohammed.jfif"}
            alt="mohammed image"
          />
          <h3 className="dev-name">Mohamed / Front End Engineer</h3>
          <p className="links">
            <a href="https://github.com/mohamedsgap">Github</a>
            <a href="https://www.linkedin.com/in/mohamedsgap/">Linkedin</a>
          </p>
          <h2>Tech</h2>
          <h3>
            React, Redux. Javascript, HTML(5), CSS(4), Github, Deployment, SASS,
            Hosting
          </h3>
        </div>
        <div class="div3">
          <img
            className="daniel-img"
            src={"/static/img/Daniel.jfif"}
            alt="Daniel image"
          />
          <h3 className="dev-name">Daniel / Front End Engineer</h3>
          <p className="links">
            <a href="https://github.com/DanieIStewart">Github</a>
            <a href="https://www.linkedin.com/in/stewart-daniel/">Linkedin</a>
          </p>
          <h2>Tech</h2>
          <h3>
            React, Redux. Javascript, HTML(5), CSS(4), Github, Deployment, SASS,
            Hosting
          </h3>
        </div>
        <div class="div4">
          <div className="tech">
            <h3>Updated daily</h3>
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
