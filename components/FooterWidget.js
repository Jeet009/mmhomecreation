import Link from "next/link";
import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import styles from "./footer.module.css";

function FooterWidget() {
  const { setModal } = useContext(ModalContext);
  const handleModalOpen = () => {
    setModal(true);
  };
  return (
    <div className={styles.widget}>
      <h1>MM</h1>
      <h2>Home Creation .</h2>
      <hr color="white" width="50%" />
      <div className={styles.navItem}>
        <a href="#home" onClick={handleModalOpen}>
          {" "}
          PORTFOLIO
        </a>
        <a href="#home">
          {" "}
          <Link href="/about">ABOUT</Link>
        </a>
        <a href="#home">
          {" "}
          <Link href="/contact">CONTACT</Link>
        </a>
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
