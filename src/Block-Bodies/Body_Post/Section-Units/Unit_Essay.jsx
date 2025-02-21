import React from "react";
import styles from "./Unit_Essay.module.css";

export default function Unit_Essay({ content }) {
  return (
    <div className={styles.essay}>
      {content.map((block, index) => {
        if (block.type === "text") {
          return <p key={index} className={styles.text}>{block.value}</p>;
        }
        if (block.type === "image") {
          return (
            <div key={index} className={styles.imageBlock}>
              <img src={block.value} alt="Post Image" className={styles.image} />
              {block.caption && <p className={styles.caption}>{block.caption}</p>}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
