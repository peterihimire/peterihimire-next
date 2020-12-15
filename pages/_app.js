import React, { useState } from "react";

import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/mobilenav.css";
import "../styles/banner.css";
import "../styles/about.css";
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

  return (
    <>
      <MobileNav closeMenu={closeHandler} openState={menuState.isOpen} />
      <Navbar openMenu={openHandler} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
