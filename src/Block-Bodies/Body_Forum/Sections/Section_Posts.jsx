import React, { useState } from "react";
import styles from "./Section_Posts.module.css";

import arrL from "../../../assets/General/Arrow-L.png";
import arrR from "../../../assets/General/Arrow-R.png";
import gridIcon from "../../../assets/General/Grid-View.png";
import lineIcon from "../../../assets/General/Line-View.png";

import Unit_Hull from "../Section-Units/Unit_Hull.jsx";

export default function Section_Post({ title, postsData, sectionId }) {
    const [filter, setFilter] = useState("All Posts");
    const [sort, setSort] = useState("Latest");
    const [category, setCategory] = useState("All");
    const [viewMode, setViewMode] = useState("list"); // Default: List View
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Filter posts by category
    const filteredPosts = postsData.filter(post =>
        (filter === "All Posts" || post.type === filter) &&
        (category === "All" || post.category === category)
    );

    // Sort posts
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sort === "Latest") return new Date(b.date) - new Date(a.date);
        if (sort === "Trending") return b.popularity - a.popularity;
        return 0;
    });

    // Pagination Logic
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Function to generate pagination numbers with truncation
    const getPaginationNumbers = () => {
        const maxVisible = 5;
        let pages = [];

        if (totalPages <= maxVisible) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= 3) {
                pages = [1, 2, 3, "...", totalPages];
            } else if (currentPage >= totalPages - 2) {
                pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
            }
        }
        return pages;
    };

    return (
        <section id={sectionId} className={styles.sectionPost}>
            <div className={styles.container}>

                {/*------------------------------ Filter & View Toggle Box -----------*/}
                <div className={styles.filterBox}>
                    <div className={styles.filterOptions}>
                        {/* Show Posts */}
                        <label>Show Posts:</label>
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="All Posts">All Posts</option>
                            <option value="Featured">Featured</option>
                            <option value="News">News</option>
                        </select>

                        {/* Sort By */}
                        <label>Sort By:</label>
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="Latest">Latest</option>
                            <option value="Trending">Trending</option>
                        </select>

                        {/* Category */}
                        <label>Category:</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Movies">Movies</option>
                            <option value="Series">Series</option>
                            <option value="Celebrities">Celebrities</option>
                            <option value="Cast">Cast</option>
                            <option value="Awards">Awards</option>
                        </select>
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

                {/*------------------------------ Section Content --------*/}
                <div className={styles.postsWrapper}>
                    {viewMode === "grid" ? (
                        <Unit_Hull postsData={currentPosts} type="B" />
                    ) : (
                        <Unit_Hull postsData={currentPosts} type="E" />
                    )}
                </div>

                {/*------------------------------ Pagination Controls --------*/}
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
                        {getPaginationNumbers().map((page, index) => (
                            <button
                                key={index}
                                onClick={() => typeof page === "number" && setCurrentPage(page)}
                                className={`${styles.pageBtn} ${page === currentPage ? styles.active : ""}`}
                                disabled={page === "..."}>
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

            </div>
        </section>
    );
}
