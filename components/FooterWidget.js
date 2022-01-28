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
      <Link href="/">
        <img src="/assets/logo.png" />
      </Link>

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
        <a
          href="#home"
          className="fa fa-instagram"
          onClick={() => {
            window.open(
              "https://instagram.com/mm_home_creation?utm_medium=copy_link"
            );
          }}
        ></a>
        <a
          href="#home"
          className="fa fa-facebook-square"
          onClick={() => {
            window.open(
              "https://www.facebook.com/MM-HOME-Creation-110538504852837/"
            );
          }}
        ></a>
        <a href="#home" className="fa fa-youtube-play"></a>
      </div>
    </div>
  );
}

export default FooterWidget;
