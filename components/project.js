import React, { Component } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

class Project extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <article className="project">
          <div className="img-container">
            <img src={this.props.image} alt="project" />
            <div className="project-hover">{this.props.detail}</div>
          </div>
          <div className="project-footer">
            <p>{this.props.title}</p>
            <div className="fa-link-div">
              <a
                href={this.props.online}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaLink className="fa-link" />
              </a>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Project;

// import React, { Component } from "react";
// import Link from "next/link";

// class Project extends Component {
//   render() {
//     console.log(this.props.bookAll);
//     return (
//       <>
//         <article className="project">
//           <div className="img-container">
//             <img src={this.props.projectAll.image} alt="project" />
//             <div className="project-hover">{this.props.projectAll.detail}</div>
//           </div>
//           <div className="project-footer">
//             <p>{this.props.projectAll.title}</p>
//             <div>
//               <Link href={this.props.projectAll.link}>
//                 <a>&copy;</a>
//               </Link>
//             </div>
//           </div>
//         </article>
//       </>
//     );
//   }
// }

// export default Project;

// import React, { Component } from "react";
// import Link from "next/link";

// class Project extends Component {

//   render() {
//     console.log(this.props.bookAll);
//     return (

//       <>
//         {/* <div className="project-hover">{this.props.projectAll.detail}</div> */}
//         <article className="project">
//           <div className="img-container">
//             <img src='/product8.png' alt="project" />
//           </div>
//           <div className="project-footer">
//             <p>{this.props.bookAll.title}</p>
//             <div>
//               <Link href={this.props.bookAll.id}>
//                 <a>&copy;</a>
//               </Link>
//             </div>
//           </div>
//         </article>
//       </>
//     );
//   }
// }

// export default Project;
