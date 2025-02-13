import React from "react";
import Unit_CardB from "./Unit_CardB.jsx";
import styles from "./Unit_HullB.module.css";

export default function Unit_HullB({ postsData }) {

    return (
        <div className={styles.hullB}>
            {postsData.map((post, index) => (
                <Unit_CardB key={index} {...post} />
            ))}
        </div>
    );
}
