import React from "react";
import Layout from "@theme/Layout";
import "../css/custom.css";
// import useBaseUrl from "@docusaurus/useBaseUrl";

function algorithm() {
  return (
    <Layout title="algorithm">
      <div className="algorithm-section">
        <h1 className="algorithm-header">Algorithms 101</h1>
      </div>
      <img
        className="algorithm-image"
        alt="algorithm image"
        src="https://miro.medium.com/max/2424/1*7ErHjLrOGhdkmMm_nQfo-g.png"
      />
    </Layout>
  );
}

export default algorithm;
