import React, { useState } from "react";
import styles from "./Section_Latest.module.css";

import Unit_Head from "../Section-Units/Unit_Head.jsx";
import Unit_Hull from "../Section-Units/Unit_Hull.jsx";

export default function Section_Latest({ title, moreLink, postsData, sectionId, type }) {
    const [filter, setFilter] = useState("All"); // State for filtering

    const filteredPosts = postsData.filter(post =>
        filter === "All" || post.tags.includes(filter)
    );

    return (
        <section id={sectionId} className={styles.sectionLatest}>
            <div className={styles.container}>

                {/*------------------------------ Section Head -----------*/}
                <Unit_Head title={title} moreLink={moreLink} />

                {/*------------------------------ Filter Box -----------*/}
                <div className={styles.filterBox}>
                    <button onClick={() => setFilter("All")} className={filter === "All" ? styles.active : ""}>All</button>
                    <button onClick={() => setFilter("Horror")} className={filter === "Horror" ? styles.active : ""}>Horror</button>
                    <button onClick={() => setFilter("Sci-Fi")} className={filter === "Sci-Fi" ? styles.active : ""}>Sci-Fi</button>
                    <button onClick={() => setFilter("Drama")} className={filter === "Drama" ? styles.active : ""}>Drama</button>
                    <button onClick={() => setFilter("Awards")} className={filter === "Awards" ? styles.active : ""}>Awards</button>
                </div>

                {/*------------------------------ Section Content --------*/}
                <Unit_Hull postsData={filteredPosts} type={type} />

                {/*------------------------------ See More Button --------*/}
                {moreLink && (
                    <a href={moreLink} className={styles.seeMoreBtn}>
                        See More
                    </a>
                )}

            </div>
        </section>
    );
}
