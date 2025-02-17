import React, { useState, useEffect } from "react";
import styles from "./Unit_CardC.module.css";

import playIcon from "../../../assets/Body/play.png";
import starEmpty from "../../../assets/Body/star-e.png";
import starFull from "../../../assets/Body/star-f.png";

export default function Unit_CardC({ title, image, rating }) {
  const post = { title, image, rating }; // A post so it can be stored for bookmarking

  const [bookadded, setBookadded] = useState(false);

  useEffect(() => {
    const savedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookadded(savedMovies.some((item) => item.title === post.title));
  }, [post]);

  const handleBookmarkMovie = () => {
    let savedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];

    if (bookadded) {
      // remove bookmarks
      savedMovies = savedMovies.filter((item) => item.title !== post.title);
    } else {
      // no duplicates
      if (!savedMovies.some((item) => item.title === post.title)) {
        savedMovies.push(post);
      }
    }

    localStorage.setItem("bookmarkedMovies", JSON.stringify(savedMovies));
    setBookadded(!bookadded); // Toggle button state
  };

  return (
    <div className={styles.card}>
      {/*------------------------------ Display Segment ------------------*/}
      <div className={styles.cardImage}>
        <img src={image} alt={`${title} Poster`} className={styles.poster} />
      </div>

      {/*------------------------------ Content Segment -------------------*/}
      <div className={styles.cardContent}>
        {/* Rating Section */}
        <div className={styles.cardRating}>
          <div className={styles.ratingLeft}>
            <img src={starFull} alt="Full Star" className={styles.starIcon} />
            <span>{rating}</span>
          </div>
          <div className={styles.ratingRight}>
            <span>Rate</span>
            <img src={starEmpty} alt="Empty Star" className={styles.starIcon} />
          </div>
        </div>

        {/* Title */}
        <h4>{title}</h4>

        {/* Buttons */}
        <div className={styles.cardButtons}>
          <button className={styles.watchlistBtn} onClick={handleBookmarkMovie}>
            {bookadded ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
          <button className={styles.trailerBtn}>
            <img src={playIcon} alt="Play Icon" className={styles.playIcon} />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
