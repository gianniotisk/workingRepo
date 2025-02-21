import React from "react";
import styles from "./Unit_Related.module.css";

export default function Unit_Related({ relatedPosts }) {
  return (
    <div className={styles.related}>
      <h3 className={styles.title}>Related Posts</h3>

      <div className={styles.list}>
        {relatedPosts.map((post, index) => (
          <div key={index} className={styles.post}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>
            <div className={styles.info}>
              <h4 className={styles.postTitle}>{post.title}</h4>
              {post.caption && <p className={styles.caption}>{post.caption}</p>}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
