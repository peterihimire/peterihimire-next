import React from "react";
import Link from "next/link";
// import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";

const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});


// if (typeof window !== "undefined") {
//   TypeWriterEffect = require("react-typewriter-effect");
//   const myRef = document.querySelector(".scrollable-div");
// }
const Banner = () => {
  return (
    <header className="banner">
      <div className="row full-height">
        <div className="container full-height">
          <div className=" col s12 pad0">
            <div className="col s12 m7">
              <div className="main-text-container">
                {/* <TypeWrite /> */}
                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        '<h1>Peter <span style="color: #3187e9">Ihimire</span></h1>'
                      )
                      .pauseFor(500)
                      .typeString("<h4>Front-End Web Developer</h4>")
                      .start();
                  }}
                /> */}

                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "roboto-bold",
                    color: "white",
                    fontWeight: 500,
                  }}
                  startDelay={1000}
                  cursorColor="white"
                  text="Peter Ihimire"
                  typeSpeed={200}
                  hideCursorAfterText={true}
                  // scrollArea={myAppRef}
                />
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "roboto-bold",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "2.5em",
                  }}
                  startDelay={5000}
                  cursorColor="white"
                  multiText={["Front-End Web Developer"]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                />
                <button className="btn btn-bigger hidden-xs">
                  <Link href="/portfolio" className=" btn-link-color">
                    <a>projects</a>
                  </Link>
                </button>
              </div>
            </div>
            <div className="col s12 m5 offset-m0">
              <div className="rel righ-align main-img-container">
                <img
                  src="/undraw-code-3.svg"
                  alt="programmer"
                  className="full-width banner-img"
                />
              </div>
              <div className="btn-banner-xs  visible-xs ">
                <button className="btn btn-bigger">
                  <Link href="/portfolio" className=" btn-link-color">
                    <a>projects</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
