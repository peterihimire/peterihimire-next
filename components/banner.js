import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <header className="banner">
      <div className="row full-height">
        <div className="container full-height">
          <div className=" col s12 pad0">
            <div className="col s12 m7">
              <div className="main-text-container">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        '<h1>Peter <span style="color: #3187e9">Ihimire</span></h1>'
                      )
                      .pauseFor(1500)
                      .typeString("<h4>Front-End Web Developer</h4>")
                      .start();
                  }}
                />
                <button className="btn btn-bigger">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
