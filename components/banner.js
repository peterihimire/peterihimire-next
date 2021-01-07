import React from "react";
import Link from "next/link";
// import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});
import { TweenMax, TimelineLite, Power3 } from "gsap";

const Banner = () => {
  let banner = React.useRef(null);
  let bannerSocial = React.useRef(null);
  let bannerBtn = React.useRef(null);
  let bannerImg = React.useRef(null);

  let tl = new TimelineLite();
  // let tl2 = new TimelineLite();

  React.useEffect(() => {
    // IMAGE VARIABLE
    const devImg = bannerImg.firstElementChild;

    TweenMax.to(banner, 0, { css: { visibility: "visible" } });
    console.log(banner);
    console.log(bannerImg);
    console.log(devImg);

    tl.from(bannerImg, 4.2, { x: 1200, ease: Power3.easeOut }, 7.5).from(
      bannerImg.firstElementChild,
      3.9,
      { scale: 1.2, ease: Power3.easeOut },
      9.9
    );

    tl.from(bannerSocial, 2.3, { x: -500, ease: Power3.easeOut }, 9.2);
    tl.from(bannerBtn, 2.3, { x: -500, ease: Power3.easeOut }, 12.2);
  });

  return (
    <header className="banner" ref={(el) => (banner = el)}>
      <div className="row full-height">
        <div className="container full-height">
          <div className=" col s12 pad0">
            <div className="col s12 m12 l7">
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
                <div className="typewriter-maintext visible-xs">
                  <div className="typewriter-flex  ">
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "roboto",
                        color: "grey",
                        fontWeight: 200,
                        fontSize: "3.5em",
                      }}
                      startDelay={1000}
                      cursorColor="grey"
                      text="Peter  "
                      typeSpeed={200}
                      hideCursorAfterText={true}
                      // scrollArea={myAppRef}
                    />
                    <span>
                      <TypeWriterEffect
                        textStyle={{
                          fontFamily: "roboto-bold",
                          color: "#3187e9",
                          fontWeight: 500,
                          fontSize: "3.5em",
                        }}
                        startDelay={2500}
                        cursorColor="grey"
                        text=" Ihimire"
                        typeSpeed={200}
                        hideCursorAfterText={true}
                        // scrollArea={myAppRef}
                      />
                    </span>
                  </div>
                </div>

                <div className="typewriter-subtext visible-xs">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "roboto-bold",
                      color: "grey",
                      fontWeight: 500,
                      fontSize: "1.5em",
                    }}
                    startDelay={5000}
                    cursorColor="grey"
                    multiText={["Front-End Web Developer"]}
                    multiTextDelay={1000}
                    typeSpeed={150}
                  />
                </div>
                <div className="typewriter-flex hidden-xs">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "roboto",
                      color: "grey",
                      fontWeight: 100,
                      // fontSize: "5.5em",
                      letterSpacing: 4,
                    }}
                    startDelay={1000}
                    cursorColor="grey"
                    text="Peter  "
                    typeSpeed={200}
                    hideCursorAfterText={true}
                    // scrollArea={myAppRef}
                  />
                  <span>
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "roboto-bold",
                        color: "#3187e9",
                        fontWeight: 900,
                        // fontSize: "5.5em",
                        letterSpacing: 4,
                      }}
                      startDelay={2500}
                      cursorColor="grey"
                      text=" Ihimire"
                      typeSpeed={200}
                      hideCursorAfterText={true}
                      className="type-ihimire"
                      // scrollArea={myAppRef}
                    />
                  </span>
                </div>

                <div className="typewriter-subtext hidden-xs">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "roboto",
                      color: "grey",
                      fontWeight: 500,
                      fontSize: "1.8em",
                      letterSpacing: 3,
                    }}
                    startDelay={5000}
                    cursorColor="grey"
                    multiText={["Front-End Web Developer"]}
                    multiTextDelay={1000}
                    typeSpeed={150}
                  />
                </div>
                <div className="banner-icon-div">
                  <ul
                    className="banner-icon-list"
                    ref={(el) => (bannerSocial = el)}
                  >
                    <li className="banner-icon-item">
                      <FaFacebookF />
                    </li>
                    <li className="banner-icon-item">
                      <FaInstagram />
                    </li>
                    <li className="banner-icon-item">
                      <FaLinkedinIn />
                    </li>
                    <li className="banner-icon-item">
                      <FaGithub />
                    </li>
                  </ul>
                </div>

                <div className="btn-banner " ref={(el) => (bannerBtn = el)}>
                  <button className="btn btn-bigger ">
                    <Link href="/portfolio" className=" btn-link-color">
                      <a>projects</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l5 offset-l0 hidden-xs hidden-md ">
              <div
                className="rel righ-align main-img-container"
                ref={(el) => (bannerImg = el)}
              >
                <div className="banner-img">
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
      </div>
    </header>
  );
};

export default Banner;
