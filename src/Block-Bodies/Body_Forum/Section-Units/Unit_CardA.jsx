import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./Unit_CardA.module.css";

export default function Unit_CardA({ id, title, image }) {
  return (
    <Link to={`/post/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        
        {/*--------------------------- Frame ------------------*/}
        <div className={styles.frame}>
          
          {/*----------------------------- Movie Image --------*/}
          <img src={image} alt={title} className={styles.image} />

          {/*----------------------------- Title Overlay ------*/}
          <div className={styles.content}>
            <h4 className={styles.title}>{title}</h4>
          </div>

        </div>

      </div>
    </Link>
  );
}

