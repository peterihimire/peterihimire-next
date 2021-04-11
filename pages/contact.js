import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";
import PlainMap from "../components/PlainMap";

const Contact = () => {
  return (
    <div className="about">
      <Head>
        <title>Contact | Peter Ihimire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="col s12 m12 l5">
                <div className="left-contact">
                  <h1>
                    contact <span>me</span>
                  </h1>
                  <div className="contact-form-div">
                    <form>
                      <div className="name-field col s12">
                        <div className=" input-field col s12 m6">
                          <input type="text" id="first_name" />
                          <label htmlFor="first_name">first name</label>
                        </div>
                        <div className=" input-field col s12 m6">
                          <input type="text" id="last_name" />
                          <label htmlFor="last_name">last name</label>
                        </div>
                      </div>
                      <div className="email-field col s12">
                        <div className="input-field col s12 m12">
                          <input type="email" id="email" />
                          <label htmlFor="email">email</label>
                        </div>
                      </div>
                      <div className="message-field col s12">
                        <div className="input-field col s12 m12">
                          <textarea
                            type="text"
                            id="message"
                            className="materialize-textarea"
                          ></textarea>
                          <label htmlFor="message">leave a message</label>
                        </div>
                      </div>
                      <div className=" col s12">
                        <button className="btn btn-bigger">submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 offset-m0 l6 offset-l1">
                <div className="plain-map-div">
                  <PlainMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
