import React from "react";
import Unit_CardB from "./Unit_CardB.jsx";
import Unit_CardE from "./Unit_CardE.jsx";

import styles from "./Unit_Hull.module.css";

export default function Unit_Hull({ postsData, type }) {
    // Determine which card component to use
    const SelectedComponent = type === "B" ? Unit_CardB : Unit_CardE;

    return (
        <div className={styles[`hull${type}`]}>
            {postsData.map((post, index) => (
                <SelectedComponent key={index} {...post} />
            ))}
        </div>
    );
}
