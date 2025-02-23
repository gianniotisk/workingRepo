import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieBookmarks.module.css";

import STAR from "../../../assets/Body/star-f.png";

export default function MovieBookmarks() {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [validMovieIds, setValidMovieIds] = useState(new Set());

  useEffect(() => {
    // Load Bookmarked Movies (from Unit_Card C)
    const savedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookmarkedMovies(savedMovies);

    // Fetch movie IDs from the database
    fetch("https://city-assignment.firebaseio.com/movies.json")
      .then((response) => response.json())
      .then((data) => {
        const movieIds = new Set(Object.keys(data));
        setValidMovieIds(movieIds);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Remove a movie from bookmarks
  const handleRemoveBookmark = (movieId) => {
    const updatedMovies = bookmarkedMovies.filter((movie) => movie.id !== movieId);
    setBookmarkedMovies(updatedMovies);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedMovies));
  };

  return (
    <div>
      {/* --------------------- Bookmarked Movies Section --------------------- */}
      <section className={styles.bookmarkSection}>
        <h2 className={styles.subHeader}>Movies</h2>
        <div className={styles.bookmarksContainer}>
          {bookmarkedMovies.length === 0 ? (
            <p>No bookmarked movies yet!</p>
          ) : (
            bookmarkedMovies.map((movie, index) => (
              <div key={index} className={styles.bookmarkedItem}>
                {validMovieIds.has(movie.id) ? (
                  <Link to={`/movieDetails/${movie.id}`}>
                    <img src={movie.image} alt={movie.title} />
                  </Link>
                ) : (
                  <img src={movie.image} alt={movie.title} />
                )}
                <div className={styles.bookmarkedText}>
                  <h4>{movie.title}</h4>
                  <p>Rating: {movie.rating}</p>
                </div>
                {/* Remove Button */}
                <img
                  src={STAR}
                  alt="Remove Bookmark"
                  className={styles.starIcon}
                  onClick={() => handleRemoveBookmark(movie.id)}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
