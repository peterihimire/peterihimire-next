import React, { Component } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
// import M from "materialize-css/dist/js/materialize.min.js";

if (typeof window !== "undefined") {
  // window.$ = $;
  // window.jQuery = $;
  const M = require("materialize-css");
}

class Navbar extends Component {
  componentDidMount() {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }
  render() {
    return (
      <>
        <div className="navbar">
          <nav>
            <div className="container">
              <Link href="/" className="brand-logo left">
                <a>BENKIH</a>
              </Link>

              <a
                href="/"
                className="sidenav-trigger right"
                data-target="mobile-nav"
              >
                {/* <i className="material-icons black-text">menu</i> */}
                <img
                  src="/menuicon.svg"
                  alt="menu"
                  className="  menu-icon-img"
                />
                {/* <Hamburger /> */}
              </a>

              <ul className=" hide-on-med-and-down nav-links">
                <li className="nav-item">
                  <Link href="/">
                    <a>home</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/about">
                    <a>about</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile-nav">
          <li className="nav-item">
            <Link href="/">
              <a>home</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

// const Navbar = () => {
//   return (
//     <div>
//       <ul className="nav-link">
//         <li className="nav-item">
//           <Link href="/">
//             <a>home</a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/about">
//             <a>about</a>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default Navbar;
