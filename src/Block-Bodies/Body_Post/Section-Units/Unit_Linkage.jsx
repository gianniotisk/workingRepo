import React from "react";
import styles from "./Unit_Linkage.module.css";

import Bit_Bookmark from "../Section-Bits/Bit_Bookmark.jsx";

export default function Unit_Linkage({ tags }) {
  return (
    <div className={styles.linkage}>
      
      {/*---------------- Bookmark Button ----------------*/}
      <div className={styles.bookmarkContainer}>
        <span>Bookmark this Post:</span>
        <Bit_Bookmark />
      </div>

      {/*---------------- Tags Section ----------------*/}
      <div className={styles.tags}>
        <h3>Tags:</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
