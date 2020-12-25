import React, { Component } from "react";
import Link from "next/link";
import Project from "../components/project";
import fetch from "isomorphic-unfetch";

class ProjectList extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "benkih ecommerce",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        // image: "https://cloudinary.com/benkih-ecommerce",
        image: "/product8.png",
      },
      {
        id: 2,
        title: "benkih blog",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "/product8.png",
      },
      {
        id: 3,
        title: "portfolio website",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "/product8.png",
      },
      {
        id: 4,
        title: "benkih quiz",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "/product8.png",
      },
      {
        id: 5,
        title: "benkih todo",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "/product8.png",
      },
    ],
    navColor: false,
  };

  render() {
    console.log(this.state.projects);
    console.log(this.props)
    return (
      <div className="project-list">
        {this.state.projects.map((project) => {
          return <Project key={project.id} projectAll={project} />;
        })}
      </div>
    );
  }
}



export default ProjectList;

// import React from "react";
// import Project from "../components/project";
// // import fetch from "isomorphic-unfetch";

// const ProjectList = ({ results }) => {
//   console.log(results);
//   return (
//     <div className="project-list">
//       {this.state.projects.map((project) => {
//         return <Project key={project.id} projectAll={project} />;
//       })}
//     </div>
//   );
// };



// export default ProjectList;
