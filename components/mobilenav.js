import React, { useState } from "react";
import Link from "next/link";

const Mobilenav = (props) => {
  return (
    <>
      <div
        className={
          props.openState
            ? "mobile-nav-overlay transparent-bg"
            : "mobile-nav-overlay"
        }
        onClick={props.closeMenu}
      />
      <div className={props.openState ? "mobile-nav show-nav" : "mobile-nav"}>
        <div className="mobile-nav-logo">
          <img
            src="/peterihimire-logo-alt.svg"
            alt="mobile-nav logo"
            className=""
          />
        </div>
        <ul className="">
          <li className="mobile-nav-item">
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/portfolio">
              <a>portfolio</a>
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;
