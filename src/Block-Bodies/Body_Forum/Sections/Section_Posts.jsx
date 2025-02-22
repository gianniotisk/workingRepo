import React, { useState, useEffect } from "react";
import styles from "./Section_Posts.module.css";

import PostData from "../../../AllPostsData/PostData";
import arrL from "../../../assets/General/Arrow-L.png";
import arrR from "../../../assets/General/Arrow-R.png";
import gridIcon from "../../../assets/General/Grid-View.png";
import lineIcon from "../../../assets/General/Line-View.png";

import Unit_Hull from "../Section-Units/Unit_Hull.jsx";
import HeaderComponent from "../Section-Units/Unit_Head.jsx";

export default function Section_Post({ title, sectionId }) {
    const [filter, setFilter] = useState("All Posts");
    const [sort, setSort] = useState("Latest");
    const [category, setCategory] = useState("All");

    // 🔥 Load view mode & page number from localStorage
    const [viewMode, setViewMode] = useState(() => {
        return localStorage.getItem("viewMode") || "list";
    });

    const [currentPage, setCurrentPage] = useState(() => {
        return Number(localStorage.getItem("currentPage")) || 1;
    });

    // 🔥 Save view mode & page number when they change
    useEffect(() => {
        localStorage.setItem("viewMode", viewMode);
    }, [viewMode]);

    useEffect(() => {
        localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    const postsPerPage = viewMode === "grid" ? 8 : 8;

    //  Filter posts by selected label
    const filteredPosts = PostData.filter(post => 
        (filter === "All Posts" || post.label === filter) &&
        (category === "All" || post.category === category)
    );

    //  Sort posts based on the selected option
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sort === "Latest") return new Date(b.meta.date) - new Date(a.meta.date);
        if (sort === "Trending") return b.meta.comments - a.meta.comments;
        return 0;
    });

    //  Pagination Logic
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <section id={sectionId} className={styles.sectionPost}>
            <div className={styles.container}>

                <HeaderComponent title="Community Forum" />

                {/*------------------------------ Filter & View Toggle Box -----------*/}
                <div className={styles.filterBox}>
                    <div className={styles.filterOptions}>

                        {/* Show Posts */}
                        <div className={styles.filterItem}>
                            <label>Show Posts:</label>
                            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                                <option value="All Posts">All Posts</option>
                                <option value="Featured">Featured</option>
                                <option value="News">News</option>
                            </select>
                        </div>

                        {/* Sort By */}
                        <div className={styles.filterItem}>
                            <label>Sort By:</label>
                            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="Latest">Latest</option>
                                <option value="Trending">Trending</option>
                            </select>
                        </div>

                        {/* Category */}
                        <div className={styles.filterItem}>
                            <label>Category:</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="All">All</option>
                                <option value="Movie">Movie</option>
                                <option value="Series">Series</option>
                                <option value="Celebrities">Celebrities</option>
                                <option value="Cast">Cast</option>
                                <option value="Awards">Awards</option>
                            </select>
                        </div>

                    </div>

                    {/* View Toggle Buttons */}
                    <div className={styles.viewToggle}>
                        <button 
                            className={viewMode === "grid" ? styles.activeView : ""}
                            onClick={() => setViewMode("grid")}
                        >
                            <img src={gridIcon} alt="Grid View" />
                        </button>

                        <button 
                            className={viewMode === "list" ? styles.activeView : ""}
                            onClick={() => setViewMode("list")}
                        >
                            <img src={lineIcon} alt="List View" />
                        </button>
                    </div>
                </div>

                {/*------------------------------ Pagination Controls (TOP) --------*/} 
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        {/* Prev Button */}
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={styles.arrowBtn}
                        >
                            <img src={arrL} alt="Previous" />
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`${styles.pageBtn} ${page === currentPage ? styles.active : ""}`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={styles.arrowBtn}
                        >
                            <img src={arrR} alt="Next" />
                        </button>
                    </div>
                )}

                {/*------------------------------ Section Content --------*/}
                <div className={styles.postsWrapper}>
                    {viewMode === "grid" ? (
                        <Unit_Hull postsData={currentPosts} type="B" />
                    ) : (
                        <Unit_Hull postsData={currentPosts} type="E" />
                    )}
                </div>

                {/*------------------------------ Pagination Controls (BOTTOM) --------*/} 
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        {/* Prev Button */}
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={styles.arrowBtn}
                        >
                            <img src={arrL} alt="Previous" />
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`${styles.pageBtn} ${page === currentPage ? styles.active : ""}`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={styles.arrowBtn}
                        >
                            <img src={arrR} alt="Next" />
                        </button>
                    </div>
                )}

                {/* Create Post Button */}
                <br/>
                <button className={styles.createPostBtn}>
                    Create a Post
                </button>

            </div>
        </section>
    );
}
