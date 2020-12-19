import React, { useState, useEffect } from "react";

import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mobilenav.css";
import "../styles/banner.css";
import "../styles/about.css";
import "../styles/project.css";
import "../styles/portfolio.css";
import "../styles/projectList.css";
import Navbar from "../components/navbar";
import MobileNav from "../components/mobilenav";

function MyApp({ Component, pageProps }) {
  // For Menu Handler
  const [menuState, setMenuState] = useState({
    isOpen: false,
  });
  const openHandler = () => {
    setMenuState({
      isOpen: !menuState.isOpen,
    });
  };
  const closeHandler = () => {
    setMenuState({
      isOpen: false,
    });
  };

  // For Nav Color
  const [navColor, setNavColor] = useState({
    color: false,
  });
  const colorVisibility = () => {
    let position = window.pageYOffset;
    console.log(position);
    if (position > 50) {
      console.log("I am at position above 50px");
      setNavColor({
        color: true,
      });
    } else {
      setNavColor({
        color: false,
      });
    }
  };
  useEffect(() => {
    colorVisibility();
  }, [Component, pageProps]);

  return (
    <>
      <MobileNav closeMenu={closeHandler} openState={menuState.isOpen} />
      <Navbar openMenu={openHandler} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
