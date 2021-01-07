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
              <div className="col s12 m6 l5">
                <div className="left-about">
                  <h1>
                    about <span>me</span>
                  </h1>
                  <div className="about-img-text">
                    <div className="circle"></div>
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
                      facility using traditional financial channels.#3187e9
                    </p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 offset-m0 l6 offset-l1">
                <div className="right-about visible-xs">
                  <div className="progress-div">
                    <p>html-5 : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "orange",
                        good: "orange",
                        excellent: "orange",
                        poor: "orange",
                      }}
                      // defColor={{
                      //   fair: 'orangered',
                      //   good: 'yellow',
                      //   excellent: 'green',
                      //   poor: 'red',
                      // }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>css-3 : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "blue",
                        good: "blue",
                        excellent: "blue",
                        poor: "blue",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>JavaScript : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "yellow",
                        good: "yellow",
                        excellent: "yellow",
                        poor: "yellow",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>bootstrap : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="80"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "purple",
                        good: "purple",
                        excellent: "purple",
                        poor: "purple",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>react.js : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "cyan",
                        good: "cyan",
                        excellent: "cyan",
                        poor: "cyan",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>redux : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "cyan",
                        good: "cyan",
                        excellent: "cyan",
                        poor: "cyan",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>next.js : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="white"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "black",
                        good: "black",
                        excellent: "black",
                        poor: "black",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>node.js : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "limegreen",
                        good: "limegreen",
                        excellent: "limegreen",
                        poor: "limegreen",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>express.js : </p>
                    <ProgressBar
                      width="300px"
                      height="10px"
                      rect
                      fontColor="gray"
                      percentage="90"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="white"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "black",
                        good: "black",
                        excellent: "black",
                        poor: "black",
                      }}
                    />
                  </div>
                </div>
                <div className="right-about hidden-xs">
                  <div className="progress-div">
                    <p>html-5</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="80"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>css-3</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>bootstrap</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>JavaScript</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="80"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>

                  <div className="progress-div">
                    <p>react.js</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="70"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>redux</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="45"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>next.js</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="60"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>node.js</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="50"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
                  </div>
                  <div className="progress-div">
                    <p>express.js</p>
                    <ProgressBar
                      width="480px"
                      height="18px"
                      rect
                      fontColor="gray"
                      percentage="50"
                      rectPadding="1px"
                      rectBorderRadius="2px"
                      trackPathColor="transparent"
                      bgColor="red"
                      trackBorderColor="grey"
                      defColor={{
                        fair: "#3187e9",
                        good: "#3187e9",
                        excellent: "#3187e9",
                        poor: "#3187e9",
                      }}
                    />
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
