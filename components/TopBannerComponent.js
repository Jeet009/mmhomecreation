import React from "react";
import styles from "./banner.module.css";

function TopBannerComponent({ data }) {
  return (
    <main
      className={styles.main}
      style={{ backgroundImage: `url(${data.imgUrl})` }}
    >
      <div className={styles.overlay}>
        <h4>{data.h4}</h4>
        <h1>{data.h1} </h1>
        <h2>{data.h2} </h2>
      </div>
    </main>
  );
}

export default TopBannerComponent;
