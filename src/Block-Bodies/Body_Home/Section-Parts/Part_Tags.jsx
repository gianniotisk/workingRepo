import React from "react";

import styles from "./Part_Tags.module.css"
import Icon from "../../../assets/Body/Section-Parts/Tags.png";

export default function Part_Tags({ tags }) {
  return (
    <div className={styles.frame}>

      <div className={styles.icon}>
        <img src={Icon} alt="Tag Icon"/>
      </div>
      {tags.map((tag, index) => (
        <div className={styles.box} key={index}>
          <span>{tag}</span>
        </div>
      ))}

    </div>
  );
}
