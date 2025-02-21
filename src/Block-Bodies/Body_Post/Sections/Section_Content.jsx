import React from "react";
import styles from "./Section_Content.module.css";

import Unit_Essay from "../Section-Units/Unit_Essay.jsx";
import Unit_Related from "../Section-Units/Unit_Related.jsx";

export default function Section_Content({ content, relatedPosts }) {
  return (
    <div className={styles.contentSection}>
      <div className={styles.container}>
        
        {/*----------------- Main Post Content ---------------*/}
        <Unit_Essay content={content} />

        {/*----------------- Related Posts Sidebar ---------------*/}
        <Unit_Related relatedPosts={relatedPosts} />

      </div>
    </div>
  );
}
