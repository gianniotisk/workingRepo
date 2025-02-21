import React from "react";
import styles from "./Part_Meta.module.css";
import Comments from "../../../assets/Body/Section-Parts/Comments.png";

export default function Part_Meta({ meta = {} }) {
  return (
    <div className={styles.frame}>
      
      {/*------------------------------- Left side: Author & Date ------*/}
      <div className={styles.infoLeft}>
        <span>By <strong>{meta.author || "Unknown"}</strong></span>
        <span>{meta.date || "Unknown Date"}</span>
      </div>

      {/*------------------------------- Right side: Comments ----------*/}
      <div className={styles.infoRight}>
        <span>
          {meta.comments ?? 0}
          <img
            src={Comments}
            alt="Comment Icon"
            className={styles.comments}
          />
        </span>
      </div>

    </div>
  );
}
