import React from "react";
import styles from "./Section.module.css";

import Unit_Head from "../Section-Units/Unit_Head.jsx";
import Unit_Hull from "../Section-Units/Unit_Hull.jsx";

export default function Section({ title, moreLink, postsData, sectionId, type }) {
    return (
        <section id={sectionId} className={styles[`section${type}`] || styles.defaultSection}>

            <div className={styles.container}>
                {/*------------------------------ Section Head -----------*/}
                <Unit_Head title={title} moreLink={moreLink} />
                {/*------------------------------ Section Content --------*/}
                <Unit_Hull postsData={postsData} type={type}/>
            </div>

        </section>
    );
}
