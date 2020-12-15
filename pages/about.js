import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";

const About = () => {
  return (
    <div className="about">
      <Head>
        <title>About | Peter Ihimire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="col s12 m5">
                <div className="left-about">
                  <h1>
                    about <span>me</span>
                  </h1>
                  <div className="about-img-text">
                    <div className="circl"></div>
                    <p>
                      To provide a client tailored service that allows for the
                      easy ownership of vehicles to a wider range of people who
                      might have had a harder time getting these type of payment
                      facility using traditional financial channels. To provide
                      a client tailored service that allows for the easy
                      ownership of vehicles to a wider range of people who might
                      have had a harder time getting these type of payment
                      facility using traditional financial channels. To provide
                      a client tailored service that allows for the easy
                      ownership of vehicles to a wider range of people who might
                      have had a harder time getting these type of payment
                      facility using traditional financial channels. To provide
                      a client tailored service that allows for the easy
                      ownership of vehicles to a wider range of people who might
                      have had a harder time getting these type of payment
                      facility using traditional financial channels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 offset-m1">
                <div className="right-about">
                  <div className="about-img-text">
                    <p>
                      To provide a client tailored service that allows for the
                      easy ownership of vehicles to a wider range of people who
                      might have had a harder time getting these type of payment
                      facility using traditional financial channels. To provide
                      a client tailored service that allows for the easy
                      ownership of vehicles to a wider range of people who might
                      have had a harder time getting these type of payment
                      facility using traditional financial channels. To provide
                      a client tailored service that allows for the easy
                      ownership of vehicles to a wider range of people who might
                      have had a harder time getting these type of payment
                      facility using traditional financial channels. To provide
                      a client tailored service that allows for the easy
                      ownership of vehicles to a wider range of people who might
                      have had a harder time getting these type of payment
                      facility using traditional financial channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
