import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./Unit_CardA.module.css";

export default function Unit_CardA({ id, title, billboard }) {
  return (
    <Link to={`/post/${id}`} className={styles.cardLink}>
      <div className={styles.card}>

        {/*----------------------------- Movie Image ---------------*/}
        <img src={billboard} alt={title} className={styles.billboard}/>

        {/*----------------------------- Title Overlay -------------*/}
        <div className={styles.content}>
          <h4 className={styles.title}>{title}</h4>
        </div>
      
      </div>
    </Link>
  );
}
