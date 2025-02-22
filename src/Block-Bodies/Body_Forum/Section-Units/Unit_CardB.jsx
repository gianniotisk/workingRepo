import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./Unit_CardB.module.css";

import Part_Meta from "../Section-Parts/Part_Meta";
import Bit_Label from "../Section-Bits/Bit_Label";
import Bit_Bookmark from "../Section-Bits/Bit_Bookmark";

export default function Unit_CardB({ id, title, image, meta, label, root }) {
  const post = { title, image, meta, label }; // A post so it can be stored for bookmarking

  return (
    <Link to={`/post/${id}`} className={styles.cardLink}>
      <div className={styles.card}>

        {/*------------------------------ Display Segment ------------------*/}
        <div className={styles.display}>
          <img src={image} alt="Card Image" />
          <Bit_Label label={label} />
          <Bit_Bookmark post={post}/>

          {/* Root Box (Styled like the tag box, but with root name) */}
          <div className={styles.rootBox}>
            <span>{root}</span>
          </div>
        </div>

        {/*------------------------------ Content Segment -------------------*/}
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h4>{title}</h4>
          </div>
          <Part_Meta meta={meta} />
        </div>

      </div>
    </Link>
  );
}

