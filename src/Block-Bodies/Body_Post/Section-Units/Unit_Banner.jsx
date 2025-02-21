import React from "react";
import styles from "./Unit_Banner.module.css";

import Part_Meta from "../Section-Parts/Part_Meta.jsx";

export default function Unit_Banner({ title, image, meta = {} }) {
  return (
    <div className={styles.banner}>
      
      {/*---------------- Title ----------------*/}
      <h1 className={styles.title}>{title}</h1>

      {/*---------------- Image ----------------*/}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      {/*---------------- Metadata ----------------*/}
      <Part_Meta meta={meta} />

    </div>
  );
}

