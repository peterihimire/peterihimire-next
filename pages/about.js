import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
import dynamic from "next/dynamic";

const ProgressBar = dynamic(() => import("react-animated-progress-bar"), {
  ssr: false,
});
// import ProgressBar from "react-animated-progress-bar";

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
                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="30"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="70"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="50"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="70"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="60"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    // width="230"
                    // trackWidth="13"
                    // percentage="60"
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="85"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    // width="230"
                    // trackWidth="13"
                    // percentage="60"
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="45"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    // width="230"
                    // trackWidth="13"
                    // percentage="60"
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="10"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                  />

                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="90"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="red"
                    trackBorderColor="grey"
                  />
                  <ProgressBar
                    width="500px"
                    height="10px"
                    rect
                    fontColor="gray"
                    percentage="90"
                    rectPadding="1px"
                    rectBorderRadius="2px"
                    trackPathColor="transparent"
                    bgColor="red"
                    trackBorderColor="grey"
                  />
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
