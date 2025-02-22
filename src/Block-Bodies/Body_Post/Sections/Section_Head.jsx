import React from "react";
import styles from "./Section_Head.module.css";

import Unit_Banner from "../Section-Units/Unit_Banner.jsx";
import Unit_Linkage from "../Section-Units/Unit_Linkage.jsx";

export default function Section_Head({ title, image, meta = {}, tags }) {
  return (
    <div className={styles.headSection}>
      <div className={styles.container}>
        
        {/*---------------- Left: Post Title & Image ----------------*/}
        <Unit_Banner title={title} image={image} meta={meta} />

        {/*---------------- Right: Bookmark & Tags ----------------*/}
        <Unit_Linkage title={title} image={image} meta={meta} tags={tags} />

      </div>
    </div>
  );
}
