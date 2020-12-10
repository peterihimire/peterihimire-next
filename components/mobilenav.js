import React, {useState} from "react";
import Link from "next/link";

const Mobilenav = () => {
  return (
    <>
      <div className=" mobile-nav-overlay transparent-bg" />
      <div className="mobile-nav">
        <div className="mobile-nav-logo">
          <img src="" alt="mobile-nav logo" className="" />
        </div>
        <ul className="">
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;
