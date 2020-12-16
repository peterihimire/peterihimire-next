import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
import ProjectList from "../components/projectList";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Head>
        <title>Portfolio | Peter Ihimire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="portfolio-content">
            <h1>
              my <span> portfolio</span>
            </h1>
            <div className="portfolio-content">
              <ProjectList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
