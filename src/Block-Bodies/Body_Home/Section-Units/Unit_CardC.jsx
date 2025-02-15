import React from "react";
import styles from "./Unit_CardC.module.css";

import playIcon from "../../../assets/Body/play.png";
import plusIcon from "../../../assets/Body/plus.png";
import starEmpty from "../../../assets/Body/star-e.png";
import starFull from "../../../assets/Body/star-f.png";

export default function Unit_CardC({ title, image, rating }) {
  return (
    <div className={styles.card}>

      {/*------------------------------ Display Segment ------------------*/}
      <div className={styles.cardImage}>
        <img src={image} alt={`${title} Poster`} className={styles.poster} />
        <img src={plusIcon} alt="Bookmark Icon" className={styles.bookmarkIcon} />
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
          <button className={styles.watchlistBtn}>Add to Watchlist</button>
          <button className={styles.trailerBtn}>
            <img src={playIcon} alt="Play Icon" className={styles.playIcon} />
            Watch Trailer
          </button>
        </div>
      </div>

    </div>
  );
}
