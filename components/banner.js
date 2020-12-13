import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <header className="banner">
      <div className="row full-height">
        <div className="container full-height">
          <div className=" col s12 pad0">
            <div className="col s12 m5">
              <div className="main-text-container">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        '<h1>Peter <span style="color:  #3187e9">Ihimire</span></h1>'
                      )
                      .pauseFor(1500)
                      .typeString("<h4>Front-End Web Developer</h4>")
                      .start();
                  }}
                />
                <div className="btn">
                  <Link href="/portfolio" className="btn">
                    <a>projects</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m2">
              <div className="rel righ-align">
                <img
                  src="/undraw-code-3.svg"
                  alt="programmer"
                  className="full-width banner-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
