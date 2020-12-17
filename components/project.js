import React, { Component } from "react";
import Link from "next/link";

class Project extends Component {
  state = {
    projects: [
      {
        title: "benkih ecommerce",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        title: "benkih blog",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        title: "portfolio website",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
        title: "benkih quiz",
        detail:
          "Our delivery process can take place from minutes to few hours depending on your locationlorem20 Our delivery process can take place from minutes to few hours depending on your location ",
        link: "https://benkih-ecommerce-react.netlify.app",
        image: "https://cloudinary.com/benkih-ecommerce",
      },
      {
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
      // <article className="project">
      //   <div className="img-container">
      //     <img src="/product8.png" alt="project" />
      //   </div>
      //   <div className="project-footer">
      //     <p>benkih-ecommerce</p>
      //     <h5>&copy;</h5>
      //   </div>
      // </article>
      <>
        {/* <div className="project-hover"> <p>{this.state.projects.detail}</p> </div> */}
        <article className="project">
          <div className="img-container">
            <img src={this.state.projects.image} alt="project" />
          </div>
          <div className="project-footer">
            <p>{this.state.projects.title}</p>
            <div>
              {/* <Link href={this.state.projects.link}>
                <a>&copy;</a>
              </Link> */}
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Project;
