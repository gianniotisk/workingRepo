import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./Unit_CardE.module.css";

import Part_Meta from "../Section-Parts/Part_Meta";
import Bit_Label from "../Section-Bits/Bit_Label";
import Bit_Bookmark from "../Section-Bits/Bit_Bookmark";

export default function Unit_CardE({ id, title, image, description, meta, label, root }) {
  const post = { title, image, meta, label };

  return (
    <Link to={`/post/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        
        {/*------------------------------ Display Segment (Left Side) ------------------*/}
        <div className={styles.display}>
          <img src={image} alt="Card Image"/>

          {/*------------- Label (News, Featured) --------------*/}
          {label && <Bit_Label label={label} />}

          {/*------------- Bookrmark Icon ----------------------*/}
          <Bit_Bookmark className={styles.bookmark} post={post}/>

          {/*------------- Root Box (Movie Name) ---------------*/}
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