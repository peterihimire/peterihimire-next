import React, { Component } from "react";
import Link from "next/link";
// import { Spin as Hamburger } from "hamburger-react";
// import M from "materialize-css/dist/js/materialize.min.js";

if (typeof window !== "undefined") {
  // window.$ = $;
  // window.jQuery = $;
  const M = require("materialize-css");
}

// class Navbar extends Component {
//   // state = {
//   //   isOpen: false,
//   // };

//   // // mobilenav handler
//   // mobileHandler = () => {
//   //   this.setState({
//   //     isOpen: !this.state.isOpen,
//   //   });
//   // };
//   // closeHandler = () => {
//   //   this.setState({
//   //     isOpen: false,
//   //   });
//   // };

//   componentDidMount() {
//     // sidenav
//     const sideNav = document.querySelector(".sidenav");
//     M.Sidenav.init(sideNav, {});
//   }
//   render() {
//     return (
//       <>
//         <div className="navbar">
//           <nav className="trans-nav" role="navigation">
//             <div className="container">
//               <Link href="/" className="brand-logo left">
//                 <img
//                   src="/peterihimire-logo.svg"
//                   alt="logo image"
//                   className="logo-img"
//                 />
//               </Link>

//               <a
//                 href="#"
//                 className=" sidenav-trigger right"
//
//                 // data-target="mobile-nav"
//               >
//                 {/* <i className="material-icons black-text">menu</i> */}
//                 <img
//                   src="/menuicon.svg"
//                   alt="menu"
//                   className="  menu-icon-img"
//                 />
//                 {/* <Hamburger /> */}
//               </a>

//               <ul className=" hide-on-med-and-down nav-links">
//                 <li className="nav-item">
//                   <Link href="/">
//                     <a>home</a>
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link href="/about">
//                     <a>about</a>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>

//         <ul className="sidenav" id="mobile-nav">
//           <li className="nav-item">
//             <Link className="sidenav-open" href="/">
//               <a>home</a>
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link className="sidenav-open" href="/about">
//               <a>about</a>
//             </Link>
//           </li>
//         </ul>
//       </>
//     );
//   }
// }

const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <nav className="trans-nav" role="navigation">
          <div className="container">
            <Link href="/" className="brand-logo left">
              <a>
                <img
                  src="/peterihimire-logo-alt.svg"
                  alt="logo image"
                  className="logo-img"
                />
              </a>
            </Link>

            <div
              className=" hide-on-large-only sidenav-trigger right"
              onClick={props.openMenu}
              // data-target="mobile-nav"
            >
              {/* <i className="material-icons black-text">menu</i> */}
              <img
                src="/menuicon-alt.svg"
                alt="menu"
                className="  menu-icon-img"
              />
              {/* <Hamburger rounded color="#000" label="Show menu" distance="md" /> */}
            </div>

            <ul className=" right hide-on-med-and-down nav-links">
              <li className="nav-item ">
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about">
                  <a>about</a>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link href="/portfolio">
                  <a>portfolio</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact">
                  <a>contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
