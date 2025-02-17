import { useState, useEffect } from "react";
import styles from "./posts.module.css"; // Import CSS Module

export default function Posts() {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    // Load Bookmarked Posts (from Unit_CardB)
    const savedPosts =
      JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
    setBookmarkedPosts(savedPosts);

    // Load Bookmarked Movies (from Unit_CardC)
    const savedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookmarkedMovies(savedMovies);
  }, []);

  return (
    <div>
      <header className={styles.header}>Your Bookmarks</header>

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

      {/* --------------------- Bookmarked Movies Section --------------------- */}
      <section className={styles.bookmarkSection}>
        <h2 className={styles.subHeader}>Movies</h2>
        <div className={styles.bookmarksContainer}>
          {bookmarkedMovies.length === 0 ? (
            <p>No bookmarked movies yet!</p>
          ) : (
            bookmarkedMovies.map((movie, index) => (
              <div key={index} className={styles.bookmarkedItem}>
                <img src={movie.image} alt={movie.title} />
                <div className={styles.bookmarkedText}>
                  <h4>{movie.title}</h4>
                  <p>Rating: {movie.rating}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
