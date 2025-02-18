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

  useEffect(() => {
    fetch(
      `https://city-assignment.firebaseio.com/movies.json?orderBy="$key"&equalTo="${id}"`
    )
      .then((response) => response.json())
      .then((data) => {
        const movieKey = Object.keys(data)[0];
        const movieData = data[movieKey];
        setMovie({
          title: movieData.title,
          imageUrl: movieData.imageUrl,
          year: movieData.releaseYear,
          userScore: movieData.score,
          description: movieData.summary,
          director: movieData.director,
          cast: movieData.cast || [],
          genres: movieData.genres || [],
        });
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
            <label className={styles.starToggle}>
              <input type="checkbox" hidden />
              <img
                src={EMPTYSTAR}
                alt="Bookmark Icon Empty"
                className={styles.star}
              />
              <img
                src={FILLEDSTAR}
                alt="Bookmark Icon Filled"
                className={styles.starFilled}
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
