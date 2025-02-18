import { useState, useEffect } from "react";
import styles from "./MovieBookmarks.module.css";

export default function MovieBookmarks() {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    const savedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookmarkedMovies(savedMovies);
  }, []);

  return (
    <div>
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
