import React, { Component } from "react";
import Link from "next/link";
import Project from "../components/project";

class ProjectList extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "benkih ecommerce",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        id: 2,
        title: "benkih blog",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        id: 3,
        title: "portfolio website",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        id: 4,
        title: "benkih quiz",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        id: 5,
        title: "benkih todo",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
    ],
  };

  render() {
    console.log(this.state.projects);
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
