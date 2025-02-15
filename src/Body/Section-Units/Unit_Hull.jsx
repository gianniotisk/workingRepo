import React from "react";
import Unit_CardB from "./Unit_CardB.jsx";
import Unit_CardC from "./Unit_CardC.jsx";
import Unit_CardE from "./Unit_CardE.jsx";

import styles from "./Unit_Hull.module.css";

const componentMap = {
    B: Unit_CardB,
    C: Unit_CardC,
    E: Unit_CardE,
};

export default function Unit_Hull({ postsData, type }) {
    const SelectedComponent = componentMap[type] || Unit_CardB;

    return (
        <div className={styles[`hull${type}`] || styles.defaultHull}>
            {postsData.map((post, index) => (
                <SelectedComponent key={index} {...post} />
            ))}
        </div>
    );
}
