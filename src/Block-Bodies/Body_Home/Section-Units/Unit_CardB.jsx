import React from "react";
import styles from "./Unit_CardB.module.css";

import Part_Tags from "../Section-Parts/Part_Tags";
import Part_Meta from "../Section-Parts/Part_Meta";
import Bit_Label from "../Section-Bits/Bit_Label";
import Bit_Bookmark from "../Section-Bits/Bit_Bookmark";

export default function Unit_CardB({ title, image, meta, tags, label }) {
  return (
    <div className={styles.card}>
      
      {/*------------------------------ Display Segment ------------------*/}
      <div className={styles.display}>
        <img src={image} alt="Card Image" />
        <Bit_Label label={label} />
        <Bit_Bookmark />
        <Part_Tags tags={tags.slice(0, 1)} />  
      </div>

      {/*------------------------------ Content Segment -------------------*/}
      <div className={styles.content}>
        <h4>{title}</h4>
        <Part_Meta meta={meta} />
      </div>

    </div>
  );
}
