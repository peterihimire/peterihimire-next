import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "materialize-css/dist/css/materialize.min.css";

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
              <div className="col s12 m6 l5">
                <div className="left-contact">
                  <h1>
                    contact <span>me</span>
                  </h1>
                  <div className="contact-form-div"> 
                  <form>
                    <div className='form-group s12'>
                      <div className=' s12 m6'>
                      <input />
                      <input />
                      </div>
                      
                    </div>
                  </form>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 offset-m0 l6 offset-l1"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
