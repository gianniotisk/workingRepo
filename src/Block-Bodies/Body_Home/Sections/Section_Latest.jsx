import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Section_Latest.module.css";

import Unit_Head from "../Section-Units/Unit_Head.jsx";
import Unit_Hull from "../Section-Units/Unit_Hull.jsx";

export default function Section_Latest({ title, moreLink, postsData, sectionId, type }) {
    const [filter, setFilter] = useState("All");

    //------------ Apply filter based on selected category ------------//
    const filteredPosts = [...postsData]
        .filter(post => {
            if (filter === "All") return true;
            if (filter === "Featured") return post.label === "Featured";
            if (filter === "News") return post.label === "News";
            if (filter === "Trending") return post.meta?.comments > 0;
            if (filter === "By Finch") return post.meta?.author === "Finch";
            return false;
        })
        .sort((a, b) => new Date(b.meta?.date) - new Date(a.meta?.date)) // Sort by latest date
        .slice(0, 6); // Only take the latest 6

    return (
        <section id={sectionId} className={styles.sectionLatest}>
            <div className={styles.container}>

                {/*------------------------------ Section Head ------------------*/}
                <Unit_Head title={title} moreLink={moreLink} />

                {/*------------------------------ Filter Box --------------------*/}
                <div className={styles.filterBox}>
                    <button onClick={() => setFilter("All")} className={filter === "All" ? styles.active : ""}>All</button>
                    <button onClick={() => setFilter("Featured")} className={filter === "Featured" ? styles.active : ""}>Featured</button>
                    <button onClick={() => setFilter("News")} className={filter === "News" ? styles.active : ""}>News</button>
                    <button onClick={() => setFilter("Trending")} className={filter === "Trending" ? styles.active : ""}>Trending</button>
                    <button onClick={() => setFilter("By Finch")} className={filter === "By Finch" ? styles.active : ""}>By Finch</button>
                </div>

                {/*------------------------------ Section Content ---------------*/}
                <Unit_Hull postsData={filteredPosts} type={type} />

                {/*------------------------------ See More Button ---------------*/}
                {moreLink && (
                    <Link to="/Forum" className={styles.seeMoreBtn}>
                                                See More
                    </Link>
                )}

            </div>
        </section>
    );
}
