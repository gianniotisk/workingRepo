import React from "react";
import styles from "./Unit_CardA.module.css";

export default function Unit_CardA({ title, image }) {
  return (
    <div className={styles.card}>

      {/*----------------------------- Movie Image --------*/}
      <img src={image} alt={title} className={styles.image} />

      {/*----------------------------- Title Overlay ------*/}
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    
    </div>
  );
}
