import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./Unit_CardE.module.css";

import Part_Meta from "../Section-Parts/Part_Meta";
import Bit_Label from "../Section-Bits/Bit_Label";
import Bit_Bookmark from "../Section-Bits/Bit_Bookmark";

export default function Unit_CardE({ id, title, image, description, meta, label, root }) {
  const post = { title, image, meta, label }; // A post so it can be stored for bookmarking

  return (
    <Link to={`/post/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        
        {/*------------------------------ Display Segment (Left Side) ------------------*/}
        <div className={styles.display}>
          <img src={image} alt="Card Image"/>

          {/* 🔹 Label (News, Featured, etc.) - Top Left */}
          {label && <Bit_Label label={label} />}

          {/* 🔹 Bookmark Icon (Top Right) */}
          <Bit_Bookmark className={styles.bookmark} post={post}/>

          {/* 🔹 Root Box (Movie Name) - Bottom Center */}
          <div className={styles.rootBox}>
            <span>{root}</span>
          </div>
        </div>

        {/*------------------------------ Content Segment (Right Side) -------------------*/}
        <div className={styles.content}>
          <h4>{title}</h4>
          <p>{description}</p>
          <Part_Meta meta={meta} />
        </div>

      </div>
    </Link>
  );
}
