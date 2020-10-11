import React from "react";
import Layout from "@theme/Layout";
import "../css/custom.css";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

function algorithm() {
  return (
    <Layout title="algorithm">
      <div className="algorithm-section">
        <div className="codingBtn">
          <Link
            className={clsx(
              "button button--outline button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl("docs/TwoNumberSum")}
          >
            Coding problems
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default algorithm;
