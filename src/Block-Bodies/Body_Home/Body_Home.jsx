import { useEffect, useState } from "react";
import "./Body.css";

import Section_Featured from "./Sections/Section_Featured.jsx";
import Section from "./Sections/Section.jsx";
import Section_Latest from "./Sections/Section_Latest.jsx";

import PostData from "../../AllPostsData/PostData.js";
import { useMovieDatabase } from "../../AllPostsData/MoviesDatabase.js";

export default function Body_Home() {
    const [posts, setPosts] = useState([]);
    const movies = useMovieDatabase(); 

    useEffect(() => {
        setPosts([...PostData]);
    }, []);

    const trendingPosts = [...posts]
        .filter(post => post.meta?.comments !== undefined)
        .sort((a, b) => (b.meta?.comments || 0) - (a.meta?.comments || 0))
        .slice(0, 5);

    const newsPosts = [...posts]
        .filter(post => post.label === "News")
        .sort((a, b) => new Date(b.meta?.date) - new Date(a.meta?.date))
        .slice(0, 5);

    const popularMovies = [...movies]
        .filter(movie => !isNaN(movie.rating) && movie.rating !== "N/A")
        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
        .slice(0, 6)
        .map(movie => ({
            id: movie.id,
            title: movie.title,
            banner: movie.banner, 
            rating: movie.rating,
        }));

    return (
        <main className="Whole-body">
            <Section_Featured />

            <Section
                title="Trending in Forum"
                postsData={trendingPosts}
                sectionId="trend-container"
                type="B"
            />

            <Section
                title="Latest News"
                postsData={newsPosts}
                sectionId="news-container"
                type="B"
            />

            <Section
                title="Most Popular Movies"
                postsData={popularMovies}
                sectionId="popular-container"
                type="C"
            />

            <Section_Latest
                title="Latest Posts"
                postsData={posts}
                sectionId="latest-container"
                type="E"
            />
        </main>
    );
}
