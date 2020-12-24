// import React, { Component } from "react";
// import Link from "next/link";
// import Project from "../components/project";
// import fetch from "isomorphic-unfetch";

// class ProjectList extends Component {
//   state = {
//     projects: [
//       {
//         id: 1,
//         title: "benkih ecommerce",
//         detail:
//           "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
//         link: "https://benkih-ecommerce-react.netlify.app",
//         // image: "https://cloudinary.com/benkih-ecommerce",
//         image: "/product8.png",
//       },
//       {
//         id: 2,
//         title: "benkih blog",
//         detail:
//           "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
//         link: "https://benkih-ecommerce-react.netlify.app",
//         image: "/product8.png",
//       },
//       {
//         id: 3,
//         title: "portfolio website",
//         detail:
//           "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
//         link: "https://benkih-ecommerce-react.netlify.app",
//         image: "/product8.png",
//       },
//       {
//         id: 4,
//         title: "benkih quiz",
//         detail:
//           "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
//         link: "https://benkih-ecommerce-react.netlify.app",
//         image: "/product8.png",
//       },
//       {
//         id: 5,
//         title: "benkih todo",
//         detail:
//           "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
//         link: "https://benkih-ecommerce-react.netlify.app",
//         image: "/product8.png",
//       },
//     ],
//     navColor: false,
//   };

//   render() {
//     console.log(this.state.projects);
//     console.log(this.props)
//     return (
//       <div className="project-list">
//         {this.state.projects.map((project) => {
//           return <Project key={project.id} projectAll={project} />;
//         })}
//       </div>
//     );
//   }
// }

// ProjectList.getInitialProps = async () => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   return {
//     fullName: json.full_name,
//     stars: json.stargazers_count,
//   };
// };

// export default ProjectList;

import React from "react";
import Project from "../components/project";
import fetch from "isomorphic-unfetch";

const ProjectList = ({ results }) => {
  console.log(results);
  return (
    <div className="project-list">
      {/* {this.state.projects.map((project) => {
        return <Project key={project.id} projectAll={project} />;
      })} */}
      <h5>Next stars: {results}</h5>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100"
  );
  console.log(res);
  const json = await res.json();
  console.log(json);
  const books = json;
  if (!json) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      results: books,
    },
    // fullName: json.full_name,
    // stars: json.stargazers_count,
  };

  // fetch("https://api.github.com/repos/vercel/next.js")
  //   .then((r) => r.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
}

export default ProjectList;
