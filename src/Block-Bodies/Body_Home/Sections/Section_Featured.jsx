import React, { useState, useEffect } from "react";
import styles from "./Section_Featured.module.css";

import Unit_CardA from "../Section-Units/Unit_CardA.jsx";
import PostData from "../../../AllPostsData/PostData.js";
import Larrow from "../../../assets/General/Arrow-L.png";
import Rarrow from "../../../assets/General/Arrow-R.png";

export default function Section_Featured() {

  const featuredPosts = PostData.filter((post) => post.label === "Featured");
  const totalMovies = featuredPosts.length;

  const [index, setIndex] = useState(0);

  const nextMovie = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalMovies);
  };

  const prevMovie = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalMovies) % totalMovies);
  };

  useEffect(() => {
    const interval = setInterval(nextMovie, 5000); // Auto-change every 5 seconds
    return () => clearInterval(interval);
  }, [index, totalMovies]);

  if (totalMovies === 0) {
    return (
      <section id="featured" className={styles.featured}>
        <div className={styles.container}>
          <p className={styles.noContent}>No featured content available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="featured" className={styles.featured}>
      <div className={styles.container}>
        
        {/*--------------------------------------- Left Button ---------------------*/}
        <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevMovie}>
          <img src={Larrow} alt="Previous" />
        </button>

        {/*--------------------------------------- Display Frame -------------------*/}
        <div className={styles.carouselDisplay}>
          <Unit_CardA {...featuredPosts[index]} />
        </div>

        {/*--------------------------------------- Right Button --------------------*/}
        <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextMovie}>
          <img src={Rarrow} alt="Next" />
        </button>

      </div>
    </section>
  );
}
