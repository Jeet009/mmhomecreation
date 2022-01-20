import React from "react";
import Head from "next/head";
import NavbarComponent from "../components/NavbarComponent";
import styles from "../styles/pages.module.css";
import FooterWidget from "../components/FooterWidget";

function MainTemplate({ children }) {
  return (
    <>
      {/* Head  */}
      <Head>
        <title>MM Home Creation.</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <NavbarComponent />
        {children}
        <FooterWidget />
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <a>MM Home Creation .</a>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="anonymous"
        ></script>
      </footer>
    </>
  );
}

export default MainTemplate;
