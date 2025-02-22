import React, { useState} from "react";
import styles from "./Body_WebsitePolicy.module.css";

export default function Body_WebsitePolicy(){

    return(
        <main className={styles.WholeBody}>
            <header className={styles.title}> Website Policy</header>

            <h2 className={styles.subTitle}><u> All users using this site must abide to the following</u></h2>

            <ul className={styles.policyList}>
                <li> <strong>Age restriction</strong><br />  This website is intended for users aged 12 or above.</li>
                <li> <strong>Privacy</strong><br />  Users are not allowed to post anything related to their personal lifes.</li>
                <li> <strong>Fair Use</strong><br /> Advertisements coming from third parties are prohibited.</li>
                <li> <strong>Innapropriate Language</strong><br /> All users should respect each other and not use swear words.</li>
            </ul>
        </main>
    );
}