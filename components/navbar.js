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
  state = {
    isOpen: false,
  };

  // mobilenav handler
  mobileHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  closeHandler = () => {
    this.setState({
      isOpen: false,
    });
  };

  componentDidMount() {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }
  render() {
    return (
      <>
        <div className="navbar">
          <nav className="trans-nav" role="navigation">
            <div className="container">
              <Link href="/" className="brand-logo left">
                <img
                  src="/peterihimire-logo.svg"
                  alt="logo image"
                  className="logo-img"
                />
              </Link>

              <a
                href="/"
                className=" right"
                // data-target="mobile-nav"
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
            <Link className="sidenav-open" href="/">
              <a>home</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="sidenav-open" href="/about">
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
