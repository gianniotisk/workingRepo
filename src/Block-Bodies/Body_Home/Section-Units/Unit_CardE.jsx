import React from "react";
import styles from "./Unit_CardE.module.css";

import Part_Tags from "../Section-Parts/Part_Tags";
import Part_Meta from "../Section-Parts/Part_Meta";
import Bit_Label from "../Section-Bits/Bit_Label";
import Bit_Bookmark from "../Section-Bits/Bit_Bookmark";

export default function Unit_CardE({
  title,
  image,
  description,
  meta,
  tags,
  label,
}) {
  return (
    <div className={styles.card}>
      {/*------------------------------ Display Segment (Left Side) ------------------*/}
      <div className={styles.display}>
        <img src={image} alt="Card Image" />
        <Part_Tags tags={tags.slice(0, 1)} />
      </div>

      {/*------------------------------ Content Segment (Right Side) -------------------*/}
      <div className={styles.content}>
        <Bit_Bookmark className={styles.bookmark} />
        <h4>{title}</h4>
        <p>{description}</p>
        <Part_Meta meta={meta} />
      </div>
    </div>
  );
}
