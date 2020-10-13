import React from "react";
import Layout from "@theme/Layout";
import "../css/custom.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import detectMob from "../utils";

const imgProfiles = {
  mohamed: {
    imageUrl: "img/Mohammed.jpg",
  },
  daniel: {
    imageUrl: "img/Daniel.jpg",
  },
};

function about() {
  const imgUrlMo = useBaseUrl(imgProfiles.mohamed.imageUrl);
  const imgUrlDan = useBaseUrl(imgProfiles.daniel.imageUrl);

  return (
    <Layout title="About">
      <div className={detectMob() ? "parent-mobile" : "parent"}>
        <div className="div1">
          <h1 className="about-header">Who are we ❓</h1>
        </div>
        <div className="div2">
          <img className="daniel-img" src={imgUrlMo} alt="Mohamed-Img" />
          <h3 className={detectMob() ? "dev-name-mobile" : "dev-name"}>
            Mohamed / Front End Engineer
          </h3>
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
          <h2 className={detectMob() ? "headers-mobile" : ""}>
            Technical skills{" "}
          </h2>
          <h3 className={detectMob() ? "headers-mobile" : ""}>
            React, Redux. Javascript, HTML(5), CSS(4), Github, Deployment, SASS,
            Hosting
          </h3>
        </div>
        <div className="div3">
          <img className="daniel-img" src={imgUrlDan} alt="Mohamed-Img" />
          <h3 className={detectMob() ? "dev-name-mobile" : "dev-name"}>
            Daniel / Front End Engineer
          </h3>
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
          <h2 className={detectMob() ? "headers-mobile" : ""}>
            Technical skills
          </h2>
          <h3 className={detectMob() ? "headers-mobile" : ""}>
            React, Redux. Javascript, HTML(5), CSS(4), Github, Deployment, SASS,
            Hosting
          </h3>
        </div>
      </div>
    </Layout>
  );
}

export default about;
