import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import styles from "./Unit_Related.module.css";
import PostData from "../../../AllPostsData/PostData"; // Import all posts

// 🔹 Function to pick a random post from a filtered list
const getRandomPost = (posts) => posts.length > 0 ? posts[Math.floor(Math.random() * posts.length)] : null;

export default function Unit_Related() {
  // 🔹 Get all posts for each label
  const featuredPosts = PostData.filter(p => p.label === "Featured");
  const newsPosts = PostData.filter(p => p.label === "News");
  const nullPosts = PostData.filter(p => p.label === null); // For posts with no label

  // 🔹 Pick one random post from each category
  const selectedPosts = [
    getRandomPost(featuredPosts),
    getRandomPost(newsPosts),
    getRandomPost(nullPosts)
  ].filter(Boolean); // Remove any `null` values (in case a category has no posts)

  // 🔹 If no related posts, don't render the section
  if (selectedPosts.length === 0) return null;

  return (
    <div className={styles.related}>
      <h3 className={styles.title}>Related Posts</h3>

      <div className={styles.list}>
        {selectedPosts.map((related, index) => (
          <Link to={`/post/${related.id}`} key={index} className={styles.postLink}> {/* ✅ Make clickable */}
            <div className={styles.post}>
              <div className={styles.imageWrapper}>
                <img src={related.image} alt={related.title} className={styles.image} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.postTitle}>{related.title}</h4>
                {related.caption && <p className={styles.caption}>{related.caption}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



