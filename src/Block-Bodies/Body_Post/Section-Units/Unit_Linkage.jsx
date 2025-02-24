import React from "react";
import { Link } from "react-router-dom";
import styles from "./Unit_Linkage.module.css";
import Bit_Bookmark from "../Section-Bits/Bit_Bookmark.jsx";
import starFull from "../../../assets/Body/star-f.png";
import { useMovieDatabase } from "../../../AllPostsData/MoviesDatabase.js"; 

export default function Unit_Linkage({ title, meta = {}, tags, id, movieTitle }) {
    const movies = useMovieDatabase(); 
    const movie = movies.find((m) => m.id === id); 

    return (
        <div className={styles.linkage}>
            <div className={styles.bookmarkContainer}>
                <span>Bookmark this Post:</span>
                <Bit_Bookmark post={{ title, meta, tags, id, movieTitle }} />
            </div>

            <h3 className={styles.relatedText}>Related Movie:</h3>
            {movie && (
                <Link to={`/movieDetails/${movie.id}`} className={styles.movieCardLink}>
                    <div className={styles.movieCard}>
                        <div className={styles.movieCardImage}>
                            <img 
                                src={movie.banner}  
                                alt={`${movie.title} Poster`} 
                                onError={(e) => e.target.src = "/default-image.jpg"}  
                            />
                        </div>
                        <div className={styles.movieCardContent}>
                            <h4>{movie.title}</h4>
                            <div className={styles.movieDetails}>
                                <span>{movie.year}</span>
                                <div className={styles.ratingContainer}>
                                    <img src={starFull} alt="Star" className={styles.starIcon} />
                                    <span>{movie.rating || "N/A"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
