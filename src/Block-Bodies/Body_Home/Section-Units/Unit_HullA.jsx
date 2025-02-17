import React, { useState } from "react";
import styles from "./Unit_HullA.module.css";

import Unit_CardA from "./Unit_CardA.jsx";
import Larrow from "../../../assets/General/Arrow-L.png";
import Rarrow from "../../../assets/General/Arrow-R.png";

export default function Unit_HullA({ postsData }) {
  const [index, setIndex] = useState(0);
  const totalMovies = postsData.length;

  const nextMovie = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalMovies);
  };

  const prevMovie = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalMovies) % totalMovies);
  };

  return (
    <div className={styles.carousel}>
      {/* Left Button */}
      <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevMovie}>
        <img src={Larrow} alt="Previous" />
      </button>

      {/* Movie Display */}
      <div className={styles.carouselDisplay}>
        <Unit_CardA {...postsData[index]} />
      </div>

      {/* Right Button */}
      <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextMovie}>
        <img src={Rarrow} alt="Next" />
      </button>
    </div>
  );
}
