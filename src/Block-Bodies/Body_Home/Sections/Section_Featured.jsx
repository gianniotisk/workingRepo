import React, { useState } from "react";
import styles from "./Section_Featured.module.css";

import Unit_CardA from "../Section-Units/Unit_CardA.jsx";
import FeaturedPosts from "../PostsData/FeaturedContent.js";
import Larrow from "../../../assets/General/Arrow-L.png";
import Rarrow from "../../../assets/General/Arrow-R.png";

export default function Section_Featured() {
  const [index, setIndex] = useState(0);
  const totalMovies = FeaturedPosts.length;

  const nextMovie = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalMovies);
  };

  const prevMovie = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalMovies) % totalMovies);
  };

  return (
    <section id="featured" className={styles.featured}>
      <div className={styles.container}>
        
        {/* Left Button (Now inside .container) */}
        <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevMovie}>
          <img src={Larrow} alt="Previous" />
        </button>

        {/* Movie Display */}
        <div className={styles.carouselDisplay}>
          <Unit_CardA {...FeaturedPosts[index]} />
        </div>

        {/* Right Button (Now inside .container) */}
        <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextMovie}>
          <img src={Rarrow} alt="Next" />
        </button>

      </div>
    </section>
  );
}
