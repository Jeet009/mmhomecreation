import React from "react";
import styles from "./footer.module.css";

function FooterWidget() {
  return (
    <div className={styles.widget}>
      <h1>MM</h1>
      <h2>Home Creation .</h2>
      <hr color="white" width="50%" />
      <div className={styles.navItem}>
        <a href="#home">HOME</a>
        <a href="#home">PORTFOLIO</a>
        <a href="#home">ABOUT</a>
        <a href="#home">CONTACT</a>
      </div>
      <br />
      <div className={styles.navItem}>
        <a href="#home" className="fa fa-instagram"></a>
        <a href="#home" className="fa fa-facebook-square"></a>
        <a href="#home" className="fa fa-youtube-play"></a>
      </div>
    </div>
  );
}

export default FooterWidget;
