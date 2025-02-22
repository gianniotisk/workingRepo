import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./CrewFilmography.module.css";


export default function CrewFilmography({ movies }) {
  return (
    <>
      <header className={styles.filmography}>Filmography</header>
      <section className={styles.crewMovies}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <span key={movie.id} className={styles.crewMoviesItems}>
              <Link to={`/movieDetails/${movie.id}`}>
                <img src={movie.imageUrl} alt={`${movie.title} poster`} />
                <p>{movie.title}</p>
              </Link>
            </span>
          ))
        ) : (
          <p>No movies available for this crew member.</p>
        )}
      </section>
    </>
  );
}

CrewFilmography.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};
