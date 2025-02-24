import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import styles from "./Unit_CardC.module.css";

import playIcon from "../../../assets/Body/play.png";
import starEmpty from "../../../assets/Body/star-e.png";
import starFull from "../../../assets/Body/star-f.png";
import plusIcon from "../../../assets/Body/plusIcon.png";
import minusIcon from "../../../assets/Body/minusIcon.png";

export default function Unit_CardC({ id, title, banner, rating }) {
  const post = { id, title, banner, rating }; 
  const [bookadded, setBookadded] = useState(false);
  const [validImage, setValidImage] = useState(banner); 

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookadded(savedMovies.some((item) => item.id === post.id));
  }, [post]);

  const handleBookmarkMovie = (e) => {
    e.preventDefault();
    let savedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];

    if (bookadded) {
      savedMovies = savedMovies.filter((item) => item.id !== post.id);
    } else {
      savedMovies.push(post);
    }

    localStorage.setItem("bookmarkedMovies", JSON.stringify(savedMovies));
    setBookadded(!bookadded);
  };

  return (
    <Link to={`/movieDetails/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img 
            src={validImage} 
            alt={`${title} Poster`} 
            className={styles.poster}
            onError={() => setValidImage("/default-image.jpg")}
          />
        </div>

        <div className={styles.cardContent}>
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

          <h4>{title}</h4>

          <div className={styles.cardButtons}>
            <button
              className={`${styles.watchlistBtn} ${bookadded ? styles.removeFromWatchlist : ""}`}
              onClick={handleBookmarkMovie}
            >
              <img
                src={bookadded ? minusIcon : plusIcon}
                alt={bookadded ? "Remove Watchlist" : "Add Watchlist"}
                className={styles.watchlistBtnImage}
              />
              {bookadded ? "Remove Watchlist" : "Add Watchlist"}
            </button>
            <button className={styles.trailerBtn}>
              <img src={playIcon} alt="Play Icon" className={styles.playIcon} />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
