import React from "react";
import styles from "./Unit_Head.module.css";

export default function HeaderComponent({ title }) {
    return (
        <div className={styles.frame}>
            {/*---------------------------- Section Title ------*/}
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            {/*---------------------------- Red Bottom Line ------*/}
            <div className={styles.redBottomLine}></div>
        </div>
    );
};
