import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";

const About = () => {
  return (
    <div className="">
      <Head>
        <title>About | Peter Ihimire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>this is about page</h4>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default About;
