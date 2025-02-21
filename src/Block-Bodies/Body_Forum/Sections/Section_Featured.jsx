import React, { useState } from "react";
import styles from "./Section_Featured.module.css";

import PostData from "../../../AllPostsData/PostData"; 
import Larrow from "../../../assets/General/Arrow-L.png";
import Rarrow from "../../../assets/General/Arrow-R.png";
import Unit_CardA from "../Section-Units/Unit_CardA"; 

export default function Section_Featured() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalItems = PostData.length;

  // Adjust number of visible items dynamically
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (index < totalItems - itemsPerPage) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(totalItems - itemsPerPage); // Loop back to end
    }
  };

  return (
    <div className={styles.featuredSection}>
      <div className={styles.container}>

        {/* Left Button */}
        <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevSlide}>
          <img src={Larrow} alt="Previous" />
        </button>

        {/* Carousel Display */}
        <div className={styles.carouselDisplay}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${index * (100 / itemsPerPage)}%)` }}
          >
            {PostData.map((post, idx) => (
              <div key={idx} className={styles.carouselItem}>
                <Unit_CardA {...post} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextSlide}>
          <img src={Rarrow} alt="Next" />
        </button>

      </div>
    </div>
  );
}
