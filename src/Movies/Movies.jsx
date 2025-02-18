import React, { useState, useEffect } from "react";
import styles from "./Movies.module.css";

import STAR from "../assets/Body/star-f.png";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    fetch("https://city-assignment.firebaseio.com/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const moviesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
          userScore: data[key].score,
          year: data[key].releaseYear,
        }));
        setMovies(moviesArray);
        setFilteredMovies(moviesArray);
      });

    fetch("https://city-assignment.firebaseio.com/genres.json")
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedGenres, sortBy]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const onGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenres((prev) =>
      event.target.checked ? [...prev, genre] : prev.filter((g) => g !== genre)
    );
  };

  const applyFilters = () => {
    let filtered = [...movies];

    if (selectedGenres.length > 0) {
      filtered = filtered.filter((movie) =>
        selectedGenres.some((genre) =>
          genres[genre]?.some((entry) => entry.movieId === movie.id)
        )
      );
    }

    if (sortBy === "Alphabetically") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "Reverse Alphabetically") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "Highest Rated") {
      filtered.sort((a, b) => b.userScore - a.userScore);
    } else if (sortBy === "Smallest Rated") {
      filtered.sort((a, b) => a.userScore - b.userScore);
    } else if (sortBy === "Year") {
      filtered.sort((a, b) => b.year - a.year);
    }

    setFilteredMovies(filtered);
    setCurrentPage(1);
  };

  const displayedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div className="Whole-body">
      <header className={styles.title}>Explore Our Movies Database</header>

      <section className={styles.sortFilteringButtons}>
        <select
          id="sortBy"
          name="Sorting"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option disabled selected>
            Sort
          </option>
          <option value="Alphabetically">Alphabetically</option>
          <option value="Reverse Alphabetically">Reverse Alphabetically</option>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Smallest Rated">Smallest Rated</option>
          <option value="Year">Year</option>
        </select>

        <section className={styles.filteringOptions}>
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              Select Genres
            </button>
            {dropdownOpen && (
              <div className={`${styles.dropdownContent} ${styles.show}`}>
                {Object.keys(genres).map((genre) => (
                  <label key={genre}>
                    <input
                      type="checkbox"
                      value={genre}
                      onChange={onGenreChange}
                    />
                    {genre}
                  </label>
                ))}
              </div>
            )}
          </div>
        </section>
      </section>

      <section className={styles.moviesDisplay}>
        {displayedMovies.map((movie) => (
          <span className={styles.movieItem} key={movie.id}>
            <a href={`/movie-details/${movie.id}`}>
              <img
                src={movie.imageUrl}
                alt={`${movie.title} poster`}
                className={styles.moviesPoster}
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie(null)}
              />
              <p className={styles.movieSpecs}>
                <span className={styles.movieTitle}>{movie.title}</span>
                <br />
                <strong>Year:</strong> {movie.year}
                <img
                  src={STAR}
                  className={styles.ratingImage}
                  alt="Rating Star"
                />
                {movie.userScore}
              </p>
            </a>

            {/* Hover Box for when you hover over a movie poster */}
            {hoveredMovie === movie.id && (
              <div className={styles.mouseHoverBox}>{movie.summary}</div>
            )}
          </span>
        ))}
      </section>

      <aside className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? styles.active : ""}
          >
            {page}
          </button>
        ))}
      </aside>
    </div>
  );
};

export default Movies;
