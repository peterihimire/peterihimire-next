import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
import dynamic from "next/dynamic";
import Link from "next/link";

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
                      Based in Nigeria, I am a seasoned front-end web developer,
                      passionate about building excellent softwares that make a
                      difference. I specialize in creating unique,
                      market-centric websites and applications that put my
                      clients above their competitors, ranging from individuals
                      and small businesses all the way to large enterprice
                      corporations. I approach every project with an attention
                      to detail and determination to exceed my clients
                      expectations. My process is very collaborative. I like to
                      involve my clients closely in every stage of the project,
                      listening and fully understanding their requirements so as
                      to deliver an online solution that meets their business
                      goals. When am not programming, you'll find me in my home
                      studio cooking up some youtube tech videos, where I share
                      my thoughts about mobile technologies. Click to download
                      my
                      <a
                        className="resume"
                        href="https://drive.google.com/file/d/192ritcuRCLA7GOuRuGPPLdETuGzGmO5b/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        resume
                      </a>
                      , for more information.
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
                      height="14px"
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
                      height="14px"
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
                    <p>bootstrap : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
                    <p>JavaScript : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
                    <p>react.js : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
                    <p>redux : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
                    <p>next.js : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
                    <p>node.js : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
                    <p>express.js : </p>
                    <ProgressBar
                      width="300px"
                      height="14px"
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
