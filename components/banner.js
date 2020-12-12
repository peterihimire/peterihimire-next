import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="row full-height">
        <div className="container full-height">
          <div className="col s12 pad0">
            <div className="col s12 m7">
              <div className="main-text-container">
                <h1>Hi, I'm Peter Ihimire</h1>
                <p>I'm, a front-end web developer</p>
                <div className="btn">
                  <Link href="/portfolio" className="">
                    <a>projects</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m0">
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
    </section>
  );
};

export default Banner;
