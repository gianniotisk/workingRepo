import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./MovieDetails.module.css";
import MovieChat from "./MovieChat/MovieChat";

import EMPTYSTAR from "../assets/Body/star-e.png";
import FILLEDSTAR from "../assets/Body/star-f.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [bookadded, setBookadded] = useState(false);

  useEffect(() => {
    fetch(
      `https://city-assignment.firebaseio.com/movies.json?orderBy="$key"&equalTo="${id}"`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          const movieKey = Object.keys(data)[0];
          const movieData = data[movieKey];
          const movieObject = {
            id,
            title: movieData.title,
            image: movieData.imageUrl,
            imageUrl: movieData.imageUrl,
            year: movieData.releaseYear,
            userScore: movieData.score,
            rating: movieData.score,
            description: movieData.summary,
            director: movieData.director,
            cast: movieData.cast || [],
            genres: movieData.genres || [],
          };
          setMovie(movieObject);

          // Check if the movie is already bookmarked
          const savedMovies =
            JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
          setBookadded(savedMovies.some((item) => item.id === id));
        }
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://city-assignment.firebaseio.com/reviews.json?orderBy="movieId"&equalTo="${id}"`
    )
      .then((response) => response.json())
      .then((data) => {
        const reviewList = Object.values(data || {}).map((review) => ({
          ...review,
          dateTime: review.dateTime || new Date().toISOString(),
        }));
        setReviews(reviewList);
      });
  }, [id]);

  const addReview = (newReview) => {
    fetch(`https://city-assignment.firebaseio.com/reviews.json`, {
      method: "POST",
      body: JSON.stringify({
        ...newReview,
        movieId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
      });
  };

  const handleBookmarkMovie = () => {
    let savedMovies =
      JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];

    if (bookadded) {
      // Remove bookmark
      savedMovies = savedMovies.filter((item) => item.id !== id);
    } else {
      // Add bookmark if not already saved
      if (!savedMovies.some((item) => item.id === id)) {
        savedMovies.push(movie);
      }
    }

    localStorage.setItem("bookmarkedMovies", JSON.stringify(savedMovies));
    setBookadded(!bookadded);
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.WholeBody}>
      <section className={styles.movieDetails}>
        <img
          src={movie.imageUrl}
          alt={`${movie.title} poster`}
          className={styles.moviePoster}
        />

        <section className={styles.movieInfo}>
          <header className={styles.mainTitle}>{movie.title}</header>

          <div className={styles.starContainer}>
            <label className={styles.starToggle} onClick={handleBookmarkMovie}>
              <img
                src={bookadded ? FILLEDSTAR : EMPTYSTAR}
                alt="Bookmark Icon"
                className={styles.star}
              />
            </label>
          </div>

          <section className={styles.generalInformation}>
            <p>
              <strong>Year:</strong> {movie.year || "Not available"}
            </p>
            <p>
              <strong>Director:</strong> {movie.director || "Not available"}
            </p>
            <p>
              <strong>User Score:</strong> {movie.userScore}
            </p>
          </section>

          <section className={styles.plot}>
            <header className={styles.title}>Plot Summary</header>
            <hr />
            <p>{movie.description || "Description not available"}</p>
          </section>
        </section>
      </section>

      <hr />
      <header className={styles.title}>Genres</header>
      <ul className={styles.genreAndCastList}>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>

      <hr />
      <header className={styles.title}>Cast</header>
      <ul className={styles.genreAndCastList}>
        {movie.cast.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
      <hr />

      <MovieChat reviews={reviews} addReview={addReview} />
    </div>
  );
};

export default MovieDetails;
