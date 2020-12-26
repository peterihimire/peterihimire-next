import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
import ProjectList from "../components/projectList";
import Project from "../components/project";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Portfolio = ({ results }) => {
  // console.log(results);
  // let bookList = results.map((item) => {
  //   let id = item.id;
  //   let title = item.volumeInfo.title;
  //   // let authors = item.volumeInfo.authors;
  //   // let description = item.volumeInfo.description;

  //   let book = {
  //     id,
  //     title,
  //     // authors,
  //     // description,
  //   };
  //   console.log(book);

  //   return book;
  // });
  // console.log(bookList);

  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: "portfolioProjects",
      order: "sys.createdAt",
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      console.log(allPosts);
      const projects = allPosts.map((post) => {
        let id = post.sys.id;
        let image = post.fields.image.fields.file.url;
        let project = { ...post.fields, id, image };
        console.log(project);
        return project;
      });
      // setPosts([...allPosts]);
      setPosts([...projects]);
    }
    getPosts();
  }, []);

  return (
    <div className="portfolio">
      <Head>
        <title>Portfolio | Peter Ihimire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="portfolio-content">
            <h1>
              my <span> portfolio</span>
            </h1>
            <div className="portfolio-content">
              <div className="project-list">
                {/* <ProjectList /> */}
                {/* {bookList.map((book) => {
                  return <Project key={book.id} bookAll={book} />;
                })} */}

                {posts.length > 0
                  ? posts.map((p) => (
                      // console.log(p)
                      <Project
                        // alt={p.fields.alt}
                        // date={p.fields.date}
                        // key={p.fields.title}
                        image={p.image}
                        title={p.title}
                        detail={p.detail}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     "https://www.googleapis.com/books/v1/volumes?q=isbn:9783161484100"
//   );
//   console.log(res);
//   const json = await res.json();
//   console.log(json);
//   const books = json;

//   if (!json) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       results: books.items,
//     },
//   };
// }
export default Portfolio;
