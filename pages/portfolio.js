import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
// import ProjectList from "../components/projectList";
import Project from "../components/project";

const Portfolio = ({ results }) => {
  console.log(results);
  let bookList = results.map((item) => {
    let id = item.id;
    let title = item.volumeInfo.title;
    // let authors = item.volumeInfo.authors;
    // let description = item.volumeInfo.description;

    let book = {
      id,
      title,
      // authors,
      // description,
    };
    console.log(book);

    return book;
  });
  console.log(bookList);
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
                {bookList.map((book) => {
                  return <Project key={book.id} bookAll={book} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
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

  // let bookList = await books.items.map((item) => {
  //   let id = item.id;
  //   let title = item.volumeInfo.title;
  //   let authors = item.volumeInfo.authors;
  //   let description = item.volumeInfo.description;

  //   let book = {
  //     id,
  //     title,
  //     authors,
  //     description,
  //   };
  //   return book
  // });

  // console.log(bookList);
  // const allBooks = await bookList;
  if (!json) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      results: books.items,
    },
  };
}
export default Portfolio;
