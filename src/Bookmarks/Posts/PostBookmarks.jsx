import { useState, useEffect } from "react";
import styles from "./PostBookmarks.module.css";

export default function Posts() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    // Load Bookmarked Posts (Unit_CardB)
    const savedPosts =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
    setBookmarkedPosts(savedPosts);
  }, []);

  return (
    <div>
      {/* --------------------- Bookmarked Posts Section --------------------- */}
      <section className={styles.bookmarkSection}>
        <h2 className={styles.subHeader}>Posts</h2>
        <div className={styles.bookmarksContainer}>
          {bookmarkedPosts.length === 0 ? (
            <p>No bookmarked posts yet!</p>
          ) : (
            bookmarkedPosts.map((post, index) => (
              <div key={index} className={styles.bookmarkedItem}>
                <img src={post.image} alt={post.title} />
                <div className={styles.bookmarkedText}>
                  <h4>{post.title}</h4>
                  {post.meta && (
                    <>
                      <p>Author: {post.meta.author}</p>
                      <p>Date: {post.meta.date}</p>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
