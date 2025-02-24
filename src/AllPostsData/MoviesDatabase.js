import { useEffect, useState } from "react";

export function useMovieDatabase() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("https://city-assignment.firebaseio.com/movies.json");
                if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

                const moviesData = await response.json();

                const formattedMovies = Object.entries(moviesData).map(([id, movie]) => {
                    return {
                        id,
                        title: movie.title,
                        banner: movie.imageUrl || "/default-image.jpg",
                        rating: movie.score,
                        year: movie.releaseYear,
                        summary: movie.summary,
                        director: movie.director,
                        genres: movie.genres,
                        cast: movie.cast,
                    };
                });

                setMovies(formattedMovies);
            } catch (error) {
                console.error("Error fetching movie database:", error);
            }
        };

        fetchMovies();
    }, []);

    return movies;
}
